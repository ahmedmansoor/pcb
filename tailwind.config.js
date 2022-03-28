module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
       fontFamily:{
                text: ['circular', 'sans-serif'],
                textLight: ['circularMedium', 'sans-serif'],
            },
        colors: {
                dark: "#111827",
                darkgray: "#29303D",
                darker: "#0e0e1a",
                bluegray: "#001d2f",
                darkbluegray: "#001827",
                primary: "#0E8165",
                primarydark: "#303c60",
                primarylight: "#E2EFEC",
            },
    },
  },
  plugins: [],
}
