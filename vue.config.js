const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'build',
  publicPath: '',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'SEO & Digital Marketing'
      return args
    })
  }
})
