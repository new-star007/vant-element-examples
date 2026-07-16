const path = require('path')

module.exports = {
  lintOnSave: false,
  transpileDependencies: ['vant-element'],
  configureWebpack: {
    resolve: {
      alias: {
        'vant-element': path.resolve(__dirname, '../vant-element/packages/vant-element/src')
      }
    }
  }
}
