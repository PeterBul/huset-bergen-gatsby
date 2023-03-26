import { baseTheme, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// const lightBg = "#f0e7db"
const lightBg = '#fffff1'
const darkBg = '#1a202c'

const lightFg = '#000001'
const darkFg = '#ffffff'

const styles = {
  global: (props) => ({
    body: {
      fontSize: baseTheme.fontSizes['lg'],
      bg: mode(lightBg, darkBg)(props),
      color: mode(lightFg, darkFg)(props),
    },
  }),
}

const fonts = {
  // heading: 'M PLUS Rounded 1c'
  heading: '"DM Sans", sans-serif',
  body: '"DM Sans", sans-serif',
  mono: 'DM Mono, Menlo, monospace',
}

const components = {
  Button: {
    baseStyle: {
      display: 'inline-flex',
      textDecoration: 'none',
      fontWeight: baseTheme.fontWeights.bold,
      fontSize: baseTheme.fontSizes[2],
      lineHeight: baseTheme.lineHeights.solid,
      paddingTop: baseTheme.space[3],
      paddingBottom: baseTheme.space[3],
      paddingLeft: baseTheme.space[3],
      paddingRight: baseTheme.space[3],
      borderRadius: baseTheme.radii.button,
    },
    variants: {
      primary: (props) => {
        console.log(props)
        return {
          color: mode(lightBg, darkBg)(props),
          backgroundColor: props.theme.colors.primary,
          _hover: {
            backgroundColor: props.theme.colors.active,
          },
          _focus: {
            backgroundColor: props.theme.colors.active,
          },
        }
      },
      reversed: (props) => ({
        color: props.theme.colors.primary,
        backgroundColor: props.theme.colors.background,
        ':hover': {
          color: props.theme.colors.background,
          backgroundColor: props.theme.colors.active,
        },
        ':focus': {
          color: props.theme.colors.background,
          backgroundColor: props.theme.colors.active,
        },
      }),
      link: (props) => ({
        textDecoration: 'none',
        color: 'inherit',
        backgroundColor: 'transparent',
        ':hover': {
          backgroundColor: props.theme.colors.muted,
        },
        ':focus': {
          backgroundColor: props.theme.colors.muted,
        },
      }),
    },
  },
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
      superHeading: {
        marginTop: baseTheme.space[8],
        marginBottom: baseTheme.space[32],
        fontSize: baseTheme.fontSizes['6xl'],
        fontFamily: fonts.heading,
        fontWeight: baseTheme.fontWeights.extrabold,
        lineHeight: baseTheme.lineHeights.heading,
        letterSpacing: baseTheme.letterSpacings.tight,
      },
      heading: {
        marginBottom: baseTheme.space[4],
        fontFamily: baseTheme.heading,
        fontSize: baseTheme.fontSizes['4xl'],
        fontWeight: baseTheme.fontWeights.bold,
        lineHeight: baseTheme.lineHeights.shorter,
        letterSpacing: baseTheme.letterSpacings.tight,
      },
      subhead: {
        marginBottom: baseTheme.space[3],
        fontSize: baseTheme.fontSizes['4xl'],
        fontWeight: baseTheme.fontWeights.extrabold,
        lineHeight: baseTheme.lineHeights.tight,
        letterSpacing: baseTheme.letterSpacings.tight,
      },
      subheadSmall: {
        marginBottom: baseTheme.space[3],
        fontSize: baseTheme.fontSizes['2xl'],
        fontWeight: baseTheme.fontWeights.extrabold,
        lineHeight: baseTheme.lineHeights.tight,
        letterSpacing: baseTheme.letterSpacings.tight,
      },
      kicker: {
        marginTop: baseTheme.space[2],
        marginBottom: baseTheme.space[2],
        fontFamily: fonts.mono,
        fontSize: baseTheme.fontSizes.md,
        fontWeight: baseTheme.fontWeights.medium,
        lineHeight: baseTheme.lineHeights.tight,
        letterSpacing: baseTheme.letterSpacings.wide,
        textTransform: 'uppercase',
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
  Text: {
    variants: {
      heading: {
        marginBottom: baseTheme.space[4],
        fontFamily: baseTheme.heading,
        fontSize: {
          base: baseTheme.fontSizes['3xl'],
          md: baseTheme.fontSizes['5xl'],
        },
        fontWeight: baseTheme.fontWeights.bold,
        lineHeight: baseTheme.lineHeights.shorter,
        letterSpacing: baseTheme.letterSpacings.tight,
      },
      superHeading: {
        marginTop: baseTheme.space[8],
        marginBottom: baseTheme.space[32],
        fontSize: baseTheme.fontSizes['6xl'],
        fontFamily: fonts.heading,
        fontWeight: baseTheme.fontWeights.extrabold,
        lineHeight: baseTheme.lineHeights.heading,
        letterSpacing: baseTheme.letterSpacings.tight,
      },
      kicker: {
        marginBottom: baseTheme.space[2],
        marginTop: baseTheme.space[2],
        fontFamily: fonts.mono,
        fontSize: baseTheme.fontSizes.md,
        fontWeight: baseTheme.fontWeights.medium,
        lineHeight: baseTheme.lineHeights.tight,
        letterSpacing: baseTheme.letterSpacings.wide,
        textTransform: 'uppercase',
      },
    },
  },
}

const colors = {
  glassTeal: '#88ccca',
  primary: '#6087cf',
  muted: '#48659c',
  active: '#e6e6e6',
  black: '#000',
  link: 'cadetblue',
  foreground: 'white',
  background: {
    50: '#edf1fc',
    100: '#cfd5e3',
    200: '#b0bacd',
    300: '#919eb9',
    400: '#7282a5',
    500: '#58698b',
    600: '#44526d',
    700: '#303a4e',
    800: '#1c2330',
    900: '#050c15',
  },
  blue: {
    50: '#edf1fc',
    100: '#cfd5e3',
    200: '#b0bacd',
    300: '#919eb9',
    400: '#7282a5',
    500: '#58698b',
    600: '#44526d',
    700: '#303a4e',
    800: '#1c2330',
    900: '#050c15',
  },
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const sizes = {
  icon: {
    sm: '24px',
    md: '32px',
    lg: '64px',
  },
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
  sizes,
})

export default theme
