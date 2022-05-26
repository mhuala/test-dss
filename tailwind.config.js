module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                rale: "'Raleway', sans-serif",
                roboto: "'Roboto', sans-serif",
                fredoka: "'Fredoka', sans-serif",
                athiti: "'Athiti', sans-serif",
            },
            colors: {
                brand: {
                    DEFAULT: "#050527",
                    wave: "#16164d",
                    footer: "#4338CA",
                    icon: "#3671E9",
                },
            },
            backgroundImage: {
                'valdivia-t': "url('./src/Images/cities-thumbnails/t-valdivia.jpg')"
              }
        },
    },
    plugins: [],
};
