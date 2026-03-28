import { initTest, chooseAnswer } from "../javascripts/test.js";

import imgGood from "../images/articles/icq1.png";
import imgOk from "../images/articles/modem_56k1.png";
import imgBad from "../images/articles/modem_56k2.png";

const stages = [
  {
    question: "Щелчки и перемотка — что это?",
    answers: [
      { text: "кассета", count: 1 },
      { text: "Spotify", count: 0 },
      { text: "AirPods", count: 0 },
      { text: "Zoom", count: 0 },
    ],
  },
  {
    question: "Короткий сигнал и тишина — что это?",
    answers: [
      { text: "пейджер", count: 1 },
      { text: "WhatsApp", count: 0 },
      { text: "Discord", count: 0 },
      { text: "TikTok", count: 0 },
    ],
  },
  {
    question: "Громкий белый шум — что это?",
    answers: [
      { text: "телевизор без сигнала", count: 1 },
      { text: "шум улицы", count: 0 },
      { text: "музыка", count: 0 },
      { text: "ветер", count: 0 },
    ],
  },
  {
    question: "Короткая мелодия Nokia — это?",
    answers: [
      { text: "рингтон", count: 1 },
      { text: "будильник iPhone", count: 0 },
      { text: "игра", count: 0 },
      { text: "реклама", count: 0 },
    ],
  },
];

const resultTable = [
  {
    header: "Ты знаешь звуки эпохи",
    paragraph: "Ты легко узнаешь старые устройства по звуку.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgGood,
  },
  {
    header: "Ты иногда угадываешь",
    paragraph: "Ты знаком с частью звуков, но не со всеми.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgOk,
  },
  {
    header: "Ты не из этого времени",
    paragraph: "Эти звуки для тебя почти незнакомы.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgBad,
  },
];

initTest(stages);
chooseAnswer(stages, resultTable);
