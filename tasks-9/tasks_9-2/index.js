// #1
// Дан список ul и кнопка. По нажатию на кнопку перемешайте пункты списка в случайном порядке.

const taskContainer1 = document.querySelector(".task_9-2-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const list = taskContainer1.querySelector("#list");
const items = taskContainer1.querySelectorAll(".items");

subBtn.addEventListener("click", () => {
  list.innerHTML = "";
  let arr = [...items].sort(() => Math.random() - 0.5);

  arr.forEach((item) => {
    list.appendChild(item);
  });
});
// #2
// Два числа делятся друг на друга, в результате получается периодическая дробь. Напишите код, который определит период этой дроби.
// ??
// #3
// Дан инпут, абзац и кнопка. В инпут вводится целое число. По нажатию на кнопку выведите в абзац разложение этого числа на простые множители.

const taskContainer3 = document.querySelector(".task_9-2-3");

const inputNumber = taskContainer3.querySelector("#inputNumber");
const subBtn1 = taskContainer3.querySelector("#subBtn");
const result = taskContainer3.querySelector("#result");

subBtn1.addEventListener("click", () => {
  if (inputNumber.value <= 1) {
    console.log("Please provide a valid number greater than 1");
    return;
  }

  let value = inputNumber.value;

  const acc = [];
  while (value % 2 === 0) {
    acc.push(2);
    value /= 2;
  }

  for (let i = 3; i < value; i += 2) {
    while (value % i === 0) {
      acc.push(i);
      value /= i;
    }
  }

  if (value > 2) {
    acc.push(value);
  }

  result.textContent = acc.join(", ");
  inputNumber.value = "";
});
// #4
// Даны два инпута и кнопка. По клику на кнопку выведите список список ul всех простых чисел из промежутка, заданном значениями инпутов.

const taskContainer4 = document.querySelector(".task_9-2-4");

const inputNumber1 = taskContainer4.querySelector("#inputNumber1");
const inputNumber2 = taskContainer4.querySelector("#inputNumber2");

const subBtn2 = taskContainer4.querySelector("#subBtn");
const list1 = taskContainer4.querySelector("#list");

subBtn2.addEventListener("click", () => {
  if (inputNumber1.value <= 0 || inputNumber2.value <= 0) {
    console.log("Please provide a valid number");
    return;
  }

  const num1 = inputNumber1.value;
  const num2 = inputNumber2.value;
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);

  const arr1 = [];
  for (let i = min; i <= max; i++) {
    const arr2 = [];
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) {
        arr2.push(j);
      }
    }
    if (arr2.length === 1) {
      arr1.push(...arr2);
    }
  }

  arr1.forEach((el) => {
    const li = document.createElement("li");
    li.textContent = el;
    list.appendChild(li);
  });
  inputNumber1.value = "";
  inputNumber2.value = "";
});
