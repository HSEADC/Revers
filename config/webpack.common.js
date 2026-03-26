const htmlPages = require("./webpack.pages.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { type } = require("os");
const path = require("path");
const { plugin } = require("postcss");

module.exports = {
  entry: {
    index: "./src/javascripts/index.js",
    filter_tags_sound: "./src/javascripts/filter_tags_sound.js",
    filter_tags_article: "./src/javascripts/filter_tags_article.js",
    test_sound: "./src/tests/test_sound.js",
  },
  output: {
    path: path.resolve(".", "docs"),
    filename: "[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|svg|webp|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.(mp3)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [...htmlPages, new MiniCssExtractPlugin()],
};
