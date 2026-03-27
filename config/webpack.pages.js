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

  createPage("./src/sounds/sound_windows.html", "./sounds/sound_windows.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_ps2.html", "./sounds/sound_ps2.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_dendy.html", "./sounds/sound_dendy.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_sega.html", "./sounds/sound_sega.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_tv.html", "./sounds/sound_tv.html", ["index"]),
  createPage("./src/sounds/sound_snow.html", "./sounds/sound_snow.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_arcade.html", "./sounds/sound_arcade.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_radio.html", "./sounds/sound_radio.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_radioEf.html", "./sounds/sound_radioEf.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_pager.html", "./sounds/sound_pager.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_adsl.html", "./sounds/sound_adsl.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_mp3.html", "./sounds/sound_mp3.html", [
    "index",
  ]),
  createPage(
    "./src/sounds/sound_cassete_player.html",
    "./sounds/sound_cassete_player.html",
    ["index"]
  ),
  createPage(
    "./src/sounds/sound_cd.html",
    "./sounds/sound_cd.html",
    ["index"]
  ),

  createPage("./src/articles/icq.html", "./articles/icq.html", ["index"]),
  createPage("./src/articles/sound_power.html", "./articles/sound_power.html", [
    "index",
  ]),
  createPage("./src/articles/nostalgia.html", "./articles/nostalgia.html", [
    "index",
  ]),
  createPage("./src/articles/brain.html", "./articles/brain.html", ["index"]),
  createPage("./src/articles/relation.html", "./articles/relation.html", [
    "index",
  ]),
  createPage("./src/articles/windows_xp.html", "./articles/windows_xp.html", [
    "index",
  ]),
  createPage("./src/articles/modem_56k.html", "./articles/modem_56k.html", [
    "index",
  ]),
  createPage("./src/articles/evolution.html", "./articles/evolution.html", [
    "index",
  ]),
  createPage(
    "./src/articles/test_signals.html",
    "./articles/test_signals.html",
    ["index"]
  ),
  createPage(
    "./src/articles/millenial_zoomer.html",
    "./articles/millenial_zoomer.html",
    ["index"]
  ),
  createPage("./src/articles/home_tech.html", "./articles/home_tech.html", [
    "index",
  ]),
  createPage("./src/articles/sound_city.html", "./articles/sound_city.html", [
    "index",
  ]),
  createPage(
    "./src/articles/notification.html",
    "./articles/notification.html",
    ["index"]
  ),

  createPage("./src/capsules/1981.html", "./capsules/1981.html", ["index"]),

  createPage("./src/tests/test_sound.html", "./tests/test_sound.html", [
    "index",
    "test_sound",
  ]),
];

module.exports = htmlPages;
