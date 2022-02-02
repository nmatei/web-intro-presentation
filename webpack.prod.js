const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// TODO find better solution for `yarn copy-resources`
//   => copy images used in html

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
    optimization: {
      minimize: true,
      minimizer: ["...", new CssMinimizerPlugin()],
      splitChunks: {
        cacheGroups: {
          commons: {
            name: "commons",
            chunks: "initial",
            minChunks: 2
          },
          // Extracting all CSS in a single file
          styles: {
            name: "styles",
            type: "css/mini-extract",
            chunks: "all",
            enforce: true
          }
        }
      }
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
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
        chunkFilename: "css/[id].css"
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader"
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
          generator: {
            outputPath: "css",
            filename: "images/[name][ext][query]"
          }
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
      // filename: "docs/js/[name].js",
      // path: path.resolve(__dirname, ""),
      filename: "js/[name].js",
      path: path.resolve(__dirname, "docs"),
      publicPath: "",
      environment: {
        arrowFunction: false
      }
    },
    target: ["web", "es5"]
  };
};
