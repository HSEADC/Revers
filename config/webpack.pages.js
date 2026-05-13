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
  createPage("./src/sounds/sound_cd.html", "./sounds/sound_cd.html", ["index"]),

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
  createPage("./src/capsules/1983.html", "./capsules/1983.html", ["index"]),
  createPage("./src/capsules/1985.html", "./capsules/1985.html", ["index"]),
  createPage("./src/capsules/1989.html", "./capsules/1989.html", ["index"]),
  createPage("./src/capsules/1990.html", "./capsules/1990.html", ["index"]),
  createPage("./src/capsules/1994.html", "./capsules/1994.html", ["index"]),
  createPage("./src/capsules/1996.html", "./capsules/1996.html", ["index"]),
  createPage("./src/capsules/1998.html", "./capsules/1998.html", ["index"]),
  createPage("./src/capsules/2001.html", "./capsules/2001.html", ["index"]),
  createPage("./src/capsules/2003.html", "./capsules/2003.html", ["index"]),
  createPage("./src/capsules/2004.html", "./capsules/2004.html", ["index"]),
  createPage("./src/capsules/2006.html", "./capsules/2006.html", ["index"]),

  createPage("./src/tests/test_sound.html", "./tests/test_sound.html", [
    "index",
    "test_sound",
  ]),
  createPage("./src/tests/test_2000.html", "./tests/test_2000.html", [
    "index",
    "test_2000",
  ]),
  createPage("./src/tests/test_era.html", "./tests/test_era.html", [
    "index",
    "test_era",
  ]),
  createPage("./src/tests/test_how.html", "./tests/test_how.html", [
    "index",
    "test_how",
  ]),

  createPage("./src/sounds/sound_atm.html", "./sounds/sound_atm.html", [
    "index",
  ]),
  createPage(
    "./src/sounds/sound_button_phone.html",
    "./sounds/sound_button_phone.html",
    ["index"]
  ),
  createPage(
    "./src/sounds/sound_cash_register.html",
    "./sounds/sound_cash_register.html",
    ["index"]
  ),
  createPage(
    "./src/sounds/sound_cassette.html",
    "./sounds/sound_cassette.html",
    ["index"]
  ),
  createPage("./src/sounds/sound_cinema.html", "./sounds/sound_cinema.html", [
    "index",
  ]),
  createPage(
    "./src/sounds/sound_crosswalk.html",
    "./sounds/sound_crosswalk.html",
    ["index"]
  ),
  createPage("./src/sounds/sound_floppy.html", "./sounds/sound_floppy.html", [
    "index",
  ]),
  createPage(
    "./src/sounds/sound_gastronom.html",
    "./sounds/sound_gastronom.html",
    ["index"]
  ),
  createPage(
    "./src/sounds/sound_landline_phone.html",
    "./sounds/sound_landline_phone.html",
    ["index"]
  ),
  createPage("./src/sounds/sound_library.html", "./sounds/sound_library.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_market.html", "./sounds/sound_market.html", [
    "index",
  ]),
  createPage(
    "./src/sounds/sound_matrix_printer.html",
    "./sounds/sound_matrix_printer.html",
    ["index"]
  ),
  createPage("./src/sounds/sound_metro.html", "./sounds/sound_metro.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_nokia.html", "./sounds/sound_nokia.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_office.html", "./sounds/sound_office.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_park.html", "./sounds/sound_park.html", [
    "index",
  ]),
  createPage(
    "./src/sounds/sound_payphone.html",
    "./sounds/sound_payphone.html",
    ["index"]
  ),
  createPage(
    "./src/sounds/sound_photo_studio.html",
    "./sounds/sound_photo_studio.html",
    ["index"]
  ),
  createPage("./src/sounds/sound_printer.html", "./sounds/sound_printer.html", [
    "index",
  ]),
  createPage(
    "./src/sounds/sound_school_bell_electronic.html",
    "./sounds/sound_school_bell_electronic.html",
    ["index"]
  ),
  createPage(
    "./src/sounds/sound_school_bell_mechanical.html",
    "./sounds/sound_school_bell_mechanical.html",
    ["index"]
  ),
  createPage(
    "./src/sounds/sound_sewing_machine.html",
    "./sounds/sound_sewing_machine.html",
    ["index"]
  ),
  createPage(
    "./src/sounds/sound_supermarket.html",
    "./sounds/sound_supermarket.html",
    ["index"]
  ),
  createPage(
    "./src/sounds/sound_tram_80s.html",
    "./sounds/sound_tram_80s.html",
    ["index"]
  ),
  createPage(
    "./src/sounds/sound_tram_90s.html",
    "./sounds/sound_tram_90s.html",
    ["index"]
  ),
  createPage(
    "./src/sounds/sound_typewriter.html",
    "./sounds/sound_typewriter.html",
    ["index"]
  ),
  createPage(
    "./src/sounds/sound_validator.html",
    "./sounds/sound_validator.html",
    ["index"]
  ),
  createPage(
    "./src/sounds/sound_vending_machine.html",
    "./sounds/sound_vending_machine.html",
    ["index"]
  ),
  createPage("./src/sounds/sound_vhs.html", "./sounds/sound_vhs.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_vinyl.html", "./sounds/sound_vinyl.html", [
    "index",
  ]),
  createPage("./src/sounds/sound_xerox.html", "./sounds/sound_xerox.html", [
    "index",
  ]),

  createPage("./src/pages/418.html", "./pages/418.html", ["index"]),
  createPage("./src/pages/503.html", "./pages/503.html", ["index"]),

  createPage("./src/articles/dophamine.html", "./articles/dophamine.html", [
    "index",
  ]),
];

module.exports = htmlPages;
