var path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
    //assetModuleFilename: 'assets/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }, {
        test: /.js$/,
        use: 'babel-loader'
      },{
        test: /\.(jpg|png|gif)$/,

        use: [
          {
            loader: "file-loader", 
            options: {
              name: "[name].[ext]",
              outputPath: "assets",
              // publicPath: "dist",
              esModule: false,
              emitFile: true
            }
          }]
			}
      
      //  ,
      //  {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: 'asset/resource',
      // }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new VueLoaderPlugin()
  ]
}