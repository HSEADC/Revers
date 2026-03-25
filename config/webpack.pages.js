const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPage(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
  });
}

const htmlPages = [
  createPage("./src/index.html", "./index.html"),
  createPage("./src/pages/about.html", "./pages/about.html"),
  createPage("./src/pages/sounds.html", "./pages/sounds.html"),
  createPage("./src/pages/articles.html", "./pages/articles.html"),
  createPage("./src/pages/tests.html", "./pages/tests.html"),
  createPage("./src/sounds/sound.html", "./sounds/sound.html"),
];

module.exports = htmlPages;
