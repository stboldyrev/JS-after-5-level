// #1
// Дана таблица. Сделайте так, чтобы по клику на любую ячейку в этой ячейке появлялся порядковый номер клика.

const taskContainer1 = document.querySelector(".task_9-9-1");

const table = taskContainer1.querySelector("#myTable");
const trs = table.querySelectorAll("tr");

let counter = 1;

trs.forEach((tr) => {
  const tds = tr.querySelectorAll("td");

  tds.forEach((td) => {
    td.addEventListener("click", () => {
      td.textContent = counter;
      counter++;
    });
  });
});
// #2
// Дана таблица, заполненная числами по порядку и кнопка. По нажатию на кнопку перемешайте числа в таблице.

const taskContainer2 = document.querySelector(".task_9-9-2");

const table1 = taskContainer2.querySelector("#myTable");
const trs1 = table1.querySelectorAll("tr");
const subBtn = taskContainer2.querySelector("#subBtn");
let arr = [];
subBtn.addEventListener("click", () => {
  trs1.forEach((tr) => {
    const tds = tr.querySelectorAll("td");
    tds.forEach((el) => {
      arr.push(el);
    });
  });
  const shuffled = arr.sort(() => Math.random() - 0.5);
  table1.innerHTML = "";
  const numCols = trs1[0].children.length;
  for (let i = 0; i < shuffled.length; i += numCols) {
    const newRow = document.createElement("tr");
    const line = shuffled.slice(i, i + numCols);
    line.forEach((el) => {
      const newCell = document.createElement("td");
      newCell.textContent = el.textContent;
      newRow.appendChild(newCell);
    });
    table1.appendChild(newRow);
    arr = [];
  }
});
// #3
// Дан текстареа. В него вводится текст. По потери фокуса найдите самый часто используемый символ этого текста и выведите его в абзац.

const taskContainer3 = document.querySelector(".task_9-9-3");

const textarea = taskContainer3.querySelector("textarea");
const result = taskContainer3.querySelector("#result");

textarea.addEventListener("blur", () => {
  if (textarea.value === "") {
    console.log("Please provide some text");
    return;
  }

  const value = textarea.value
    .trim()
    .split("")
    .filter((el) => el !== " ");

  let obj = {};

  value.forEach((symbol) => {
    const lowerCaseSymbol = symbol.toLowerCase();
    if (obj[lowerCaseSymbol]) {
      obj[lowerCaseSymbol]++;
    } else {
      obj[lowerCaseSymbol] = 1;
    }
  });

  console.log(obj);

  const sorted = Object.entries(obj).sort(([, a], [, b]) => b - a);

  let newArr = [];
  if (sorted[0][1] > sorted[1][1]) {
    result.textContent = sorted[0][0];
  } else {
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[0][1] === sorted[i][1]) {
        newArr.push(sorted[i][0]);
      }
    }
    console.log(newArr);

    result.textContent = newArr.join(", ");
  }
  textarea.value = "";

  // const sorted = Object.entries(obj)
  //   .sort(([, a], [, b]) => b - a)
  //   .reduce((acc, [key, value]) => {
  //     acc[key] = value;
  //     return acc;
  //   }, {});
  // console.log(sorted);

  // result.textContent = sorted;

  // let maxNum = 0;
  // let finalValue;
  // for (let key in obj) {
  //   if (maxNum < obj[key]) {
  //     maxNum = obj[key];
  //     finalValue = key;
  //   }
  // }
  // result.textContent = finalValue;
});
// #4
// Даны инпуты. Поставьте первому инпуту в value число 1, через секунду второму число 2, еще через секунду третьему число 3 и так далее пока инпуты не закончатся. Когда инпуты закончатся продолжите нумерацию с первого инпута.

const taskContainer4 = document.querySelector(".task_9-9-4");
const inputs = taskContainer4.querySelectorAll(".myInput");

let currentIndex = 0;
let value = 1;

setInterval(() => {
  inputs[currentIndex].value = value;
  currentIndex = (currentIndex + 1) % inputs.length;
  value++;
}, 1000);

// #5
// Сделайте функцию, которая будет принимать число, а возвращать это число прописью. Пусть функция работает с числами до 999. Смотрите пример:
// func(123); // выведет 'сто двадцать три'

const taskContainer5 = document.querySelector(".task_9-9-5");

const inputNum = taskContainer5.querySelector("#inputNum");

const subBtn1 = taskContainer5.querySelector("#subBtn");
const result1 = taskContainer5.querySelector("#result");

subBtn1.addEventListener("click", () => {
  if (inputNum.value === "" || inputNum.value > 999 || inputNum.value < 0) {
    console.log("Provide correct num");
    return;
  }

  const value = +inputNum.value;

  const func = (number) => {
    const ones = [
      "",
      "один",
      "два",
      "три",
      "четыре",
      "пять",
      "шесть",
      "семь",
      "восемь",
      "девять",
    ];
    const teens = [
      "десять",
      "одиннадцать",
      "двенадцать",
      "тринадцать",
      "четырнадцать",
      "пятнадцать",
      "шестнадцать",
      "семнадцать",
      "восемнадцать",
      "девятнадцать",
    ];
    const tens = [
      "",
      "десять",
      "двадцать",
      "тридцать",
      "сорок",
      "пятьдесят",
      "шестьдесят",
      "семьдесят",
      "восемьдесят",
      "девяносто",
    ];
    const hundreds = [
      "",
      "сто",
      "двести",
      "триста",
      "четыреста",
      "пятьсот",
      "шестьсот",
      "семьсот",
      "восемьсот",
      "девятьсот",
    ];

    let result = "";

    let h = Math.floor(number / 100);
    let t = Math.floor((number % 100) / 10);
    let o = number % 10;

    if (h > 0) {
      result += hundreds[h] + " ";
    }
    if (t === 1) {
      result += teens[o];
    } else {
      if (t > 0) {
        result += tens[t] + " ";
      }
      if (o > 0) {
        result += ones[o] + " ";
      }
    }
    return result.trim();
  };

  result1.textContent = func(value);
});
