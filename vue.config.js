const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views'
      }
    },
    plugins: [
      require('unplugin-vue-components/webpack')({ /* options */
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    ],
    module: {
      rules: [{
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },{
        test: /\.(ts|tsx)?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      }]
    }
  }
}
