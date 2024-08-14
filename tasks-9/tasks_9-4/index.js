// #1
// Дана таблица. По нажатию на кнопку добавьте в эту таблицу новый ряд.

const taskContainer1 = document.querySelector(".task_9-4-1");

const table = taskContainer1.querySelector("#myTable");
const subBtn = taskContainer1.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.textContent = `Row ${table.rows.length}, Cell 1`;
  cell2.textContent = `Row ${table.rows.length}, Cell 2`;
  cell3.textContent = `Row ${table.rows.length}, Cell 3`;
});
// #2
// Дана таблица. По нажатию на кнопку добавьте в эту таблицу новую колонку.

const taskContainer2 = document.querySelector(".task_9-4-2");

const table1 = taskContainer2.querySelector("#myTable");
const subBtn1 = taskContainer2.querySelector("#subBtn");

subBtn1.addEventListener("click", () => {
  for (let i = 0; i < table1.rows.length; i++) {
    const newCell = document.createElement("td");
    newCell.textContent = `Row ${i + 1}, Cell ${
      table1.rows[i].cells.length + 1
    }`;
    table1.rows[i].appendChild(newCell);
  }
});
// #3
// Дана таблица. По нажатию на кнопку добавьте в эту таблицу и новый ряд, и новую колонку.
const taskContainer3 = document.querySelector(".task_9-4-3");

const table2 = taskContainer3.querySelector("#myTable");
const subBtn2 = taskContainer3.querySelector("#subBtn");

subBtn2.addEventListener("click", () => {
  const newRow = table2.insertRow();

  for (let j = 0; j <= table2.rows.length; j++) {
    const cell = newRow.insertCell(j);
    cell.textContent = `Row ${table2.rows.length}, Cell ${j}`;
  }
  for (let i = 0; i < table2.rows.length; i++) {
    const newCell = document.createElement("td");
    newCell.textContent = `Row ${i + 1}, Cell ${
      table2.rows[i].cells.length + 1
    }`;
    table2.rows[i].appendChild(newCell);
  }
});
// #4
// Дана таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования этой ячейки.

const taskContainer4 = document.querySelector(".task_9-4-4");

const table3 = taskContainer4.querySelector("#myTable");
const td = table3.querySelectorAll("td");

td.forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.dataset.isClicked) {
      const currentValue = el.textContent.trim();
      el.innerHTML = `<input type="text" value="${currentValue}" />`;

      const input = el.querySelector("input");

      input.focus();

      input.addEventListener("blur", () => {
        el.innerHTML = input.value;
        delete el.dataset.isClicked;
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          input.blur();
        }
      });
      el.dataset.isClicked = "true";
    }
  });
});
// #5
// Дана таблица и кнопка. По нажатию на кнопку покрасьте в красный цвет случайную ячейку таблицы. Повторное нажатие на кнопку должно закрашивать новую незакрашенную ячейку, пока ячейки не закончатся.

const taskContainer5 = document.querySelector(".task_9-4-5");

const table4 = taskContainer5.querySelector("#myTable");
const subBtn3 = taskContainer5.querySelector("#subBtn");
const td1 = table4.querySelectorAll("td");

td1.forEach((td) => {
  td.dataset.isClicked = "false";
});
subBtn3.addEventListener("click", () => {
  //   let filterArr = [];
  //   td1.forEach((td) => {
  //     if (td.dataset.isClicked !== "true") {
  //       filterArr.push(td);
  //     }
  //   });

  //   if (filterArr.length === 0) {
  //     console.log("Nothing to paint");
  //     return;
  //   }
  //   let getRandomNum;
  //   do {
  //     getRandomNum = Math.floor(Math.random() * td1.length);
  //   } while (td1[getRandomNum].dataset.isClicked === "true");

  //   td1[getRandomNum].style.backgroundColor = "red";
  //   td1[getRandomNum].dataset.isClicked = "true";
  const filteredArr = [...td1].filter((td) => td.dataset.isClicked === "false");

  if (filteredArr.length === 0) {
    console.log("Nothing to paint");
    return;
  }
  const getRandomNum = Math.floor(Math.random() * filteredArr.length);

  filteredArr[getRandomNum].style.backgroundColor = "red";
  filteredArr[getRandomNum].dataset.isClicked = "true";
});

// #6
// Дана таблица и кнопка. Пусть каждое нажатие на кнопку красит в красный цвет следующую по порядку ячейку таблицы.

const taskContainer6 = document.querySelector(".task_9-4-6");

