import { initTest, chooseAnswer } from "../javascripts/test.js";

import imgGood from "../images/articles/nostalgia1.png";
import imgOk from "../images/articles/nostalgia2.png";
import imgBad from "../images/articles/nostalgia3.png";

const stages = [
  {
    question: "Что ты чувствуешь, когда слышишь старый звук?",
    answers: [
      { text: "вспоминаю прошлое", count: 1 },
      { text: "ничего особенного", count: 0 },
      { text: "раздражение", count: 0 },
      { text: "интерес", count: 0 },
    ],
  },
  {
    question: "Тебе нравится шум старых устройств?",
    answers: [
      { text: "да, он живой", count: 1 },
      { text: "лучше без него", count: 0 },
      { text: "иногда", count: 0 },
      { text: "не замечаю", count: 0 },
    ],
  },
  {
    question: "Ты узнаешь звук без картинки?",
    answers: [
      { text: "да", count: 1 },
      { text: "иногда", count: 0 },
      { text: "редко", count: 0 },
      { text: "нет", count: 0 },
    ],
  },
  {
    question: "Для тебя звук — это?",
    answers: [
      { text: "часть памяти", count: 1 },
      { text: "фон", count: 0 },
      { text: "шум", count: 0 },
      { text: "не важно", count: 0 },
    ],
  },
];

const resultTable = [
  {
    header: "Ты слышишь эпоху",
    paragraph: "Звук для тебя связан с памятью и опытом.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgGood,
  },
  {
    header: "Ты воспринимаешь звук нейтрально",
    paragraph: "Ты замечаешь звук, но не связываешь его с прошлым.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgOk,
  },
  {
    header: "Ты больше визуал",
    paragraph: "Звук для тебя не играет большой роли.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgBad,
  },
];

initTest(stages);
chooseAnswer(stages, resultTable);
