// #1
// Дан абзац, кнопка и массив с цветами. Пусть нажатие на кнопку красит абзац в следующий цвет из массива и так по кругу.

const taskContainer1 = document.querySelector(".task_6-9-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const result = taskContainer1.querySelector("#result");
const colors = ["red", "blue", "green", "black", "grey"];
let counter = 0;
subBtn.addEventListener("click", () => {
  result.style.color = colors[counter];

  if (colors.length - 1 > counter) {
    counter++;
  } else {
    counter = 0;
  }
});
// #2
// Дан абзац и два инпута. В инпуты вводятся даты. Выведите в абзац, сколько дней между введенными датами.

const taskContainer2 = document.querySelector(".task_6-9-2");

const subBtn1 = taskContainer2.querySelector("#subBtn");
const inputDate1 = taskContainer2.querySelector("#inputDate1");
const inputDate2 = taskContainer2.querySelector("#inputDate2");
const result1 = taskContainer2.querySelector("#result");

subBtn1.addEventListener("click", () => {
  let value;
  const input1 = new Date(inputDate1.value);
  const input2 = new Date(inputDate2.value);
  let dayInSeconds = 60 * 60 * 24 * 1000;
  if (input1 >= input2) {
    value = Math.floor((input1 - input2) / dayInSeconds); // Math.floor?
  } else {
    value = Math.floor((input2 - input1) / dayInSeconds);
  }
  if (isNaN(value)) {
    result1.textContent = "Invalid data";
  } else {
    result1.textContent = value;
  }
});
// #3
// Дан список ul. По клику на любую li записывайте в конец ее текста порядковый номер клика по этой li.

const taskContainer3 = document.querySelector(".task_6-9-3");

const items = taskContainer3.querySelectorAll(".items");
let counter1 = 1;
let obj = {};
items.forEach((item) => {
  item.addEventListener("click", () => {
    item.textContent = item.textContent + " " + counter1;
    counter1++;
  });
});
// #4
// Дана кнопка и список ul, заполненный пунктами с числами. По клику на кнопку добавляйте новую li с числом, на единицу больше числа последей li из списка.

const taskContainer4 = document.querySelector(".task_6-9-4");

const subBtn2 = taskContainer4.querySelector("#subBtn");

const items1 = taskContainer4.querySelectorAll(".items");
const list = taskContainer4.querySelector("#list");

subBtn2.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = +list.lastElementChild.textContent + 1;
  list.appendChild(li);
});
