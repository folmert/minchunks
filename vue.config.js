const path = require('path')

module.exports = {
    lintOnSave: false,

    configureWebpack: (config) => {
        const outputConfig = {
            optimization: {
                splitChunks: {
                    chunks:             'all',
                    minSize:            1,
                    minChunks:          1,
                    maxAsyncRequests:   50,
                    maxInitialRequests: 30,
                    name (module) {
                        return (typeof module.resource === 'string') ? 'common-chunk.' + path.basename(module.resource.split('?')[0], path.extname(module.resource.split('?')[0])) : 'common-chunk';
                    },
                },
            },
        };

        config.output.chunkFilename = 'js/dynamic.[name].[chunkhash:8].bundle.js';
        delete config.optimization.splitChunks.cacheGroups.common;

        return outputConfig;
    }
};
