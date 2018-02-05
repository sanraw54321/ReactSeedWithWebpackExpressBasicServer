const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "static/js/index.bundle.js"
    },
    // tell Webpack to load TypeScript files
    resolve: {
        // Look for modules in .ts(x) files first, then .js
        extensions: [".jsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["es2015" , "react"]
                  }
                }
              },
            {
                test: /\.css$/,
                // use: ["style-loader","css-loader"] -- this for dev.
                // The below is for prod.
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                  })
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name][hash].[ext]',
                        outputPath: 'static/media/'
                      }   
                  }
                ]
              }
        ]
    },
     
    plugins: [
        new htmlwebpackplugin({
            template: "src/index.html",
            hash: true
        }) , new ExtractTextPlugin("static/css/index.css")
    ]


}