// #1
// Сгенерируйте таблицу, покрашенную в виде шахматной доски.

const taskContainer1 = document.querySelector(".task_9-6-1");

const table = taskContainer1.querySelector("#myTable");
const subBtn = taskContainer1.querySelector("#subBtn");
const tds = table.querySelectorAll("td");

subBtn.addEventListener("click", () => {
  for (let i = 0; i < tds.length; i++) {
    if (i % 2 !== 0) {
      tds[i].style.backgroundColor = "white";
    } else {
      tds[i].style.backgroundColor = "black";
    }
  }
});
// #2
// Дана таблица. Сделайте так, чтобы по клику на любую ячейку в нее писался ее порядковый номер в таблице.

const taskContainer2 = document.querySelector(".task_9-6-2");

const table1 = taskContainer2.querySelector("#myTable");
const subBtn1 = taskContainer2.querySelector("#subBtn");
const tds1 = table1.querySelectorAll("td");

subBtn1.addEventListener("click", () => {
  tds1.forEach((td, i) => {
    if (!td.textContent.includes(i + 1)) {
      td.textContent = td.textContent + ` Index: ${i + 1}`;
    } else {
      return;
    }
  });
});
// #3
// Дана таблица. Сделайте так, чтобы по клику на любую ячейку в нее писался номер ее ряда и колонки в таблице.

const taskContainer3 = document.querySelector(".task_9-6-3");

const table2 = taskContainer3.querySelector("#myTable");
const trs = table2.querySelectorAll("tr");

let indexCounter1 = 0;
table2.addEventListener("click", (e) => {
  const td = e.target;

  if (td.tagName === "TD") {
    const row = td.parentElement;
    const rowIndex = Array.from(table2.querySelectorAll("tr")).indexOf(row) + 1;
    const rowCell = Array.from(row.querySelectorAll("td")).indexOf(td) + 1;
    td.textContent = `Row ${rowIndex}, Cell ${rowCell}`;
  }
});
// #4
// Дано пять чебоксов. Сделайте так, чтобы одновременно можно было отметить не более трех из них.

const taskContainer4 = document.querySelector(".task_9-6-4");

const inputs = taskContainer4.querySelectorAll("input");

let checkCounter = new Set();

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (checkCounter.size >= 3 && input.checked) {
      input.checked = false;
      alert("You can select up to 3 checkboxes only.");
    }
    if (input.checked) {
      checkCounter.add(input);
    } else {
      checkCounter.delete(input);
    }
    console.log(checkCounter);

    // const checkedCheckboxes = Array.from(inputs).filter((cb) => cb.checked);
    // if (checkedCheckboxes.length > 3) {
    //   input.checked = false;
    //   alert("You can select up to 3 checkboxes only.");
    // }
  });
});
// #5
// Дан следующий массив:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// Из приведенного массива динамически создайте таблицу размером в 5 колонок.

const taskContainer5 = document.querySelector(".task_9-6-5");

const subBtn2 = taskContainer5.querySelector("#subBtn");
const tableContainer = taskContainer5.querySelector("#tableContainer");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

subBtn2.addEventListener("click", () => {
  tableContainer.innerHTML = "";
  const table = document.createElement("table");

  const numRows = Math.ceil(arr.length / 5);
  for (let row = 0; row < numRows; row++) {
    const tr = document.createElement("tr");

    for (let col = 0; col < 5; col++) {
      const td = document.createElement("td");
      const index = row * 5 + col;

      if (index < arr.length) {
        td.textContent = arr[index];
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  tableContainer.appendChild(table);
});
