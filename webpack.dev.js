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
      react: "./src/js/react.js",
      wordpress: "./src/js/react.js"
    },
    devtool: isProduction ? false : "inline-source-map",
    devServer: {
      static: ["src"],
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
      }),
      new HtmlWebpackPlugin({
        template: "./src/wordpress.html",
        inject: true,
        minify: true,
        chunks: ["wordpress"],
        filename: "wordpress.html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|mp3|ogg|mp4)$/i,
          type: "asset/resource"
        }
      ]
    },
    output: {
      filename: "js/[name].js",
      assetModuleFilename: "images/[name].[hash:8][ext][query]",
      path: path.resolve(__dirname, "docs"),
      publicPath: ""
    }
  };
};
