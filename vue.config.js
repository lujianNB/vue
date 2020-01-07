const path = require('path');
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.join(__dirname, './src'))
            .set('assets', path.join(__dirname, './src/assets'))
            .set('components', path.join(__dirname, './src/components'))
            .set('utils', path.join(__dirname, './src/utils'))
    },
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        open: true,
        proxy: {
            '/insertUserInfo': {
                target: 'http://121.36.58.166:9091',
                changeOrigin: true
            },
            '/sign/daka': {
                target: 'http://121.36.58.166:9091',
                changeOrigin: true

            }
        },
        overlay: {
            warnings: false,
            errors: false
        }
    }
}