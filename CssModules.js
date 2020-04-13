module.exports = class CssModules {
    /**
     * The optional name to be used when called by Mix.
     * Defaults to the class name, lowercased.
     *
     * Ex: mix.example();
     *
     * @return {String|Array}
     */
    name() {
        // Example:
        // return 'example';
        return ['cssModules']
    }

    /**
     * Override the generated webpack configuration.
     *
     * @param  {Object} webpackConfig
     * @return {void}
     */
    webpackConfig(config) {

        this.addCssRule(config)
        this.addScssRule(config)
    }

    addCssRule(config) {
        let cssRule = config.module.rules.find(
            rule => rule.test.toString() === '/\\.css$/'
        )

        let loaders = cssRule.loaders

        delete cssRule.loaders

        cssRule.oneOf = [
            {
                resourceQuery: /module/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]_[hash:base64:5]',
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                use: loaders,
            },
        ]
    }

    addScssRule(config) {
        let cssRule = config.module.rules.find(
            rule => {
                return rule.test.toString() === '/\\.scss$/' }
        )

        let loaders = cssRule.loaders
        delete cssRule.loaders

        cssRule.oneOf = [
            {
                resourceQuery: /module/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]_[hash:base64:5]',
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                use: loaders,
            },
        ]
    }
}
