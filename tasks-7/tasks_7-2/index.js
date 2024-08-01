// #1
// Дан список ul с числами, инпут и кнопка. В инпут вводится число. По клику на кнопку покрасьте в красный цвет li, содержащее введенное число.

const taskContainer1 = document.querySelector(".task_7-2-1");

const items = taskContainer1.querySelectorAll(".items");
const inputNum = taskContainer1.querySelector("#inputNum");
const subBtn = taskContainer1.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  if (inputNum.value === "") {
    console.log("Nothing was written");
    return;
  }

  const value = +inputNum.value;
  items.forEach((item) => {
    if (value === +item.textContent.trim()) {
      item.style.color = "red";
    }
  });
  inputNum.value = "";
});
// #2
// Дан инпут. В него вводится год. Выведите даты всех пятниц 13-е заданного года в виде списка ul.

const taskContainer2 = document.querySelector(".task_7-2-2");

const list = taskContainer2.querySelector("#list");
const inputYear = taskContainer2.querySelector("#inputYear");
const subBtn1 = taskContainer2.querySelector("#subBtn");

subBtn1.addEventListener("click", () => {
  list.innerHTML = "";
  if (+inputYear.value.length !== 4) {
    console.log("Invalid year");
    return;
  }
  const yearValue = +inputYear.value;

  for (let month = 0; month < 12; month++) {
    const date = new Date(Date.UTC(yearValue, month, 13));
    if (date.getDay() === 5) {
      const li = document.createElement("li");
      li.textContent = date.toISOString().split("T")[0];
      list.appendChild(li);
    }
  }
  inputYear.value = "";
});

// #3
// Даны чекбоксы, с помощью которых у юзера спрашиваются языки, которые он знает. Дан также абзац. По мере выбора чекбоксов юзером выводите в абзац выбранные языки через запятую.

const taskContainer3 = document.querySelector(".task_7-2-3");

const result = taskContainer3.querySelector("#result");
const lang = taskContainer3.querySelectorAll(".lang");

let arr = [];
lang.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      arr.push(input.name);
    } else {
      if (arr.includes(input.name)) {
        let index = arr.indexOf(input.name);
        arr.splice(index, 1);
      }
    }
    result.textContent = arr.join(", ");
  });
});

// lang.forEach((input) => {
//   input.addEventListener("change", () => {
//     let arr = Array.from(lang)
//       .filter((el) => el.checked)
//       .map((el) => el.name);
//     result.textContent = arr.join(", ");
//   });
// });

// #4
// Напишите программу, которая сформирует следующий массив:
// [
// 	['x'],
// 	['x', 'x'],
// 	['x', 'x', 'x'],
// 	['x', 'x', 'x', 'x'],
// 	['x', 'x', 'x', 'x', 'x'],
// ]

const taskContainer4 = document.querySelector(".task_7-2-4");

const subBtn2 = taskContainer4.querySelector("#subBtn");

subBtn2.addEventListener("click", () => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    let arr2 = [];

    for (let j = 0; j < i + 1; j++) {
      arr2.push("x");
    }

    arr.push(arr2);
  }
  console.log(arr);
});
// #5
// Дан следующая верстка:
// <p>111</p>
// <p>222</p>
// <p>333</p>
// <p>444</p>
// <p>555</p>
// Получите содержимое текстов абзацев в виде массива:

// [
// 	'111',
// 	'222',
// 	'333',
// 	'444',
// 	'555',
// ]

const taskContainer5 = document.querySelector(".task_7-2-5");

const p = Array.from(taskContainer5.getElementsByTagName("p"));

const arr1 = p.map((el) => el.textContent);
console.log(arr1);
