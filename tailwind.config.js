module.exports = {
    purge: {mode: "all", content: ["./src/**/*.{js,jsx,ts,tsx}"]},
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "light-gray": "#ededed",
                "medium-gray": "#777777",
                "dark-gray": "#444444",
                "dark-blue": "#0011bb",
                "dark-purple": "#6600cc"
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
