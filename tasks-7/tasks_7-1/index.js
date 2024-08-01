// #1
// Дана кнопка и список ul, заполненный числами. По клику на кнопку удалите пункт списка, содержащий самое максимальное число.

const taskContainer1 = document.querySelector(".task_7-1-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const list = taskContainer1.querySelector("#list");

subBtn.addEventListener("click", () => {
  const items = Array.from(taskContainer1.querySelectorAll(".items"));

  if (items.length === 0) {
    console.log("Nothing to remove");
    return;
  }
  const arr = items.sort((a, b) => +a.textContent - +b.textContent);
  const value = arr[arr.length - 1];

  items.forEach((el) => {
    if (+el.textContent == +value.textContent) {
      el.remove();
    }
  });
});
// #2
// Дан абзац, содержащий текст со словами. Дана также кнопка. По клику на кнопку возьмите каждое слово в свой тег span.
const taskContainer2 = document.querySelector(".task_7-1-2");

const subBtn1 = taskContainer2.querySelector("#subBtn");
const paragraph = taskContainer2.querySelector("#paragraph");

subBtn1.addEventListener("click", () => {
  const arr = paragraph.textContent;
  paragraph.textContent = "";
  arr
    .trim()
    .split(" ")
    .forEach((el) => {
      const span = document.createElement("span");
      span.textContent = el + " ";
      paragraph.appendChild(span);
    });
});

// #3
// Дан абзац, содержащий текст со словами и с дробями вида 1/2. Дана также кнопка. По клику на кнопку возьмите каждую дробь в свой тег span.

const taskContainer3 = document.querySelector(".task_7-1-3");

const subBtn2 = taskContainer3.querySelector("#subBtn");
const paragraph1 = taskContainer3.querySelector("#paragraph");

subBtn2.addEventListener("click", () => {
  const arr = paragraph1.textContent;
  paragraph1.textContent = "";
  arr
    .trim()
    .split(" ")
    .forEach((el) => {
      if (el.includes("/")) {
        const span = document.createElement("span");
        span.textContent = el;
        const space = document.createTextNode(" ");
        paragraph1.appendChild(space);
        paragraph1.appendChild(span);
      } else {
        const space = document.createTextNode(" ");
        paragraph1.appendChild(space);
        const text = document.createTextNode(el);
        paragraph1.appendChild(text);
        console.log(text);
      }
    });
});
// #4
// Дана таблица и инпут. В инпут вводится дата рождения юзера в формате год-месяц-день. Выведите в первой колонке все даты рождения юзера, а во второй колонке - соответствующие дни недели.

const taskContainer4 = document.querySelector(".task_7-1-4");

const subBtn3 = taskContainer4.querySelector("#subBtn");
const inputDate = taskContainer4.querySelector("#inputDate");
const table = taskContainer4.querySelector("#birthTable tbody");

subBtn3.addEventListener("click", () => {
  table.innerHTML = "";
  const value = new Date(inputDate.value);
  if (!value) {
    alert("Please enter a valid date.");
    return;
  }
  const dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const userYear = value.getFullYear();
  const userMonth = value.getMonth();
  const userDay = value.getDate();

  for (let year = userYear; year <= currentYear; year++) {
    const date = new Date(Date.UTC(year, userMonth, userDay));
    const dateValue = date.toISOString().split("T")[0];
    const newRow = document.createElement("tr");
    const dateCell = document.createElement("td");
    dateCell.textContent = dateValue;
    newRow.appendChild(dateCell);
    const dayOfWeek = dayArr[date.getDay()];
    const dayCell = document.createElement("td");

    console.log(date.getDay());
    dayCell.textContent = dayOfWeek;
    newRow.appendChild(dayCell);

    table.appendChild(newRow);
  }
});
// #5
// Напишите программу, которая сформирует следующий массив:
// [
// 	[
// 		[1, 2, 3],
// 		[1, 2, 3],
// 		[1, 2, 3],
// 	],
// 	[
// 		[1, 2, 3],
// 		[1, 2, 3],
// 		[1, 2, 3],
// 	],
// 	[
// 		[1, 2, 3],
// 		[1, 2, 3],
// 		[1, 2, 3],
// 	],
// ]

const taskContainer5 = document.querySelector(".task_7-1-5");

const subBtn4 = taskContainer5.querySelector("#subBtn");

subBtn4.addEventListener("click", () => {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    let arr2 = [];
    for (let j = 0; j < 3; j++) {
      let arr3 = [];
      for (let c = 1; c < 4; c++) {
        arr3.push(c);
      }
      arr2.push(arr3);
    }
    arr.push(arr2);
  }
  console.log(arr);
});
