// #1
// Сделайте функцию, которая параметром будет принимать английское существительное в единственном числе и возвращать его во множественном числе.

const taskContainer1 = document.querySelector(".task_10-1-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const inputEng = taskContainer1.querySelector("#inputEng");
const result = taskContainer1.querySelector("#result");

subBtn.addEventListener("click", () => {
  if (inputEng.value === "") {
    console.log("Please provide information");
    return;
  }

  let value = inputEng.value;

  if (value.slice(-2) === "fe") {
    value = value.slice(0, -2) + "ves";
    result.textContent = value;
    return;
  }

  if (value.slice(-1) === "y") {
    value = value.slice(0, -1) + "ies";
    result.textContent = value;
    return;
  }

  if (
    value.slice(-1) === "s" ||
    value.slice(-1) === "x" ||
    value.slice(-1) === "z" ||
    value.slice(-2) === "sh" ||
    value.slice(-1) === "ch"
  ) {
    value = value + "es";
    result.textContent = value;
    return;
  }

  value = value + "s";
  result.textContent = value;
});
// #2
// Сделайте так, чтобы при клике на любое место окна браузера в месте клика появлялся порядковый номер этого клика.

let counter = 1;
// document.addEventListener("click", (event) => {
//   const textElement = document.createElement("div");
//   textElement.textContent = counter++;

//   const x = event.clientX;
//   const y = event.clientY;
//   textElement.style.position = "absolute";
//   textElement.style.left = `${x}px`;
//   textElement.style.top = `${y}px`;
//   textElement.style.padding = "5px"; // Отступы внутри блока
//   textElement.style.transform = "translate(-50%, -50%)";

//   document.body.appendChild(textElement);
// });

// #3
// Дан текст со знаками препинаний:
// 'aaa bbb, ccc. Xxx - eee bbb, kkk!'
// Получите массив слов из такого текста.

let text = "aaa bbb, ccc. Xxx - eee bbb, kkk!";
let arr = text
  .split(" ")
  .map((el) => el.replace(/[.,!?-]/g, ""))
  .filter((el) => el !== "");
console.log(arr);

// #4
// Дан инпут. По мере ввода в него числа он должен отделять тройки чисел пробелами.

const taskContainer4 = document.querySelector(".task_10-1-4");

const inputNum = taskContainer4.querySelector("#inputNum");

// inputNum.addEventListener("input", () => {
//   let value = inputNum.value;
//   let formattedValue = "";

//   // Iterate through the digits and add spaces every 3 digits
//   for (let i = value.length - 1; i >= 0; i--) {
//     if ((value.length - i) % 3 === 0 && i !== value.length - 1) {
//       formattedValue = " " + formattedValue;
//     }
//     formattedValue = value[i] + formattedValue;
//   }

//   inputNum.value = formattedValue;
// });

// #5
// Даны два числа. Выведите на экран процесс умножения этих чисел в столбик, как в школе.

// #6
// Сделайте блок, который будет выезжать сверху экрана по нажатию на кнопку.

const taskContainer6 = document.querySelector(".task_10-1-6");

const slideBlock = taskContainer6.querySelector("#slideBlock");
const subBtn1 = taskContainer6.querySelector("#subBtn");
let isClicked = false;
subBtn1.addEventListener("click", () => {
  isClicked = !isClicked;

  if (isClicked) {
    slideBlock.style.left = "0";
    slideBlock.dataset.isClicked = "true";
  } else {
    slideBlock.style.left = "-225px";
    slideBlock.dataset.isClicked = "false";
  }
});
