/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'palm-black': '#111111',
                'palm-gold': '#D4AF37',
                'palm-white': '#FFFFFF',
                'accent-red': '#c41e3a',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85))',
            }
        },
    },
    plugins: [],
}
