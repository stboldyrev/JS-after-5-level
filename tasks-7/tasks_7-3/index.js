// #1
// Дан абзац, содержащий текст со словами. Некоторые слова повторяются два раза. По клику на кнопку удалите лишние одинаковые рядом стоящие слова.
const taskContainer1 = document.querySelector(".task_7-3-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const paragraph = taskContainer1.querySelector("#paragraph");

subBtn.addEventListener("click", () => {
  const arr = paragraph.textContent.trim().split(" ");
  const finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentWord = arr[i].replace(/[.,!?]/g, "");
    const nextWord = arr[i + 1] ? arr[i + 1].replace(/[.,!?]/g, "") : "";

    if (currentWord !== nextWord) {
      finalArr.push(arr[i]);
    }
  }

  paragraph.textContent = finalArr.join(" ");
});

// const arr = paragraph.textContent
//     .trim()
//     .split(" ")
//     .map((el) => el.replace(/[.,!?]/g, ""));
//   console.log(arr);
//   const finalArr = arr.filter((el, i) => el !== arr[i + 1]);
//   console.log(finalArr);
//   paragraph.textContent = finalArr.join(" ");
// #2
// Сделайте функцию, которая будет возвращать массив, заполненный N случайными числами из заданного диапазона так, чтобы числа не повторялись.

const taskContainer2 = document.querySelector(".task_7-3-2");

const subBtn1 = taskContainer2.querySelector("#subBtn");

subBtn1.addEventListener("click", () => {
  const arr = [];
  const fn = (min, max, n) => {
    if (max - min + 1 < n) {
      console.log(
        "Диапазон слишком мал для генерации необходимого количества уникальных чисел."
      );
      return;
    }
    while (arr.length !== n) {
      const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
      if (!arr.includes(randomNum)) {
        arr.push(randomNum);
      }
    }
    console.log(arr);
  };
  fn(2, 11, 10);
});
// #3
// Дан следующая структура данных:
// let data = [
// 	{
// 		text: '111',
// 		href: '1.html',
// 	},
// 	{
// 		text: '222',
// 		href: '2.html',
// 	},
// 	{
// 		text: '333',
// 		href: '3.html',
// 	},
// ]
// Сформируйте с помощью этих данных следующую верстку:
// <a href="1.html">111</a>
// <a href="2.html">222</a>
// <a href="3.html">222</a>

let data = [
  {
    text: "111",
    href: "1.html",
  },
  {
    text: "222",
    href: "2.html",
  },
  {
    text: "333",
    href: "3.html",
  },
];
const taskContainer3 = document.querySelector(".task_7-3-3");

const subBtn2 = taskContainer3.querySelector("#subBtn");

subBtn2.addEventListener("click", () => {
  data.forEach((obj) => {
    const a = document.createElement("a");
    a.textContent = obj.text;
    a.href = obj.href;
    a.style.display = "block";
    taskContainer3.appendChild(a);
  });
});
