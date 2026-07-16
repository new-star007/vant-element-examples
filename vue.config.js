const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: ['vant-element'],
  publicPath: process.env.NODE_ENV === 'production' ? '/vant-element-examples/' : '/'
})
