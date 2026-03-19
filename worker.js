
/**
 * Cloudflare Worker for The Palm Las Vegas - AI Concierge
 * 
 * Model: gemma-3-27b-it
 * API Key Secret: API_KEY_palm
 */

const SYSTEM_PROMPT = `You are the Virtual AI Concierge for The Palm Las Vegas, a legendary Italian-American steakhouse located in The Forum Shops at Caesars Palace.
Your tone is professional, sophisticated, and incredibly welcoming—reflecting the "Legendary Hospitality" The Palm has been famous for since 1926.

Key Knowledge:
- Location: The Forum Shops at Caesars Palace, 3500 Las Vegas Blvd. South, Las Vegas, NV 89109.
- Specialties: Prime-aged steaks, massive Nova Scotia lobsters (3lb+), and signature Italian-American dishes like Gigante Meatballs and Chicken Parmigiana.
- Heritage: Known for the hundreds of hand-painted caricatures of celebrities and loyal guests on our walls.
- "837 Club": Our loyalty program where guests earn rewards.
- Prime Time: Our upscale happy hour from Sunday to Friday, 3:00 PM to 5:30 PM.
- Vibe: Dark charcoal wood, high-end white tablecloths, intimate and classic ambiance.

When answering:
1. ALWAYS provide a single-line response. Never use multiple sentences or line breaks.
2. Be extremely concise and direct while remaining polite.
3. If they ask about reservations, quickly mention the booking widget on our site.
4. Do not elaborate; give the core information immediately.`;

export default {
    async fetch(request, env) {
        // Handle CORS preflight requests
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization",
                    "Access-Control-Max-Age": "86400",
                },
            });
        }

        // Only allow POST requests for interacting with the AI
        if (request.method !== "POST") {
            return new Response(JSON.stringify({ error: "Method Not Allowed. Please use POST." }), {
                status: 405,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
        }

        try {
            const body = await request.json();
            const prompt = body.prompt;

            if (!prompt) {
                return new Response(JSON.stringify({ error: "Bad Request. 'prompt' is required." }), {
                    status: 400,
                    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
                });
            }

            const apiKey = env.API_KEY_palm;
            if (!apiKey) {
                return new Response(JSON.stringify({ error: "Service Configuration Error. API Key not found." }), {
                    status: 500,
                    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
                });
            }

            const model = "gemma-3-27b-it";
            const apiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

            const geminiResponse = await fetch(apiURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            role: "user",
                            parts: [{ text: `${SYSTEM_PROMPT}\n\nGuest: ${prompt}` }],
                        },
                    ],
                    generationConfig: {
                        maxOutputTokens: 1000,
                        temperature: 0.7,
                    }
                }),
            });

            if (!geminiResponse.ok) {
                const errorData = await geminiResponse.text();
                return new Response(JSON.stringify({ error: "AI Service Error", details: errorData }), {
                    status: geminiResponse.status,
                    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
                });
            }

            const data = await geminiResponse.json();
            const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, but I am unable to answer that at the moment. How else can I assist you?";

            return new Response(JSON.stringify({
                success: true,
                response: responseText,
                model: model
            }), {
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            });

        } catch (error) {
            return new Response(JSON.stringify({ error: "Internal Error", message: error.message }), {
                status: 500,
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            });
        }
    },
};
