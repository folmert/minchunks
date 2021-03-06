# minchunks
Generated with https://cli.vuejs.org/guide/

Config:
```
const path = require('path')

module.exports = {
    lintOnSave: false,

    configureWebpack: (config) => {
        const outputConfig = {
            optimization: {
                splitChunks: {
                    chunks:             'all',
                    minSize:            1,
                    minChunks:          1, // DOES NOT WORK AS EXPECTED
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
```

Output from vue inspect:

```
splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        }
      },
      chunks: 'all',
      minSize: 1,
      minChunks: 1,
      maxAsyncRequests: 50,
      maxInitialRequests: 30,
      name: function () { /* omitted long function */ }
    }
  },
```
