const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
   entry: {
      home: path.resolve(__dirname, 'src/js/index.js')               
//         otro: path.resolve(__dirname, './app/src/js/otro.js')               
   },
   output: {
      path: path.resolve(__dirname, 'dist' ),
      filename: 'js/[name].js'               
   },

   devServer:{
      hot: true,
      open: true,
      port: 5000,
      
   },

   module: {
      rules: [
         {
            test:/\.css$/,
            use: ['style-loader', 'css-loader']           
         }
   ]                
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Mi App'
      }),
      new webpack.HotModuleReplacementPlugin()
   ]
}