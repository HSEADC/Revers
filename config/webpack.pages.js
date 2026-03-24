const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPage(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
  });
}

const htmlPages = [createPage("./src/index.html", "./index.html")];

module.exports = htmlPages;
