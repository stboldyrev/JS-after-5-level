// #1
// Даны два инпута и кнопка. В инпуты вводятся числа. По клику на кнопку, проверьте, являются ли эти числа дружественными или нет.

const taskContainer1 = document.querySelector(".task_8-10-1");

const inputNum1 = taskContainer1.querySelector("#inputNum1");
const inputNum2 = taskContainer1.querySelector("#inputNum2");
const subBtn = taskContainer1.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  if (inputNum1.value === "" || inputNum2.value === "") {
    console.log("Please provide any num");
    return;
  }

  const value1 = +inputNum1.value;
  const value2 = +inputNum2.value;

  const arr1 = [];
  for (let i = 1; i < value1; i++) {
    if (value1 % i === 0) {
      arr1.push(i);
    }
  }

  const arr2 = [];
  for (let i = 1; i < value2; i++) {
    if (value2 % i === 0) {
      arr2.push(i);
    }
  }

  arr1.reduce((sum, el) => sum + el, 0) === value2 &&
  arr2.reduce((sum, el) => sum + el, 0) === value1
    ? console.log("Nums are friendly")
    : console.log("Nums are not friendly");
});
// #2
// Дан некоторый массив:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// Дана переменная:
// let n = 3;
// Превратите этот массив в двухмерный, по n элементов в подмассиве.

const taskContainer2 = document.querySelector(".task_8-10-2");
const subBtn1 = taskContainer2.querySelector("#subBtn");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

subBtn1.addEventListener("click", () => {
  let newArr = [];
  let n = 3;

  for (let i = 0; i < arr.length; i += n) {
    newArr.push(arr.slice(i, i + n));
  }
  console.log(newArr);
});
// #3
// Дан массив:
// [
// 	[1, 2, 3, 4, 5],
// 	[1, 2, 3],
// 	[1, 2],
// ]
// Добавьте в каждый подмассив столько пустых строк, чтобы количество элементов в каждом подмассиве стало равно количеству элементов в самом длинном подмассиве.

const taskContainer3 = document.querySelector(".task_8-10-3");
const subBtn2 = taskContainer3.querySelector("#subBtn");

const arrs = [
  [1, 2, 3, 4, 5],
  [1, 2, 3],
  [1, 2],
];

subBtn2.addEventListener("click", () => {
  const longestArrLength = [...arrs].sort((a, b) => b.length - a.length)[0]
    .length;

  arrs.forEach((arr) => {
    while (arr.length !== longestArrLength) {
      arr.push("");
    }
  });

  console.log(arrs);
});
