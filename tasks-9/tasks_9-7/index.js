// #1
// Дана таблица. Сделайте так, чтобы по клику на любую ячейку в красный цвет красился ряд с этой ячейкой.
const taskContainer1 = document.querySelector(".task_9-7-1");

const table = taskContainer1.querySelector("#myTable");
const trs = table.querySelectorAll("tr");

trs.forEach((tr) => {
  //   tr.addEventListener("click", () => {
  //     tr.style.backgroundColor = "red";
  //   });
  const tds = tr.querySelectorAll("td");
  tds.forEach((td) => {
    td.addEventListener("click", () => {
      tr.style.backgroundColor = "red";
    });
  });
});

// #2
// Дана таблица. Сделайте так, чтобы по клику на любую ячейку в красный цвет красилась колонка с этой ячейкой.
const taskContainer2 = document.querySelector(".task_9-7-2");

const table1 = taskContainer2.querySelector("#myTable");
const trs1 = table1.querySelectorAll("tr");

trs1.forEach((tr) => {
  const tds = tr.querySelectorAll("td");
  tds.forEach((td, i) => {
    td.addEventListener("click", () => {
      trs1.forEach((row) => {
        row.querySelectorAll("td")[i].style.backgroundColor = "red";
      });
    });
  });
});
// #3
// Дана таблица. Сделайте так, чтобы по клику на любую ячейку удалялся ряд с этой ячейкой.

const taskContainer3 = document.querySelector(".task_9-7-3");

const table2 = taskContainer3.querySelector("#myTable");
const trs2 = table2.querySelectorAll("tr");

trs2.forEach((tr) => {
  const tds = tr.querySelectorAll("td");
  tds.forEach((td) => {
    td.addEventListener("click", () => {
      tr.remove();
    });
  });
});
// #4
// Дана таблица. Сделайте так, чтобы по клику на любую удалялась колонка с этой ячейкой.
const taskContainer4 = document.querySelector(".task_9-7-4");

const table3 = taskContainer4.querySelector("#myTable");
const trs3 = table3.querySelectorAll("tr");

trs3.forEach((tr) => {
  const tds = tr.querySelectorAll("td");
  tds.forEach((td, i) => {
    td.addEventListener("click", () => {
      trs3.forEach((row) => {
        row.querySelectorAll("td")[i].remove();
      });
    });
  });
});
// #5
// Дана таблица и кнопка. По клику на кнопку покрасьте в красный цвет ячейки, расположенные на диагонали таблицы.

const taskContainer5 = document.querySelector(".task_9-7-5");
const table4 = taskContainer5.querySelector("#myTable");
const trs4 = table4.querySelectorAll("tr");
const subBtn = taskContainer5.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  trs4.forEach((row, rowIndex) => {
    const cells = row.querySelectorAll("td");

    // Обращаемся к ячейке на главной диагонали
    const diagonalCell = cells[rowIndex];
    diagonalCell.style.backgroundColor = "red"; // Выделяем цветом ячейку на диагонали
  });
});
