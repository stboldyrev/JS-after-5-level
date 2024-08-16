// №1
// Дан селект и радио кнопочки, количество радио равно количеству пунктов в селекте. Сделайте так, чтобы при выборе пункта в селекте автоматически становилась отмеченной соответствующая радио кнопочка.

const taskContainer1 = document.querySelector(".task_9-5-1");

const select = taskContainer1.querySelector("select");
const options = taskContainer1.querySelectorAll("option");
const inputs = taskContainer1.querySelectorAll("input");
const inputApple = taskContainer1.querySelector("#apple");
const inputBanana = taskContainer1.querySelector("#banana");
const inputOrange = taskContainer1.querySelector("#orange");

select.addEventListener("change", () => {
  let selectedValue = select.value;
  //   options.forEach((el) => {
  //     if (el.selected) {
  //     }
  // });

  inputs.forEach((input) => {
    if (input.value === selectedValue) {
      input.checked = true; //checked
    }
  });
});

// №2
// Дана таблица. По нажатию на кнопку выделите в таблице красным цветом N случайных ячеек.

const taskContainer2 = document.querySelector(".task_9-5-2");

const table = taskContainer2.querySelector("#myTable");
const inputNum = taskContainer2.querySelector("#inputNum");
const subBtn = taskContainer2.querySelector("#subBtn");
const tds = table.querySelectorAll("td");

subBtn.addEventListener("click", () => {
  tds.forEach((td) => {
    td.style.backgroundColor = "";
    td.dataset.isClicked = "false";
  });
  if (inputNum.value === "" || inputNum.value === 0) {
    console.log("Pleas provide some num that is greater that 0");
    return;
  }

  const n = inputNum.value;

  for (let i = 0; i < n; i++) {
    const filteredArr = [...tds].filter(
      (td) => td.dataset.isClicked === "false"
    );

    if (filteredArr.length === 0) {
      console.log("Nothing to paint");
      return;
    }
    const getRandomNum = Math.floor(Math.random() * filteredArr.length);

    filteredArr[getRandomNum].style.backgroundColor = "red";
    filteredArr[getRandomNum].dataset.isClicked = "true";
  }

  inputNum.value = "";
});
// №3
// Дан массив:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку создайте таблицу, заполненную данными из этого массива, содержащую столько колонок, сколько указано в инпуте.

const taskContainer3 = document.querySelector(".task_9-5-3");
const inputNum1 = taskContainer3.querySelector("#inputNum");
const subBtn1 = taskContainer3.querySelector("#subBtn");
const tableContainer = taskContainer3.querySelector("#tableContainer");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
subBtn1.addEventListener("click", () => {
  tableContainer.innerHTML = "";
  const table = document.createElement("table");
  if (inputNum1.value === "" || inputNum1.value === 0) {
    console.log("Please provide some num that is greater that 0");
    return;
  }
  const value = inputNum1.value;
  const numRows = Math.ceil(arr.length / value);
  for (let row = 0; row < numRows; row++) {
    const tr = document.createElement("tr");

    for (let col = 0; col < value; col++) {
      const td = document.createElement("td");
      const index = (row * value + col) % arr.length;

      td.textContent = arr[index];

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  tableContainer.appendChild(table);
});
// №4
// Сделайте функцию, которая будет устанавливать правильную форму существительного после числа. Вот как должна работать эта функция:
// func(1, 'яблоко', 'яблока', 'яблок'); // выведет '1 яблоко'
// func(2, 'яблоко', 'яблока', 'яблок'); // выведет '2 яблока'
// func(3, 'яблоко', 'яблока', 'яблок'); // выведет '3 яблока'
// func(4, 'яблоко', 'яблока', 'яблок'); // выведет '4 яблока'
// func(5, 'яблоко', 'яблока', 'яблок'); // выведет '5 яблок'
// Вот пример для для двухзначных чисел:

// func(11, 'яблоко', 'яблока', 'яблок'); // выведет '11 яблок'
// func(12, 'яблоко', 'яблока', 'яблок'); // выведет '12 яблок'
// func(21, 'яблоко', 'яблока', 'яблок'); // выведет '21 яблоко'
// func(23, 'яблоко', 'яблока', 'яблок'); // выведет '23 яблока'
// Наша функция должна работать для чисел любой длины:

// func(1223421, 'яблоко', 'яблока', 'яблок'); // выведет '1223421 яблоко'

const taskContainer4 = document.querySelector(".task_9-5-4");

const subBtn2 = taskContainer4.querySelector("#subBtn");

subBtn2.addEventListener("click", () => {
  const func = (num) => {
    let obj = {
      1: "яблоко",
      2: "яблока",
      3: "яблока",
      4: "яблока",
      5: "яблок",
      6: "яблок",
      7: "яблок",
      8: "яблок",
      9: "яблок",
      0: "яблок",
    };
    let numStr = num.toString();
    let lastDigit = numStr[numStr.length - 1];
    let lastTwoDigits = numStr.length > 1 ? numStr.slice(-2) : numStr;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      console.log(`${num} яблок`);
    } else {
      console.log(`${num} ${obj[lastDigit]}`);
    }
  };

  func(121);
});
