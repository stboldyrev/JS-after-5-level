// #1
// Дан текст со знаками препинаний. Получите массив предложений этого текста.

const taskContainer1 = document.querySelector(".task_9-1-1");

const paragraph = taskContainer1.querySelector("#paragraph");

const text = paragraph.textContent
  .trim()
  .split(/(?<=[.,!?])\s+/)
  .map((el) => el.trim().replace(/\s*\n\s*/g, " "))
  .filter((el) => el.length > 0);

console.log(text);

// #2
// Всем ссылкам, ведующим на чужой сайт, добавьте target="_blank".

const taskContainer2 = document.querySelector(".task_9-1-2");

const a = taskContainer2.getElementsByTagName("a");

[...a].forEach((link) => {
  const href = link.href;
  if (!href.includes(window.location.hostname)) {
    link.target = "_blank";
  }
});

// const taskContainer2 = document.querySelector(".task_9-1-2");

// const a = taskContainer2.getElementsByTagName("a");
// const currentHostname = window.location.hostname;
// [...a].forEach((link) => {
//   const href = link.href;
//   const linkHostname = new URL(href).hostname;

//   if (currentHostname !== linkHostname) {
//     link.target = "_blank";
//   }
// });

// #3
// Дана некоторая строка:
// let str = 'abcde abcde'
// В переменной хранятся символы:
// let del = 'abe';
// Удалите из строки все указанные в переменной символы. В нашем случае должно получится следующее:
// 'cd cd'

const taskContainer3 = document.querySelector(".task_9-1-3");
const subBtn = taskContainer3.querySelector("#subBtn");
let str = "abcde abcde";
let del = "abe";

subBtn.addEventListener("click", () => {
  const delArr = del.split("");
  let strArr = str.split("");

  delArr.forEach((symbol) => {
    strArr = strArr.filter((el) => el !== symbol);
  });

  const resultStr = strArr.join("");
  console.log(resultStr);

  //   const delArr = new Set(del.split(""));
  //   let strArr = str
  //     .split("")
  //     .filter((el) => !delArr.has(el))
  //     .join("");
  //   console.log(strArr);
});