const table5 = taskContainer6.querySelector("#myTable");
const subBtn4 = taskContainer6.querySelector("#subBtn");
const td2 = table5.querySelectorAll("td");

let indexCounter = 0;
subBtn4.addEventListener("click", () => {
  if (indexCounter >= td2.length) {
    console.log("Nothing to paint");
    return;
  }

  td2[indexCounter].style.backgroundColor = "red";
  indexCounter += 1;
});
// #7
// Выведите на экран 6 случайных картинок игральных карт.

const taskContainer7 = document.querySelector(".task_9-4-7");
const subBtn5 = taskContainer7.querySelector("#subBtn");
const result = taskContainer7.querySelector("#result");

const cards = [
  "https://deckofcardsapi.com/static/img/2S.png",
  "https://deckofcardsapi.com/static/img/3S.png",
  "https://deckofcardsapi.com/static/img/4S.png",
  "https://deckofcardsapi.com/static/img/5S.png",
  "https://deckofcardsapi.com/static/img/6S.png",
  "https://deckofcardsapi.com/static/img/7S.png",
  "https://deckofcardsapi.com/static/img/8S.png",
  "https://deckofcardsapi.com/static/img/9S.png",
  "https://deckofcardsapi.com/static/img/0S.png",
  "https://deckofcardsapi.com/static/img/JS.png",
  "https://deckofcardsapi.com/static/img/QS.png",
  "https://deckofcardsapi.com/static/img/KS.png",
  "https://deckofcardsapi.com/static/img/AS.png",
  "https://deckofcardsapi.com/static/img/2H.png",
  "https://deckofcardsapi.com/static/img/3H.png",
  "https://deckofcardsapi.com/static/img/4H.png",
  "https://deckofcardsapi.com/static/img/5H.png",
  "https://deckofcardsapi.com/static/img/6H.png",
  "https://deckofcardsapi.com/static/img/7H.png",
  "https://deckofcardsapi.com/static/img/8H.png",
  "https://deckofcardsapi.com/static/img/9H.png",
  "https://deckofcardsapi.com/static/img/0H.png",
  "https://deckofcardsapi.com/static/img/JH.png",
  "https://deckofcardsapi.com/static/img/QH.png",
  "https://deckofcardsapi.com/static/img/KH.png",
  "https://deckofcardsapi.com/static/img/AH.png",
  "https://deckofcardsapi.com/static/img/2D.png",
  "https://deckofcardsapi.com/static/img/3D.png",
  "https://deckofcardsapi.com/static/img/4D.png",
  "https://deckofcardsapi.com/static/img/5D.png",
  "https://deckofcardsapi.com/static/img/6D.png",
  "https://deckofcardsapi.com/static/img/7D.png",
  "https://deckofcardsapi.com/static/img/8D.png",
  "https://deckofcardsapi.com/static/img/9D.png",
  "https://deckofcardsapi.com/static/img/0D.png",
  "https://deckofcardsapi.com/static/img/JD.png",
  "https://deckofcardsapi.com/static/img/QD.png",
  "https://deckofcardsapi.com/static/img/KD.png",
  "https://deckofcardsapi.com/static/img/AD.png",
  "https://deckofcardsapi.com/static/img/2C.png",
  "https://deckofcardsapi.com/static/img/3C.png",
  "https://deckofcardsapi.com/static/img/4C.png",
  "https://deckofcardsapi.com/static/img/5C.png",
  "https://deckofcardsapi.com/static/img/6C.png",
  "https://deckofcardsapi.com/static/img/7C.png",
  "https://deckofcardsapi.com/static/img/8C.png",
  "https://deckofcardsapi.com/static/img/9C.png",
  "https://deckofcardsapi.com/static/img/0C.png",
  "https://deckofcardsapi.com/static/img/JC.png",
  "https://deckofcardsapi.com/static/img/QC.png",
  "https://deckofcardsapi.com/static/img/KC.png",
  "https://deckofcardsapi.com/static/img/AC.png",
];

subBtn5.addEventListener("click", () => {
  result.innerHTML = "";

  let arr = [];
  while (arr.length < 6) {
    let getRandomNum;
    do {
      getRandomNum = Math.floor(Math.random() * cards.length);
    } while (arr.includes(cards[getRandomNum]));
    arr.push(cards[getRandomNum]);
  }
  //   let arr = new Set();
  //   while (arr.size < 6) {
  //     const getRandomNum = Math.floor(Math.random() * cards.length);
  //     arr.add(cards[getRandomNum]);
  //   }

  arr.forEach((link) => {
    const img = document.createElement("img");
    img.src = link;

    result.appendChild(img);
  });
});
