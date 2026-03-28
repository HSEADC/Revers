import { initTest, chooseAnswer } from "../javascripts/test.js";

import imgGood from "../images/articles/brain1.png";
import imgOk from "../images/articles/brain2.png";
import imgBad from "../images/articles/brain3.png";

const stages = [
  {
    question: "Какой звук тебе наиболее знаком?",
    answers: [
      { text: "модем 56k", count: 1 },
      { text: "уведа Telegram", count: 0 },
      { text: "звук iPhone", count: 0 },
      { text: "тишина", count: 0 },
    ],
  },
  {
    question: "Что ты включал после школы?",
    answers: [
      { text: "телевизор", count: 1 },
      { text: "YouTube", count: 0 },
      { text: "Spotify", count: 0 },
      { text: "ничего", count: 0 },
    ],
  },
  {
    question: "Как ты слушал музыку?",
    answers: [
      { text: "кассеты", count: 1 },
      { text: "стриминг", count: 0 },
      { text: "радио иногда", count: 0 },
      { text: "не слушал", count: 0 },
    ],
  },
  {
    question: "Как звучал интернет?",
    answers: [
      { text: "громко и странно", count: 1 },
      { text: "без звука", count: 0 },
      { text: "тихо", count: 0 },
      { text: "не знаю", count: 0 },
    ],
  },
];

const resultTable = [
  {
    header: "Ты из цифрового прошлого",
    paragraph:
      "Ты хорошо помнишь звуки эпохи. Для тебя они не просто шум, а часть опыта.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgGood,
  },
  {
    header: "Ты где-то между",
    paragraph:
      "Некоторые звуки тебе знакомы, но не все. Ты застал переход эпох.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgOk,
  },
  {
    header: "Ты уже из новой среды",
    paragraph:
      "Тебе ближе современные звуки. Старые устройства почти не знакомы.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgBad,
  },
];

initTest(stages);
chooseAnswer(stages, resultTable);
