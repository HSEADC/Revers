import { initTest, chooseAnswer } from "../javascripts/test.js";

import imgGood from "../images/articles/dophamine1.png";
import imgOk from "../images/articles/dophamine2.png";
import imgBad from "../images/articles/dophamine3.png";

const stages = [
  {
    question: "Это устройство часто приходилось перематывать карандашом.",
    answers: [
      { text: "VHS", count: 0 },
      { text: "дискета", count: 0 },
      { text: "кассета", count: 1 },
      { text: "CD", count: 0 },
    ],
  },
  {
    question: "Что использовали для общения до современных мессенджеров?",
    answers: [
      { text: "ICQ", count: 1 },
      { text: "TikTok", count: 0 },
      { text: "Discord", count: 0 },
      { text: "Telegram", count: 0 },
    ],
  },
  {
    question:
      "Как назывался экранный эффект старых телевизоров при отсутствии сигнала?",
    answers: [
      { text: "цифровой шум", count: 0 },
      { text: "телевизионный шум", count: 1 },
      { text: "VHS-глитч", count: 0 },
      { text: "системный сбой", count: 0 },
    ],
  },
  {
    question:
      "Что чаще всего вставляли в компьютер для установки игр в 1990-х?",
    answers: [
      { text: "USB-флешку", count: 0 },
      { text: "SSD", count: 0 },
      { text: "CD-ROM", count: 1 },
      { text: "карту памяти", count: 0 },
    ],
  },
  {
    question: "Какой телефон считался одним из символов начала 2000-х?",
    answers: [
      { text: "iPhone 15", count: 0 },
      { text: "Nokia 3310", count: 1 },
      { text: "Samsung Galaxy", count: 0 },
      { text: "BlackBerry Passport", count: 0 },
    ],
  },
];

const resultTable = [
  {
    header: "Ты будто вырос внутри цифровой эпохи 1990–2000-х",
    paragraph:
      "Ты хорошо помнишь звуки эпохи. Для тебя они не просто шум, а часть опыта.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgGood,
  },
  {
    header: "Ты хорошо ориентируешься в технологиях прошлого",
    paragraph:
      "Некоторые звуки тебе знакомы, но не все. Ты застал переход эпох.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgOk,
  },
  {
    header: "Ты больше знаком с современной цифровой средой",
    paragraph:
      "Тебе ближе современные звуки. Старые устройства почти не знакомы.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgBad,
  },
];

initTest(stages);
chooseAnswer(stages, resultTable);
