import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

// const lightBg = "#f0e7db"
const lightBg = "#ffffff"
const darkBg = "#1a202c"

const lightFg = "#000001"
const darkFg = "#ffffff"

const styles = {
  global: (props) => ({
    body: {
      bg: mode(lightBg, darkBg)(props),
      color: mode(lightFg, darkFg)(props),
    },
  }),
}

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
}

const fonts = {
  // heading: 'M PLUS Rounded 1c'
  heading: "Inter, sans-serif",
  body: "Inter, sans-serif",
}

const colors = {
  glassTeal: "#88ccca",
  blue: {
    50: "#edf1fc",
    100: "#cfd5e3",
    200: "#b0bacd",
    300: "#919eb9",
    400: "#7282a5",
    500: "#58698b",
    600: "#44526d",
    700: "#303a4e",
    800: "#1c2330",
    900: "#050c15",
  },
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
})

export default theme
