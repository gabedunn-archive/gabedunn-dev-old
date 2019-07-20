const production = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-nested'),
    production ? require('@fullhuman/postcss-purgecss') : undefined,
    production ? require('cssnano') : undefined
  ]
}
