const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPage(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks,
  });
}

const htmlPages = [
  createPage("./src/index.html", "./index.html", ["index"]),
  createPage("./src/pages/about.html", "./pages/about.html", ["index"]),
  createPage("./src/pages/sounds.html", "./pages/sounds.html", [
    "index",
    "filter_tags_sound",
  ]),
  createPage("./src/pages/articles.html", "./pages/articles.html", [
    "index",
    "filter_tags_article",
  ]),
  createPage("./src/pages/tests.html", "./pages/tests.html", ["index"]),
  createPage("./src/pages/404.html", "./pages/404.html", ["index"]),
  createPage("./src/pages/capsules.html", "./pages/capsules.html", ["index"]),

  createPage("./src/sounds/sound.html", "./sounds/sound.html", ["index"]),

  createPage("./src/articles/icq.html", "./articles/icq.html", ["index"]),

  createPage("./src/capsules/1981.html", "./capsules/1981.html", ["index"]),

  createPage("./src/tests/test_sound.html", "./tests/test_sound.html", [
    "index",
    "test_sound",
  ]),
];

module.exports = htmlPages;
