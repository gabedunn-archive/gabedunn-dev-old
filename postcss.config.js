module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-import'),
    require('postcss-url'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('cssnano')
  ]
}
