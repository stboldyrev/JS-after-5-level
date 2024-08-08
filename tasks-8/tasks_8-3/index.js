// #1
// Пусть даны чекбоксы, отмеченные и нет. По нажатию на кнопку сделайте так, чтобы все чекбоксы сменили свое состояние.

const taskContainer1 = document.querySelector(".task_8-3-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const options = taskContainer1.querySelectorAll(".options");

subBtn.addEventListener("click", () => {
  options.forEach((el) => {
    el.checked ? (el.checked = false) : (el.checked = true);
    // el.checked = !el.checked;
  });
});

// #2
// Дан следующий массив:
// let arr = [1, 2, 3, 4, 5, 6];
// Дано также число:
// let num = 3;
// Добавьте в приведенный массив столько пустых строк, чтобы длина массива стала равна квадрату числа из переменной.

const taskContainer2 = document.querySelector(".task_8-3-2");

const subBtn1 = taskContainer2.querySelector("#subBtn");

let arr = [1, 2, 3, 4, 5, 6];
let num = 3;

subBtn1.addEventListener("click", () => {
  let numSquare = num ** 2;

  if (numSquare > arr.length) {
    for (let i = arr.length; i < numSquare; i++) {
      arr.push("");
    }
  }
  console.log(arr);
});
// #3
// Выведите на экран следующую пирамидку:
// 111
// 222
// 333
// 444
// 555
// 666
// 777
// 888
// 999

const taskContainer3 = document.querySelector(".task_8-3-3");

const subBtn2 = taskContainer3.querySelector("#subBtn");
const result = taskContainer3.querySelector("#result");

subBtn2.addEventListener("click", () => {
  let arr = [];
  for (let i = 1; i <= 9; i++) {
    const arr2 = [];
    for (let j = 1; j <= 3; j++) {
      arr2.push(+i);
    }
    arr.push(arr2.join(""));
  }
  console.log(arr.join("\n"));
  result.innerHTML = arr.join("<br>");
});
