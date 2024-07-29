// #1
// По клику на кнопку создайте HTML таблицу с заданной шириной и высотой.

const taskContainer1 = document.querySelector(".task_6-2-1");
const subBtn = taskContainer1.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  const table = document.createElement("table");
  table.style.width = "300px";
  table.style.height = "300px";
  table.style.border = "2px solid black";

  for (let i = 0; i < 3; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const td = document.createElement("td");
      td.style.border = "1px solid black";
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  const tableContainer = document.createElement("div");
  tableContainer.id = "table-container";
  tableContainer.appendChild(table);

  document.body.appendChild(tableContainer);
});
// #2
// По клику на кнопку создайте HTML таблицу с заданной шириной и высотой так, чтобы в ячейках стояли их порядковые номера.

const taskContainer2 = document.querySelector(".task_6-2-2");
const subBtn1 = taskContainer2.querySelector("#subBtn");

subBtn1.addEventListener("click", () => {
  const table = document.createElement("table");
  table.style.width = "300px";
  table.style.height = "300px";
  table.style.border = "2px solid black";
  let counter = 1;
  for (let i = 0; i < 3; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const td = document.createElement("td");
      td.style.border = "1px solid black";
      td.style.width = "100px";
      td.style.height = "100px";
      td.style.textAlign = "center";
      td.textContent = counter++;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  const tableContainer = document.createElement("div");
  tableContainer.id = "table-container";
  tableContainer.appendChild(table);

  document.body.appendChild(tableContainer);
});
// #3
// По клику на кнопку создайте HTML таблицу с заданной шириной и высотой так, чтобы в ячейках стояли номера их рядов и колонок.

const taskContainer3 = document.querySelector(".task_6-2-3");
const subBtn2 = taskContainer3.querySelector("#subBtn");
const tableContainer = document.createElement("div");

subBtn2.addEventListener("click", () => {
  tableContainer.innerHTML = "";
  const table = document.createElement("table");
  table.style.width = "300px";
  table.style.height = "300px";
  table.style.border = "2px solid black";
  for (let i = 0; i < 3; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const td = document.createElement("td");
      td.style.border = "1px solid black";
      td.style.width = "100px";
      td.style.height = "100px";
      td.style.textAlign = "center";
      td.textContent = `Row - ${i + 1}, Column - ${j + 1}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  tableContainer.id = "table-container";
  tableContainer.appendChild(table);

  document.body.appendChild(tableContainer);
});
// #4
// Дан массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// По нажатию на кнопку создайте таблицу, заполненную данными из этого массива.

const taskContainer4 = document.querySelector(".task_6-2-4");
const subBtn3 = taskContainer4.querySelector("#subBtn");
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

subBtn3.addEventListener("click", () => {
  const table = document.createElement("table");
  table.style.width = "300px";
  table.style.height = "300px";
  table.style.border = "2px solid black";

  //   for (let i = 0; i < arr.length; i++) {
  //     const tr = document.createElement("tr");
  //     for (let j = 0; j < arr[i].length; j++) {
  //       const td = document.createElement("td");
  //       td.style.border = "1px solid black";
  //       td.style.width = "100px";
  //       td.style.height = "100px";
  //       td.style.textAlign = "center";
  //       td.textContent = arr[i][j];
  //       tr.appendChild(td);
  //     }
  //     table.appendChild(tr);
  //   }

  arr.forEach((el) => {
    const tr = document.createElement("tr");
    el.forEach((innerEl) => {
      const td = document.createElement("td");
      td.style.border = "1px solid black";
      td.style.width = "100px";
      td.style.height = "100px";
      td.style.textAlign = "center";
      td.textContent = innerEl;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  const tableContainer = document.createElement("div");
  tableContainer.id = "table-container";
  tableContainer.appendChild(table);

  document.body.appendChild(tableContainer);
});
