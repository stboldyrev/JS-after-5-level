// #1
// Дан массив с числами. Подсчитайте общее количество цифр 3 во всех числах данного массива.

const taskContainer1 = document.querySelector(".task_7-7-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const arr = [123, 1456, 143, 565, 543];
let counter = 0;
subBtn.addEventListener("click", () => {
  arr.forEach((num) => {
    if (num.toString().includes("3")) {
      counter++;
    }
  });
  console.log(counter);
});
// #2
// Напишите программу, которая сформирует следующий массив:
// ["1", "12", "123", "1234", "12345"];

const taskContainer2 = document.querySelector(".task_7-7-2");

const subBtn1 = taskContainer2.querySelector("#subBtn");

subBtn1.addEventListener("click", () => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    let arr2 = [];
    for (let j = 1; j < i + 2; j++) {
      arr2.push(j);
    }
    arr.push(arr2.join(""));
  }
  console.log(arr);
});
// #3
// Дан массив:
// let affairs = [
// 	{
// 		date:  '2019-12-29',
// 		event: 'name1',
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name2',
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name3',
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name4',
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name5',
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name6',
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name7',
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name8',
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name9',
// 	},
// ]
// Получите из этого массива уникальные даты, то есть вот так:
// ['2019-12-29', '2019-12-30', '2019-12-31']

const taskContainer3 = document.querySelector(".task_7-7-3");

const subBtn2 = taskContainer3.querySelector("#subBtn");
let affairs = [
  {
    date: "2019-12-29",
    event: "name1",
  },
  {
    date: "2019-12-31",
    event: "name2",
  },
  {
    date: "2019-12-29",
    event: "name3",
  },
  {
    date: "2019-12-30",
    event: "name4",
  },
  {
    date: "2019-12-29",
    event: "name5",
  },
  {
    date: "2019-12-31",
    event: "name6",
  },
  {
    date: "2019-12-29",
    event: "name7",
  },
  {
    date: "2019-12-30",
    event: "name8",
  },
  {
    date: "2019-12-30",
    event: "name9",
  },
];

let arr1 = [];
subBtn2.addEventListener("click", () => {
  affairs.forEach((obj) => {
    arr1.push(obj.date);
  });
  console.log(arr1);
});
