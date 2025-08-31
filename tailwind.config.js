/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{html,njk,md}",
    "./*.{html,njk}"
];
export const theme = {
    extend: {
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'], // single easy-to-use font
        },
        colors: {
        // ✅ custom colors
        primary: '#c8a775',     // blue
        // secondary: '#9333EA',   // purple
        // accent: '#F59E0B',      // amber
        // brand: {
        //   light: '#A7F3D0',
        //   DEFAULT: '#10B981',  // emerald green
        //   dark: '#047857',
        },
    },
};
export const plugins = [];
