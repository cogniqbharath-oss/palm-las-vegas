
/**
 * Cloudflare Worker for The Palm Restaurant - Gemini AI Interface
 * 
 * Target URL: https://fragrant-unit-9548.cogniq-bharath.workers.dev/
 * Model: gemma-3-27b-it
 * API Key Secret: API_KEY_palm (set via 'wrangler secret put API_KEY_palm')
 */

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
            // Parse the incoming request JSOn
            const body = await request.json();
            const prompt = body.prompt;

            if (!prompt) {
                return new Response(JSON.stringify({ error: "Bad Request. 'prompt' is required in JSON body." }), {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            }

            // Access the Gemini API Key from environment variables (Secrets)
            const apiKey = env.API_KEY_palm;
            if (!apiKey) {
                return new Response(JSON.stringify({ error: "Service Configuration Error. API_KEY_palm not found in environment." }), {
                    status: 500,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            }

            // Configuration for the Gemini Model
            const model = "gemma-3-27b-it";
            const apiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

            // Forward the request to Google's Generative Language API
            const geminiResponse = await fetch(apiURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: prompt }],
                        },
                    ],
                    generationConfig: {
                        maxOutputTokens: 2048,
                        temperature: 0.7,
                        topP: 0.95,
                    }
                }),
            });

            // Handle non-OK responses from Gemini API
            if (!geminiResponse.ok) {
                const errorData = await geminiResponse.text();
                return new Response(JSON.stringify({
                    error: "Gemini API Error",
                    status: geminiResponse.status,
                    details: errorData
                }), {
                    status: geminiResponse.status,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            }

            const data = await geminiResponse.json();

            // Extract the generated text from the response structure
            const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response content found.";

            // Return the response back to the client
            return new Response(JSON.stringify({
                success: true,
                response: responseText,
                model: model,
                usage: data.usageMetadata
            }), {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });

        } catch (error) {
            // Catch-all for unexpected errors
            return new Response(JSON.stringify({
                error: "Internal Worker Error",
                message: error.message
            }), {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
        }
    },
};
