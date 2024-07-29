// #1
// Дан абзац и кнопка. Пусть первое нажатие на кнопку красит абзац в красный цвет, а второе нажатие в зеленый.

const taskContainer1 = document.querySelector(".task_6-3-1");

const result = taskContainer1.querySelector("#result");
const subBtn = taskContainer1.querySelector("#subBtn");
const resultStyles = window.getComputedStyle(result);
subBtn.addEventListener("click", () => {
  if (result.style.color !== "red") {
    result.style.color = "red";
  } else {
    result.style.color = "green";
  }
});

// #2
// Дан список ul. По клику на любую li добавьте ей в конец ее порядковый номер в списке, но только один раз.

const taskContainer2 = document.querySelector(".task_6-3-2");

const list = taskContainer2.querySelector("#list");
const items = Array.from(taskContainer2.querySelectorAll(".items"));

items.forEach((item, i) => {
  item.addEventListener("click", () => {
    if (!item.textContent.includes(i + 1)) {
      item.textContent = item.textContent + " " + (i + 1);
    }
  });
});

// #3
// Дан список ul. По клику на любую li, если нажата клавиша Ctrl, удалите эту li из списка.

const taskContainer3 = document.querySelector(".task_6-3-3");

const items1 = taskContainer3.querySelectorAll(".items");
let keyPressed = {};

document.addEventListener("keydown", (event) => {
  keyPressed[event.key] = true;
  fn();
});

document.addEventListener("keyup", (event) => {
  keyPressed[event.key] = false;
});

const fn = () => {
  items1.forEach((item) => {
    item.addEventListener("click", () => {
      if (keyPressed["Meta"]) {
        item.remove();
      }
    });
  });
};

// #4
// Дан абзац с числом и кнопка. По нажатию на кнопку пусть число из абзаца каждую секунду увеличивается на единицу.

const taskContainer4 = document.querySelector(".task_6-3-4");

const result1 = taskContainer4.querySelector("#result");
const subBtn1 = taskContainer4.querySelector("#subBtn");

let intervalId = null;
subBtn1.addEventListener("click", () => {
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    let num = +result1.textContent;
    if (num < 10) {
      result1.textContent = ++num;
    } else {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 1000);
});

// #5
// Дан инпут и абзац. В инпут вводится дата. Определите, была уже дата в текущем году. Результат выведите в абзац.

const taskContainer5 = document.querySelector(".task_6-3-5");

const result2 = taskContainer5.querySelector("#result");
const inputDate = taskContainer5.querySelector("#inputDate");
const subBtn2 = taskContainer5.querySelector("#subBtn");

subBtn2.addEventListener("click", () => {
  if (!inputDate.value) {
    result2.textContent = "Please select a date.";
    return;
  }
  let currentDate = new Date();
  let givenDate = new Date(inputDate.value);

  currentDate.setHours(0, 0, 0, 0);
  givenDate.setHours(0, 0, 0, 0);

  let currentYear = currentDate.getFullYear();
  let givenYear = givenDate.getFullYear();
  console.log(givenYear);

  if (currentYear === givenYear) {
    if (currentDate >= givenDate) {
      result2.textContent = "The selected date has already occurred this year.";
    } else {
      result2.textContent = "The selected date is yet to come this year.";
    }
  } else {
    result2.textContent = "The selected date is not in the current year.";
  }
});

// const taskContainer3 = document.querySelector(".task_6-3-3");

// const items1 = taskContainer3.querySelectorAll(".items");
// let keyPressed = {};

// document.addEventListener("keydown", (event) => {
//   keyPressed[event.key] = true;
//   // console.log(event);
//   fn();
// });

// document.addEventListener("keyup", (event) => {
//   keyPressed[event.key] = false;
//   fn();
// });

// const fn = () => {
//   items1.forEach((item) => {
//     item.addEventListener("click", () => {
//       if (keyPressed["Meta"]) {
//         item.remove();
//       }
//     });
//   });
// };
