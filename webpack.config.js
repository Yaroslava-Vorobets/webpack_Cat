const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = env => ({
    devtool: "eval-cheap-source-map",
    mode: 'development',
    entry: './src/index.js',   
    output: {       
        filename: 'bundle.js',
            path: path.join(__dirname, 'dist'),
            publicPath: '/dist/'
    },
    stats: {
    children: true,
    },

     module: {
        rules: [
        // {
        //     test: /\.html$/i,
        //     loader: "html-loader",
        // },       
       
        {
            test: /\.scss$/i,
            use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
            ],
             
            },       
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: { loader: 'babel-loader'}
            },
    ],
        
    },
     
    plugins:[new HtmlWebpackPlugin({ template: 'index.html' }),
            new MiniCssExtractPlugin({filename:'styles.css'})],
  
    devServer: {
            static: {
            directory: path.join(__dirname, ''),
              
        },
            open: true,
            hot: true,    
            
    },
   
  
        
})