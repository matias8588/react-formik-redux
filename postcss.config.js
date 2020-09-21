module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
