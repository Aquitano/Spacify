module.exports = {
    plugins: [
        require('cssnano'),
        require('autoprefixer'),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
    ]
}