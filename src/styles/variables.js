const colors = {
  white: '#fff',
  black: '#000',
  grey: '#333',
  red: '#FF3300',
  green: '#C3FF68',
  blue: '#02779E',
  lightGrey: '#999',
  blueMint: '#D4F3E9',
  transparentGrey: 'rgba(0,0,0,.6)',
  transparentDarkGrey: 'rgba(0,0,0,.8)'
}

const backgrounds = {
  header: `background-color: ${colors.transparentGrey}; color: ${colors.white};`,
  navigation: {
    items: `background-color: ${colors.transparentDarkGrey}; color: ${colors.white};`
  },
  blackOpacity: `background-color: ${colors.transparentDarkGrey};`
}

const typography = {
  muli: `font-family: 'Muli',  sans-serif;`,
  alegreya: `font-family: 'Alegreya Sans', sans-serif;font-weight: 100;`,
  comfortaa: `font-family: 'Comfortaa', sans-serif;`
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}
export { colors, backgrounds, typography, size, device }
