const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sourceMaps();

mix.sass('resources/sass/app.scss', 'public/css').options({
    processCssUrls: false,
    autoprefixer: {
        remove: false,
    },
    // autoprefixer: {remove: false, browsers: 'last 10 versions'},
    postCss: [
        tailwindcss('./tailwind.config.js'),
    ]
})
    .sass('resources/sass/admin.scss', 'public/css/admin');



mix.browserSync({
    proxy: 'http://127.0.0.1:8000',
    files: [
        './resources/js/*.js',
        './resources/sass/*.scss',
        './resources/sass/*/*.scss',
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ]
});
