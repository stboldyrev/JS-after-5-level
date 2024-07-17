// #1
// Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.

const taskContainer1 = document.querySelector(".task_5-2-1");

const result = taskContainer1.querySelector("#result");
const subBtn = taskContainer1.querySelector("#subBtn");

subBtn.addEventListener("click", function () {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }
  result.textContent = arr.reduce((sum, el) => sum + el, 0);
});
// #2
// Дана кнопка и два инпута. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел.

const taskContainer2 = document.querySelector(".task_5-2-2");

const input1 = taskContainer2.querySelector("#input1");
const input2 = taskContainer2.querySelector("#input2");
const result1 = taskContainer2.querySelector("#result");
const subBtn1 = taskContainer2.querySelector("#subBtn");

subBtn1.addEventListener("click", function () {
  const num1 = +input1.value;
  const num2 = +input2.value;
  const sum = num1 + num2;
  result1.textContent = sum;
});
// #3
// Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.

const taskContainer3 = document.querySelector(".task_5-2-3");

const subBtn3 = taskContainer3.querySelector("#subBtn");
const result2 = taskContainer3.querySelector("#result");
const paragraphs = taskContainer3.getElementsByTagName("p");
subBtn3.addEventListener("click", function () {
  result2.textContent = paragraphs.length;
});
// #4
// Дана кнопка и инпут. В инпут вводится строка. По нажатию на кнопку определите, сколько символов в введенной строке.

const taskContainer4 = document.querySelector(".task_5-2-4");

const subBtn4 = taskContainer4.querySelector("#subBtn");
const result3 = taskContainer4.querySelector("#result");
const input = taskContainer4.querySelector("#input");

subBtn4.addEventListener("click", function () {
  result3.textContent = input.value.length;
});
