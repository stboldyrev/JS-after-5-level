// #1
// На странице через абсолютное позиционирование расположены два дива. По клику на кнопку проверьте, накладываются ли эти дивы друга на друга или нет.

const taskContainer1 = document.querySelector(".task_7-6-1");
const rect1 = document.getElementById("div1").getBoundingClientRect();
const rect2 = document.getElementById("div2").getBoundingClientRect();
const subBtn = taskContainer1.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  const isOverlapping = !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );

  if (isOverlapping) {
    console.log("Divs are overlapping");
  } else {
    console.log("Divs are not overlapping");
  }
});

// #2
// Дана кнопка и ul. По клику на кнопку выведите список всех возможных счастливых билетов. Билет представляет собой строку из шести цифр, может быть с нулями спереди. Билет считается счастливым, если сумма сумма первых трех цифр равна сумме вторых трех цифр.

const taskContainer2 = document.querySelector(".task_7-6-2");
const subBtn1 = taskContainer2.querySelector("#subBtn");
const list = taskContainer2.querySelector("#list");

subBtn1.addEventListener("click", () => {
  const finalArr = [];
  for (let i = 100000; i < 1000000; i++) {
    const arr = i.toString().split("");
    const subArr1 = arr.slice(0, 3).map((el) => +el);
    const subArr2 = arr.slice(3).map((el) => +el);
    const reduceArr1 = subArr1.reduce((sum, el) => sum + el, 0);
    const reduceArr2 = subArr2.reduce((sum, el) => sum + el, 0);

    if (reduceArr1 === reduceArr2) {
      finalArr.push(arr.join(""));
    }
  }

  list.innerHTML = "";

  finalArr.forEach((el) => {
    const li = document.createElement("li");
    li.textContent = el;
    list.appendChild(li);
  });
});

// #3
// Напишите программу, которая сформирует следующий массив:
// [
// 	'x',
// 	'xx',
// 	'xxx',
// 	'xxxx',
// 	'xxxxx',
// ]

const taskContainer3 = document.querySelector(".task_7-6-3");

const subBtn2 = taskContainer3.querySelector("#subBtn");

subBtn2.addEventListener("click", () => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    let arr2 = [];
    for (let j = 0; j < i + 1; j++) {
      arr2.push("x");
    }
    arr.push(arr2.join(""));
  }
  console.log(arr);
});
// #4
// Дан такой объект:
// let data = {
// 	2018: {
// 		11: {
// 			29: [1, 2, 3],
// 			30: [4, 5],
// 		},
// 		12: {
// 			30: [6, 7],
// 			31: [8, 9],
// 		},
// 	},
// 	2019: {
// 		12: {
// 			29: [10, 11],
// 			30: [12, 13],
// 			31: [14, 15],
// 		}
// 	},
// }
// Запишите все элементы этого объекта в какой-нибудь массив, вот так:

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const taskContainer4 = document.querySelector(".task_7-6-4");

const subBtn3 = taskContainer4.querySelector("#subBtn");
let data = {
  2018: {
    11: {
      29: [1, 2, 3],
      30: [4, 5],
    },
    12: {
      30: [6, 7],
      31: [8, 9],
    },
  },
  2019: {
    12: {
      29: [10, 11],
      30: [12, 13],
      31: [14, 15],
    },
  },
};

let sum = 0;
subBtn3.addEventListener("click", () => {
  for (let year in data) {
    for (let month in data[year]) {
      for (let days in data[year][month]) {
        let subSum = data[year][month][days].reduce((sum, el) => sum + el, 0);
        sum += subSum;
      }
    }
  }
  console.log(sum);
});

// const sum1 = Object.values(data[2018][11][29]).reduce(
//     (sum, el) => sum + el,
//     0
//   );
//   const sum2 = Object.values(data[2018][11][30]).reduce(
//     (sum, el) => sum + el,
//     0
//   );
//   const sum3 = Object.values(data[2018][12][30]).reduce(
//     (sum, el) => sum + el,
//     0
//   );
//   const sum4 = Object.values(data[2018][12][31]).reduce(
//     (sum, el) => sum + el,
//     0
//   );
//   const sum5 = Object.values(data[2019][12][29]).reduce(
//     (sum, el) => sum + el,
//     0
//   );
//   const sum6 = Object.values(data[2019][12][30]).reduce(
//     (sum, el) => sum + el,
//     0
//   );
//   const sum7 = Object.values(data[2019][12][31]).reduce(
//     (sum, el) => sum + el,
//     0
//   );

//   const sum = sum1 + sum2 + sum3 + sum4 + sum5 + sum6 + sum7;
//   console.log(sum);
