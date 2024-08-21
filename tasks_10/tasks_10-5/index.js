// #1
// На странице юзер выделяет текст. По нажатию Ctrl + Enter запишите этот текст в буфер обмена.

function getSelectedText(...keys) {
  let pressed = new Set();

  document.addEventListener("keydown", (event) => {
    pressed.add(event.key);

    for (let key of keys) {
      if (!pressed.has(key)) {
        return;
      }
    }

    pressed.clear();

    const selection = window.getSelection();
    let range = selection.getRangeAt(0);

    if (!range) return;
    return selection.toString();
  });

  document.addEventListener("keyup", (event) => {
    pressed.delete(event.key);
  });
}

getSelectedText("Meta", "Enter");
// #2
// Дан текстареа. В него вводится текст. По нажатию клавиши Tab вставьте в место моргания курсора символ табуляции.

const taskContainer2 = document.querySelector(".task_10-5-2");

const textarea = taskContainer2.querySelector("textarea");

document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();

    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;

    textarea.value =
      textarea.value.substring(0, selectionStart) +
      "\t" +
      textarea.value.substring(selectionEnd);

    textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
  }
});

// #3
// Даны инпуты. В любой инпут можно ввести текст и нажать Enter. После этого текст из инпута исчезает. Сделайте так, чтобы каждый инпут запоминал введенные тексты. Над каждым инпутом разместите стрелочки, с помощью которых можно будет возвращать предыдущий введенный текст в инпут.

const taskContainer3 = document.querySelector(".task_10-5-3");
const inputContainers = taskContainer3.querySelectorAll(".input-container");

inputContainers.forEach((container) => {
  const input = container.querySelector(".text-input");
  const leftBtn = container.querySelector(".left-btn");
  const rightBtn = container.querySelector(".right-btn");

  let history = [];
  let currentIndex = -1;

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if (input.value.trim()) {
        history.push(input.value.trim());
        currentIndex = history.length;
        input.value = "";
      }
    }
  });

  leftBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      input.value = history[currentIndex];
    }
  });

  rightBtn.addEventListener("click", () => {
    if (currentIndex < history.length - 1) {
      currentIndex++;
      input.value = history[currentIndex];
    } else if (currentIndex === history.length - 1) {
      currentIndex++;
      input.value = "";
    }
  });
});
// #4
// Дано число. Выведите на экран процесс разложения числа на простые множители, как в школе.
// ??
// #5
// Дан многомерный объект произвольного уровня вложенности:

// {
// 	a: {
// 		b: {
// 			c: '+++'
// 		}
// 	},
// }
// Сделайте функцию, которая будет возвращать элементы объекта, параметром получая строку с ключами объекта, разделенными точками:
// func('a.b.c'); // вернет '+++'
const obj = {
  a: {
    b: {
      c: "+++",
    },
  },
};

function getValueByPath(path) {
  const keys = path.split(".");
  let current = obj;

  for (let key of keys) {
    if (current[key] === undefined) {
      return undefined;
    }
    current = current[key];
  }

  return current;
}

console.log(getValueByPath("a.b.c"));

// func('a.b.c'); // вернет '+++'
// #6
// Дана таблица. По нажатию на кнопку заполните ее следующим образом:

const taskContainer6 = document.querySelector(".task_10-5-6");
const table = taskContainer6.querySelector("#myTable");
const trs = table.querySelectorAll("tr");
const subBtn = taskContainer6.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  let savedIndex = 5;
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  trs.forEach((tr, i) => {
    const tds = tr.querySelectorAll("td");

    let currentValue = savedIndex - i;
    tds.forEach((td, cellIndex) => {
      td.textContent = currentValue + cellIndex;
    });
  });
});
