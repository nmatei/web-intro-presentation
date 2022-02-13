const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// https://www.ivarprudnikov.com/static-website-multiple-html-pages-using-webpack-plus-github-example/

module.exports = env => {
  const isProduction = !!env.WEBPACK_BUILD;
  return {
    mode: isProduction ? "production" : "development",
    entry: {
      index: "./src/js/index.js",
      js: "./src/js/js.js",
      react: "./src/js/react.js"
    },
    devtool: isProduction ? false : "inline-source-map",
    devServer: {
      static: ["docs", "src"],
      watchFiles: ["src/**/*.*"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: true,
        minify: true,
        chunks: ["index"],
        filename: "index.html"
      }),
      new HtmlWebpackPlugin({
        template: "./src/js.html",
        inject: true,
        minify: true,
        chunks: ["js"],
        filename: "js.html"
      }),
      new HtmlWebpackPlugin({
        template: "./src/react.html",
        inject: true,
        minify: true,
        chunks: ["react"],
        filename: "react.html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource"
          // use: [
          //   {
          //     loader: "file-loader",
          //     options: {
          //       name: "[name].[ext]",
          //       outputPath: "images/"
          //     }
          //   }
          // ]
        },
        {
          test: /\.(mp3|ogg|mp4)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "resources/"
              }
            }
          ]
        }
      ]
    },
    output: {
      //filename: "[name].[hash:8].js",
      filename: "[name].js",
      path: path.resolve(__dirname, "docs"),
      publicPath: "/"
    }
  };
};
