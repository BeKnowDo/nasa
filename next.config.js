module.exports = {
  reactStrictMode: true,
  webpack5: true,
  eslint: {
    dirs: ['components', 'layouts', 'lib', 'pages', 'redux'],
  },
  env: {
    defaultTheme: 'theme',
  },
  images: {
    domains: ['image.tmdb.org'],
  },
}
