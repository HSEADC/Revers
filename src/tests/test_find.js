import { initTest, chooseAnswer } from "../javascripts/test.js";

import imgGood from "../images/articles/dophamine1.png";
import imgOk from "../images/articles/dophamine2.png";
import imgBad from "../images/articles/dophamine3.png";

const stages = [
  {
    question:
      "В карточке экспоната осталась подпись: «звук появлялся перед выходом в интернет»",
    answers: [
      { text: "запуск Windows XP", count: 0 },
      { text: "подключение модема", count: 1 },
      { text: "перемотка кассеты", count: 0 },
      { text: "щелчок фотоаппарата", count: 0 },
    ],
  },
  {
    question:
      "В какой период этот звук был особенно узнаваем для домашних пользователей?",
    answers: [
      { text: "конец 1980-х", count: 0 },
      { text: "конец 1990-х и начало 2000-х", count: 1 },
      { text: "конец 2010-х", count: 0 },
      { text: "начало 2020-х", count: 0 },
    ],
  },
  {
    question:
      "В архиве найден фрагмент описания: «пищание, треск и резкие сигналы перед соединением»",
    answers: [
      { text: "CD-ROM", count: 0 },
      { text: "ICQ", count: 0 },
      { text: "dial-up модем", count: 1 },
      { text: "Nokia 3310", count: 0 },
    ],
  },
  {
    question: "Почему этот звук почти исчез из повседневности?",
    answers: [
      { text: "люди перестали пользоваться клавиатурами", count: 0 },
      { text: "интернет стал подключаться быстрее и тише", count: 1 },
      { text: "телевизоры стали цветными", count: 0 },
      { text: "CD-диски заменили кассеты", count: 0 },
    ],
  },
  {
    question: "Какой экспонат нужно вернуть в архив?",
    answers: [
      { text: "звук запуска Windows XP", count: 0 },
      { text: "звук dial-up модема", count: 1 },
      { text: "звук кнопок Nokia", count: 0 },
      { text: "звук телевизионного шума", count: 0 },
    ],
  },
];

const resultTable = [
  {
    header: "Ты главный хранитель ReVers",
    paragraph: "Пропавший звук найден и возвращён в капсулу времени",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgGood,
  },
  {
    header: "Ты почти раскрыл дело",
    paragraph: "Архив доверил бы тебе отдельную полку",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgOk,
  },
  {
    header: "Ты стажёр архива ReVers",
    paragraph: "Звук пока прячется от тебя",
    h5: "Пройти тест еще раз",
    href: "../pages/tests.html",
    image: imgBad,
  },
];

initTest(stages);
chooseAnswer(stages, resultTable);
