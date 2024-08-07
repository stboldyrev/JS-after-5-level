// #1
// Дан массив:
// [
// 	[1, 2, 3],
// 	[1, 2],
// 	[1, 2, 3, 4, 5],
// 	[1],
// 	[1, 2, 3, 4],
// ]
// Отсортируйте элементы массива по возрастанию количества элементов в подмассиве.
const taskContainer1 = document.querySelector(".task_8-1-1");

const subBtn = taskContainer1.querySelector("#subBtn");

let arr = [[1, 2, 3], [1, 2], [1, 2, 3, 4, 5], [1], [1, 2, 3, 4]];
subBtn.addEventListener("click", () => {
  arr.sort((a, b) => a.length - b.length);
  console.log(arr);
});

// #2
// Дан массив:
// [
// 	[2, 4, 5],
// 	[1, 2, 3],
// 	[0, 1, 1],
// 	[5, 7, 1],
// ]
// Отсортируйте элементы массива по возрастанию суммы элементов подмассива.

const taskContainer2 = document.querySelector(".task_8-1-2");

const subBtn1 = taskContainer2.querySelector("#subBtn");

let arr1 = [
  [2, 4, 5],
  [1, 2, 3],
  [0, 1, 1],
  [5, 7, 1],
];
let sumOfArr = [];
subBtn1.addEventListener("click", () => {
  let sumOfArr = arr1.map((subArr) => ({
    sum: subArr.reduce((sum, el) => sum + el, 0),
    array: subArr,
  }));

  sumOfArr.sort((a, b) => a.sum - b.sum);

  arr1 = sumOfArr.map((item) => item.array);
  console.log(arr1);

  //   arr1.sort(
  //     (a, b) =>
  //       a.reduce((sum, el) => (sum += el), 0) -
  //       b.reduce((sum, el) => (sum += el), 0)
  //   );
  //   console.log(arr1);
});
// #3
// Выведите на экран следующую пирамидку:
// x
// xx
// xxx
// xxxx
// xxxxx

const taskContainer3 = document.querySelector(".task_8-1-3");

const subBtn2 = taskContainer3.querySelector("#subBtn");
const result = taskContainer3.querySelector("#result");

subBtn2.addEventListener("click", () => {
  let arr = [];
  for (let i = 1; i < 6; i++) {
    let arr2 = [];
    for (let j = 0; j < i; j++) {
      arr2.push("x");
    }
    arr.push(arr2.join(""));
    // console.log(arr2.join(""));
  }
  console.log(arr.join("\n"));
  result.innerHTML = arr.join("<br>");
});
