/** @type {import('tailwindcss').Config} */

const path = require("path");
const flowbiteThemePatch = path.dirname(require.resolve("flowbite-react"));

module.exports = {
    content: [
        `${flowbiteThemePatch}/**/*.{js,jsx,ts,tsx}`,
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [require('flowbite/plugin')],
};

