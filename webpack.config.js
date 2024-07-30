// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5')
const threadLoader = require('thread-loader')
const Webpackbar = require('webpackbar')
const cpu = require('./cpu.config.js')

const isProduction = process.env.NODE_ENV === 'production'

threadLoader.warmup(cpu.jsWorkerPool, ['vue-loader', 'babel-loader'])
threadLoader.warmup(cpu.cssWorkerPool, ['css-loader', 'postcss-loader'])

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    open: true,
    host: '127.0.0.1',
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new VueLoaderPlugin(),
    new Webpackbar()

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.vue$/i,
        use: ['thread-loader', 'vue-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset'
      }
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  }
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'
    config.plugins.push(new MiniCssExtractPlugin())
  } else {
    config.mode = 'development'
    config.devtool = 'source-map'
  }
  return config
}

/*
cpu.config.js:

exports.jsWorkerPool={
  workers:4,
  poolTimeout:2000
}
exports.cssWorkerPool={
  workerParallelJobs:2,
  poolTimeout:2000
} */
