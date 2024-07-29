// #1
// Дан массив, инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац элемент массива, номер которого введен в инпут.

const taskContainer1 = document.querySelector(".task_6-6-1");

const inputNum = taskContainer1.querySelector("#inputNum");
const subBtn = taskContainer1.querySelector("#subBtn");
const result = taskContainer1.querySelector("#result");
const arr = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

subBtn.addEventListener("click", () => {
  const num = +inputNum.value;
  if (num <= arr.length && num >= 0) {
    result.textContent = arr[num];
  } else {
    result.textContent = "Value is out of arr range";
  }

  inputNum.value = "";
});

// #2
// Дан абзац, кнопка и массив с цветами. Пусть нажатие на кнопку красит абзац в случайный цвет из массива.

const taskContainer2 = document.querySelector(".task_6-6-2");

const paragraph = taskContainer2.querySelector("#paragraph");
const subBtn1 = taskContainer2.querySelector("#subBtn");
const colors = ["red", "blue", "green", "pink", "brown", "black", "grey"];
subBtn1.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * colors.length);
  paragraph.style.color = colors[randomNum];
});

// #3
// Дана таблица, кнопка и массив с цветами. Пусть нажатие на любую ячейку красит ее в случайный цвет из массива цветов.

const taskContainer3 = document.querySelector(".task_6-6-3");

const tds = taskContainer3.querySelectorAll("td");
const subBtn2 = taskContainer3.querySelector("#subBtn");
const colors1 = ["red", "blue", "green", "pink", "brown", "black", "grey"];

tds.forEach((td) => {
  td.style.border = "1px solid white";
  td.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * colors1.length);
    td.style.backgroundColor = colors1[randomNum];
  });
});
// #4
// Дан текстареа и див. В текстареа вводится текст. Сделайте так, чтобы по нажатию Shift + Enter этот текст добавился в див.

const taskContainer4 = document.querySelector(".task_6-6-4");

const textArea = taskContainer4.querySelector("#textArea");
const result1 = taskContainer4.querySelector("#result");
let keyPressed = {};
document.addEventListener("keydown", (event) => {
  keyPressed[event.key] = true;
  console.log("Current keyPressed:", keyPressed);

  if (event.shiftKey && event.key === "Enter") {
    fn();
  }
});

document.addEventListener("keyup", (event) => {
  keyPressed[event.key] = false;
  //   console.log(
  //     "Key released:",
  //     event.key,
  //     "Meta:",
  //     keyPressed["Meta"],
  //     "x:",
  //     keyPressed["x"]
  //   );
});

const fn = () => {
  result1.textContent = textArea.value;
};
