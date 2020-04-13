const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

let CssModules = require('./CssModules');
mix.extend('cssModules', new CssModules);

const antdTheme = require('./theme.js');

mix.setPublicPath('public')
    .setResourceRoot('../') // turns assets paths in css relative to css file
    .sass('resources/sass/frontend/app.scss', 'css/frontend.css')
    // .sass('resources/sass/backend/app.scss', 'css/backend.css').sourceMaps()
    .sass('resources/js/backend/global.scss', 'css/backend.css')
    // .sourceMaps()
    .webpackConfig({
        resolve: {
            extensions: ['.scss'],
            alias: {
                '@': __dirname + '/resources/js'
            },
        },
        node: { fs: 'empty' },
        module: {
            rules: [
                {
                    test: /\.less$/,
                    loader: "less-loader",
                    exclude: [
                        path.resolve(__dirname, "node-modules"),
                        path.resolve(__dirname, "resources/js/backend"),
                    ],
                    options: {
                        modifyVars: antdTheme,
                        javascriptEnabled: true
                    }
                },
            ]},
        // output: {
        //     // Chunks in webpack
        //     publicPath: '/css',
        // },
    })
    .cssModules()
    .mergeManifest()
;
