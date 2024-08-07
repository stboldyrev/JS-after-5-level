// #1
// Дана кнопка и список ul. По клику на кнопку добавьте в конец каждой li ссылку, по нажатию на которую текст li будет перечеркиваться (но не текст ссылки).

const taskContainer1 = document.querySelector(".task_7-8-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const list = taskContainer1.querySelector("#list");
const items = taskContainer1.querySelectorAll(".items");

subBtn.addEventListener("click", () => {
  items.forEach((item) => {
    if (!item.querySelector("a")) {
      const a = document.createElement("a");
      a.textContent = " link";
      a.href = "#";
      const span = document.createElement("span");
      span.textContent = item.textContent;
      item.textContent = "";
      item.appendChild(span);
      item.appendChild(a);
      a.addEventListener("click", (e) => {
        e.preventDefault();
        if (span.style.textDecoration !== "line-through") {
          span.style.textDecoration = "line-through";
        } else {
          span.style.textDecoration = "none";
        }
      });
    }
  });
});

// #2
// Дан абзац, содержащий текст со словами. Сделайте так, чтобы по клику на любое слово из этого абзаца, это слово меняло порядок своих букв на обратный.

const taskContainer2 = document.querySelector(".task_7-8-2");

const paragraph = taskContainer2.querySelector("#paragraph");

const arr = paragraph.textContent.trim().split(" "); // .match(/[\w']+|[.,!?;]/g)

paragraph.textContent = "";
arr.forEach((el, i) => {
  const span = document.createElement("span");
  span.textContent = el;
  span.addEventListener("click", () => {
    span.textContent = span.textContent.split("").reverse().join("");
  });
  paragraph.appendChild(span);
  if (i !== arr.length - 1) {
    paragraph.appendChild(document.createTextNode(" "));
  }
});

// console.log(arr);

// #3
// Дан следующий массив:
// let users = [
// 	{id: 1, name: 'user1', surn: 'surn1', age: 30},
// 	{id: 2, name: 'user2', surn: 'surn2', age: 31},
// 	{id: 3, name: 'user3', surn: 'surn3', age: 32},
// ];
// Выведите элементы этого массива в виде таблицы table так, чтобы каждое поле объекта попало в свой тег td. Сделайте заголовки колонок вашей таблицы.

const taskContainer3 = document.querySelector(".task_7-8-3");

const table = taskContainer3.querySelector("#userTable");
const subBtn1 = taskContainer3.querySelector("#subBtn");

let users = [
  { id: 1, name: "user1", surn: "surn1", age: 30 },
  { id: 2, name: "user2", surn: "surn2", age: 31 },
  { id: 3, name: "user3", surn: "surn3", age: 32 },
];

subBtn1.addEventListener("click", () => {
  table.innerHTML = "";

  const headers = ["ID", "Name", "Surname", "Age"];

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  users.forEach((user) => {
    const tr = document.createElement("tr");
    for (let key in user) {
      const td = document.createElement("td");
      td.textContent = user[key];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
});

// #4
// Напишите программу, которая сформирует следующий массив:
// [
// 	'1',
// 	'12',
// 	'123',
// 	'1234',
// 	'12345',
// 	'1234',
// 	'123',
// 	'12',
// 	'1',
// ]

const taskContainer4 = document.querySelector(".task_7-8-4");

const subBtn2 = taskContainer4.querySelector("#subBtn");
const result = taskContainer4.querySelector("#result");

subBtn2.addEventListener("click", () => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    let arr2 = [];
    for (let j = 1; j < i + 2; j++) {
      arr2.push(j);
    }
    arr.push(arr2.join(""));
  }
  arr.push(...[...arr].reverse().slice(1));
  console.log(arr);
});
