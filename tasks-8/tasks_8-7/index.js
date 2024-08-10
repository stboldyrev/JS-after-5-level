// #1
// Дано слово. Перемешайте буквы этого слова в случайном порядке.

const taskContainer1 = document.querySelector(".task_8-7-1");

const inputText = taskContainer1.querySelector("#inputText");
const subBtn = taskContainer1.querySelector("#subBtn");
const result = taskContainer1.querySelector("#result");

subBtn.addEventListener("click", () => {
  if (inputText.value === "") {
    console.log("Please provide information");
    return;
  }

  const value = inputText.value.trim().split("");

  result.textContent = value.sort(() => Math.random() - 0.5).join("");
});
// #2
// Дан инпут, кнопка и список ul. В инпут вводится число. По клику на кнопку выведите список всех возможных вариантов разложения числа на два множителя.

const taskContainer2 = document.querySelector(".task_8-7-2");

const inputNum = taskContainer2.querySelector("#inputNum");
const subBtn1 = taskContainer2.querySelector("#subBtn");
const list = taskContainer2.querySelector("#list");

subBtn1.addEventListener("click", () => {
  list.innerHTML = "";
  if (inputNum.value === "") {
    console.log("Please provide information");
    return;
  }

  const num = +inputNum.value;
  const arr = [];
  const set = new Set();
  const result = [];
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i * j === num) {
        arr.push([i, j]);
      }
    }
  }

  arr.forEach((el) => {
    const pair = el.sort((a, b) => a - b).toString();
    if (!set.has(pair)) {
      set.add(pair);
      result.push(pair);
    }
  });

  result.forEach((el) => {
    const li = document.createElement("li");
    li.textContent = el.split(",").join(", ");
    list.appendChild(li);
  });

  inputNum.value = "";
  console.log(result);
});

// #3
// На странице через абсолютное позиционирование расположены дивы, могущие накладываться друг на друга. По клику на любой див сделайте так, чтобы он стал поверх остальных.

const taskContainer3 = document.querySelector(".task_8-7-3");

const boxs = taskContainer3.querySelectorAll(".box");

let maxIndex = 1;

boxs.forEach((box) => {
  //   let currentIndex = +box.style.zIndex;
  //   if (currentIndex > maxIndex) {
  //     maxIndex = currentIndex;
  //   }
  box.addEventListener("click", () => {
    box.style.zIndex = maxIndex + 1;
    maxIndex += 1;
  });
});
// #4
// Выведите на экран следующую пирамидку:
// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1

const taskContainer4 = document.querySelector(".task_8-7-4");

const subBtn2 = taskContainer4.querySelector("#subBtn");

subBtn2.addEventListener("click", () => {
  const arr = [];
  for (let i = 1; i <= 9; i++) {
    const arr2 = [];
    for (let j = 0; j < i; j++) {
      arr2.push(i);
    }
    arr.push(arr2.join(""));
  }
  console.log(arr.reverse().join("\n"));
});

// #5
// Дан список событий за определенные даты, хранящийся в следующей структуре:
// let events = {
// 	'2019-12-29': ['name1', 'name3', 'name5', 'name7'],
// 	'2019-12-30': ['name4', 'name8', 'name9'],
// 	'2019-12-31': ['name2', 'name6'],
// }
// Напишите код, которой переделает структуру данных вот в такую:

// let events = [
// 	{
// 		date:  '2019-12-29'
// 		event: 'name1'
// 	},
// 	{
// 		date:  '2019-12-31'
// 		event: 'name2'
// 	},
// 	{
// 		date:  '2019-12-29'
// 		event: 'name3'
// 	},
// 	{
// 		date:  '2019-12-30'
// 		event: 'name4'
// 	},
// 	{
// 		date:  '2019-12-29'
// 		event: 'name5'
// 	},
// 	{
// 		date:  '2019-12-31'
// 		event: 'name6'
// 	},
// 	{
// 		date:  '2019-12-29'
// 		event: 'name7'
// 	},
// 	{
// 		date:  '2019-12-30'
// 		event: 'name8'
// 	},
// 	{
// 		date:  '2019-12-30'
// 		event: 'name9'
// 	},
// ]

const taskContainer5 = document.querySelector(".task_8-7-5");

const subBtn3 = taskContainer5.querySelector("#subBtn");

let events = {
  "2019-12-29": ["name1", "name3", "name5", "name7"],
  "2019-12-30": ["name4", "name8", "name9"],
  "2019-12-31": ["name2", "name6"],
};

subBtn3.addEventListener("click", () => {
  let newEvents = [];
  Object.keys(events).forEach((key) => {
    events[key].forEach((el) => {
      let obj = {
        date: key,
        event: el,
      };
      newEvents.push(obj);
    });
  });
  console.log(newEvents);
});
