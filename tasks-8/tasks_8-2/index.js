// #1
// В текстареа вводится текст со словами. По потери фокуса сделайте таблицу, в первой колонке которой будут слова из текста, во второй колонке - количество раз, которое это слово встречается, а в третьей - процентное содержание этого слова в текста.

const taskContainer1 = document.querySelector(".task_8-2-1");

const textArea = taskContainer1.querySelector("#textArea");

textArea.addEventListener("blur", () => {
  const existingTable = taskContainer1.querySelector("table");
  if (existingTable) {
    existingTable.remove();
  }

  if (textArea.value === "") {
    console.log("Please provide any information");
    return;
  }
  const text = textArea.value.trim().split(/\s+/);
  const counterObj = {};
  for (let word of text) {
    if (counterObj[word]) {
      counterObj[word]++;
    } else {
      counterObj[word] = 1;
    }
  }

  const percentage = {};
  let textLength = text.length;
  for (let word of text) {
    percentage[word] = ((counterObj[word] * 100) / textLength).toFixed(2);
  }

  const objText = text.map((word) => ({
    word,
    quantity: counterObj[word],
    percent: `${percentage[word]}%`,
  }));
  const table = document.createElement("table");
  const thead = document.createElement("thead");

  const headers = ["Слово", "Количество раз", "Процентное содержание"];
  const trHeader = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    trHeader.appendChild(th);
  });
  thead.appendChild(trHeader);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  objText.forEach((textWord) => {
    const trBody = document.createElement("tr");
    for (let key in textWord) {
      const td = document.createElement("td");
      td.textContent = textWord[key];
      trBody.appendChild(td);
    }
    tbody.appendChild(trBody);
  });
  table.appendChild(tbody);
  taskContainer1.appendChild(table);

  textArea.value = "";
});

// #2
// Дан список ul и кнопка. По нажатию на кнопку отсортируйте пункты списка по возрастанию.

const taskContainer2 = document.querySelector(".task_8-2-2");

const list = taskContainer2.querySelector("#list");

const subBtn = taskContainer2.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  const items = Array.from(taskContainer2.querySelectorAll(".items"));
  items.sort((a, b) => a.textContent.localeCompare(b.textContent));
  list.innerHTML = "";

  items.forEach((item) => list.appendChild(item));

  //   console.log(renewed);
});

// #3
// Дан массив, подмассивы которого содержат цифры:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Слейте элементы этого массива в числа:
// [123, 456, 789]

const taskContainer3 = document.querySelector(".task_8-2-3");

const subBtn1 = taskContainer3.querySelector("#subBtn");

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

subBtn1.addEventListener("click", () => {
  let final = arr.map((el) => +el.join(""));
  console.log(final);
});
// #4
// Выведите на экран следующую пирамидку:
// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx

const taskContainer4 = document.querySelector(".task_8-2-4");

const subBtn2 = taskContainer4.querySelector("#subBtn");
const result = taskContainer4.querySelector("#result");

subBtn2.addEventListener("click", () => {
  let arr = [];
  for (let i = 1; i <= 8; i++) {
    let arr2 = [];
    for (let j = 2; j <= i + 2; j++) {
      arr2.push("x");
    }
    if (arr2.length % 2 === 0) {
      arr.push(arr2.join(""));
    }

    // console.log(arr2.join(""));
  }
  console.log(arr.join("\n"));
  result.innerHTML = arr.join("<br>");
});
