module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["Tajawal"],
      },
      colors: {
        mainblue: "#476C86",
        darkGray: " #606060",
        lightGray: "#D7D7D7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
