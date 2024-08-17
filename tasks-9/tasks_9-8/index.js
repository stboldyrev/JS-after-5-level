// #1
// Дана таблица и кнопка. По клику на кнопку поменяйте местами первый и второй ряд таблицы.
const taskContainer1 = document.querySelector(".task_9-8-1");

const table = taskContainer1.querySelector("#myTable");
const trs = table.querySelectorAll("tr");
const subBtn = taskContainer1.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  //   if (trs.length >= 2) {
  //     table.insertBefore(trs[1], trs[0]);
  //   }
  const copyTD = trs[0].innerHTML;
  trs[0].innerHTML = trs[1].innerHTML;
  trs[1].innerHTML = copyTD;
});
// #2
// Дана таблица и кнопка. По клику на кнопку поменяйте местами первую и вторую колонки таблицы.
const taskContainer2 = document.querySelector(".task_9-8-2");

const table1 = taskContainer2.querySelector("#myTable");
const trs1 = table1.querySelectorAll("tr");
const subBtn1 = taskContainer2.querySelector("#subBtn");

subBtn1.addEventListener("click", () => {
  trs1.forEach((tr) => {
    // const tds = tr.querySelectorAll("td");
    // if (tds.length >= 2) {
    //   // Проверка, что есть как минимум две колонки
    //   // Обмен ячеек местами
    //   tr.insertBefore(tds[1], tds[0]);
    // }
    const tds = tr.querySelectorAll("td");
    const copyTD = tds[0].innerHTML;
    tds[0].innerHTML = tds[1].innerHTML;
    tds[1].innerHTML = copyTD;
  });
});

// #3
// Дана таблица. По клику на заголовок любой колонки отсортируйте таблицу по значениям ячеек этой колонки.

const taskContainer3 = document.querySelector(".task_9-8-3");

const table2 = taskContainer3.querySelector("#myTable");
const thead = table2.querySelector("thead");
const trsHead = thead.querySelectorAll("tr");
const tbody = table2.querySelector("tbody");
const trsBody = tbody.querySelectorAll("tr");

trsHead.forEach((trhead) => {
  trhead.addEventListener("click", (event) => {
    let headerIndex = 0;
    const thsHead = trhead.querySelectorAll("th");
    thsHead.forEach((th, i) => {
      if (event.target === th) {
        headerIndex = i;
      }
    });

    let sorted = [...trsBody].sort((a, b) => {
      const tdsA = a.querySelectorAll("td");
      const tdsB = b.querySelectorAll("td");
      const aValue = tdsA[headerIndex].textContent.trim();
      const bValue = tdsB[headerIndex].textContent.trim();
      if (!isNaN(parseFloat(aValue))) {
        return +aValue - +bValue;
      } else {
        return aValue.localeCompare(bValue);
      }
    });

    tbody.innerHTML = "";
    sorted.forEach((el) => {
      tbody.appendChild(el);
    });
  });
});

// #4
// Дана таблица. Сделайте так, чтобы при кликах на любую яейку таблицы в нее по очереди вставлялись числа 1, 2 и 3.

const taskContainer4 = document.querySelector(".task_9-8-4");

const table3 = taskContainer4.querySelector("#myTable");
const trs2 = table3.querySelectorAll("tr");

let counter = 1;

trs2.forEach((tr) => {
  const tds = tr.querySelectorAll("td");

  tds.forEach((td) => {
    td.addEventListener("click", () => {
      if (counter <= 3) {
        td.textContent = counter;
        counter++;
      } else {
        counter = 1;
        td.textContent = counter;
        counter++;
      }
      //   td.textContent = counter;
      //   counter = (counter % 3) + 1;
    });
  });
});
