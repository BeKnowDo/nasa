const colors = {
  resolutionBlue: '#001689',
  primaryVariant600: '#3649aa',
  primaryVariant700: '#12299B',
  primaryMain900: '#001689',
  secondaryVariant800: '#FF9011',
  secondaryMain900: '#FF8800',
  neutralLightVariant200: '#F7F7F7',
  neutralLightMain500: '#F0F0F0',
  white: '#fff',
  black: '#000',
  neutralDarkVariant300: '#8c8c8c',
  neutralDarkVariant400: '#757575',
  neutralDarkVariant500: '#686868',
  neutralDarkVariant600: '#5A5A5A',
  neutralDarkVariant800: '#3F3F3F',
  neutralDarkMain900: '#313131',
  dark600: '#C4C4C4',
  defaultPageBackgroundColor: '#E5E5E5',
}

const fontSizes = {
  xxsmall: '12px',
  xsmall: '14px',
  small: '16px',
  medium: '18px',
  normal: '24px',
  large: '45px',
  xlarge: '70px',
}

const fontWeights = {
  light: 100,
  normal: 400,
  bold: 800,
}

const typography = {
  headings: 'Manrope',
  subHeadings: 'Hind',
  copy: 'Hind',
}

const gap = 32
const tablet = 769
const desktop = 960 + 2 * gap
const widescreen = 1152 + 2 * gap
const fullHd = 1344 + 2 * gap

const sizes = {
  tablet: tablet + 'px',
  desktop: desktop + 'px',
  widescreen: widescreen + 'px',
  fullHd: fullHd + 'px',
}

export { colors, sizes, typography, fontSizes, fontWeights }
