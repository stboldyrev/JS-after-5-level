// #1
// Напишите программу, которая сформирует следующую строку:
// '-x-xx-xxx-xx-x-'

const taskContainer1 = document.querySelector(".task_7-10-1");

const subBtn = taskContainer1.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  let arr = [];
  for (let i = 1; i < 4; i++) {
    let arr2 = [];
    arr.push("-");
    for (let j = 0; j < i; j++) {
      arr2.push("x");
    }
    arr.push(arr2.join(""));
  }
  arr.push(...[...arr].reverse().slice(1));
  console.log(arr.join(""));
});

// #2
// Напишите программу, которая сформирует следующую строку:
// '11 12 13 21 22 23 31 32 33'

const taskContainer2 = document.querySelector(".task_7-10-2");

const subBtn1 = taskContainer2.querySelector("#subBtn");

subBtn1.addEventListener("click", () => {
  let arr = [];
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      arr.push(i.toString() + j.toString());
    }
  }
  console.log(arr.join(" "));
});
// #3
// Даны дивы с названиями продуктов и ценами. Дан также абзац. Сделайте так, чтобы кликами можно было выбрать несколько продуктов и их суммарная стоимость при этом писалась бы в абзац.

const taskContainer3 = document.querySelector(".task_7-10-3");

const products = taskContainer3.querySelectorAll(".products");
const result = taskContainer3.querySelector("#result");

let counter = 0;
let selectedProduct = new Set();

products.forEach((product) => {
  product.addEventListener("click", () => {
    if (!selectedProduct.has(product)) {
      selectedProduct.add(product);
      counter += +product.dataset.price;
    }
    console.log(counter);
    result.textContent = `Total: $${counter}`;
  });
});
// #4
// Дана таблица прямоугольного размера с нечетным количеством рядов и колонок. Дана кнопка. По клику на кнопку выделите каким-нибудь цветом центральную ячейку.

const taskContainer4 = document.querySelector(".task_7-10-4");
const table = taskContainer4.querySelector("#table");
const subBtn2 = taskContainer4.querySelector("#subBtn");

subBtn2.addEventListener("click", () => {
  const rows = table.querySelectorAll("tr");
  const numRows = rows.length;
  const numCols = rows[0].querySelectorAll("td").length;

  let centralRowIndex = Math.floor(numRows / 2);
  let centralColIndex = Math.floor(numCols / 2);

  const centralCell =
    rows[centralRowIndex].querySelectorAll("td")[centralColIndex];

  centralCell.style.backgroundColor = "red";
});
