const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

let CssModules = require('./CssModules');
mix.extend('cssModules', new CssModules);

const antdTheme = require('./theme.js');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public')
    .setResourceRoot('../') // turns assets paths in css relative to css file
    .js([
        'resources/js/frontend/before.js',
        'resources/js/frontend/app.js',
        'resources/js/frontend/after.js',
    ], 'js/frontend.js')
    .js('resources/js/frontend/vue.js', 'js/frontend/vue.js')
    .js([
        'resources/js/backend/before.js',
        'resources/js/backend/app.js',
        'resources/js/backend/after.js',
    ], 'js/backend.js')
    .js('resources/js/backend/vue.js', 'js/vue.js')
    .webpackConfig({
        resolve: {
            extensions: ['.js', '.vue', '.json', '.scss'],
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
                        path.resolve(__dirname, "resources/js/frontend"),
                    ],
                    options: {
                        modifyVars: antdTheme,
                        javascriptEnabled: true
                    }
                },
            ],
        },
        optimization: {
            // minimize: true,
            splitChunks: {
                chunks: 'async',
                minSize: 30000,
                maxSize: 0,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '~',
                automaticNameMaxLength: 30,
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        },
        output: {
            // Chunks in webpack
            chunkFilename: '[name].js',
        },
    })
    .cssModules()
    .extract([
        /* Extract packages from node_modules, only those used by front and
        backend, to vendor.js */
        'jquery',
        // 'bootstrap',
        // 'popper.js',
        'axios',
        // 'sweetalert2',
        // 'lodash',
        'vue'
    ])
    .sourceMaps()
    .version()
    .mergeManifest();

if (mix.inProduction()) {
    mix.version()
        .options({
            // optimize js minification process
            terser: {
                cache: true,
                parallel: true,
                sourceMap: true
            }
        });
} else {
    // Uses inline source-maps on development
    mix.webpackConfig({ devtool: 'inline-source-map' });
}

mix.babelConfig({
    presets: ['@vue/app'],
    plugins: [
        [
            'import',
            { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true },
        ],
    ],
});
