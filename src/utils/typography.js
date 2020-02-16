import Typography from "typography"

const headerDefaultFonts = [
  "Poppins",
  "Helvetica Neue",
  "Segoe UI",
  "Helvetica",
  "Arial",
  "sans-serif",
]

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  headerFontFamily: headerDefaultFonts,
  bodyFontFamily: ["Open Sans", "sans-serif"],
  overrideStyles: () => ({
    a: {
      fontFamily: ["Fira Code", "Open Sans", "sans-serif"].join(","),
    },
  }),
})

export default typography
