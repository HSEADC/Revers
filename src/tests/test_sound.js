import { initTest, chooseAnswer } from "../javascripts/test.js";

import imgGood from "../images/articles/home_tech1.png";
import imgOk from "../images/articles/home_tech2.png";
import imgBad from "../images/articles/home_tech3.png";

const stages = [
  {
    question: "Этот звук подключал к интернету",
    answers: [
      { text: "модем", count: 1 },
      { text: "wifi", count: 0 },
      { text: "телефон", count: 0 },
      { text: "пк", count: 0 },
    ],
  },
  {
    question: "Щелчки и перемотка",
    answers: [
      { text: "кассета", count: 1 },
      { text: "mp3", count: 0 },
      { text: "радио", count: 0 },
      { text: "тв", count: 0 },
    ],
  },
  {
    question: "Белый шум",
    answers: [
      { text: "тв", count: 1 },
      { text: "плеер", count: 0 },
      { text: "телефон", count: 0 },
      { text: "игра", count: 0 },
    ],
  },
  {
    question: "Короткая мелодия при запуске",
    answers: [
      { text: "windows xp", count: 1 },
      { text: "iphone", count: 0 },
      { text: "android", count: 0 },
      { text: "mac", count: 0 },
    ],
  },
  {
    question: "Знаменитый рингтон",
    answers: [
      { text: "nokia", count: 1 },
      { text: "telegram", count: 0 },
      { text: "instagram", count: 0 },
      { text: "discord", count: 0 },
    ],
  },
  {
    question: "Громкая печать",
    answers: [
      { text: "принтер", count: 1 },
      { text: "пк", count: 0 },
      { text: "телефон", count: 0 },
      { text: "тв", count: 0 },
    ],
  },
  {
    question: "Чтение диска",
    answers: [
      { text: "дисковод", count: 1 },
      { text: "ноутбук", count: 0 },
      { text: "планшет", count: 0 },
      { text: "колонка", count: 0 },
    ],
  },
  {
    question: "Шум ленты",
    answers: [
      { text: "vhs", count: 1 },
      { text: "mp3", count: 0 },
      { text: "стриминг", count: 0 },
      { text: "радио", count: 0 },
    ],
  },
  {
    question: "Звук улицы 90-х",
    answers: [
      { text: "радио", count: 1 },
      { text: "подкаст", count: 0 },
      { text: "тикток", count: 0 },
      { text: "spotify", count: 0 },
    ],
  },
  {
    question: "Короткий сигнал",
    answers: [
      { text: "пейджер", count: 1 },
      { text: "часы", count: 0 },
      { text: "смартфон", count: 0 },
      { text: "пк", count: 0 },
    ],
  },
  {
    question: "Загрузка кассеты",
    answers: [
      { text: "видеоплеер", count: 1 },
      { text: "телефон", count: 0 },
      { text: "ноутбук", count: 0 },
      { text: "планшет", count: 0 },
    ],
  },
  {
    question: "Домашний звук эпохи",
    answers: [
      { text: "техника", count: 1 },
      { text: "приложения", count: 0 },
      { text: "уведомления", count: 0 },
      { text: "тишина", count: 0 },
    ],
  },
];

const resultTable = [
  {
    header: "Ты помнишь эту эпоху",
    paragraph:
      "Ты узнаёшь звуки почти без подсказок. Они для тебя связаны с конкретными моментами.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgGood,
  },
  {
    header: "Ты где-то между",
    paragraph:
      "Часть звуков тебе знакома, но не все. Ты застал переход к новой среде.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgOk,
  },
  {
    header: "Ты из другой среды",
    paragraph:
      "Эти звуки для тебя почти незнакомы. Твоя цифровая среда уже другая.",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgBad,
  },
];

initTest(stages);
chooseAnswer(stages, resultTable);
