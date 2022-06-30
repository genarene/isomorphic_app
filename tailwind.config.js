module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        title: "rgb(120,129,149)",
        inputGray: "#E9E9E9",
        accentBlue: "#4F90FD",
        faceBookBlue: "#3B5998",
        googleOrange: "#DD4B39",
        authOrange: "#E14618",
        firebaseYellow: "#F2BD21",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
