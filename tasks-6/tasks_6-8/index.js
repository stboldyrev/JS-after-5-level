// #1
// Дана таблица. По клику на ячейку, если нажата клавиша Shift, красьте ячейку в красный цвет, а если клавиша Ctrl, то в зеленый.

const taskContainer1 = document.querySelector(".task_6-8-1");

const myTable = taskContainer1.querySelector("#myTable");
const tds = taskContainer1.querySelectorAll("td");
let keyPressed = {};
document.addEventListener("keydown", (event) => {
  keyPressed[event.key] = true;
  fn();
});

document.addEventListener("keyup", (event) => {
  keyPressed[event.key] = false;
});

tds.forEach((td) => {
  td.style.border = "1px solid black";
  td.style.width = "200px";
  td.style.height = "200px";
  td.style.textAlign = "center";
});
const fn = () => {
  tds.forEach((td) => {
    td.addEventListener("click", () => {
      if (keyPressed["Meta"]) {
        td.style.backgroundColor = "red";
      } else if (keyPressed["x"]) {
        td.style.backgroundColor = "green";
      }
    });
  });

  //   myTable.addEventListener("click", (event) => {
  //     if (event.target.tagName === "TD") {
  //       if (keyPressed["Meta"]) {
  //         event.target.style.backgroundColor = "red";
  //       } else if (keyPressed["x"]) {
  //         event.target.style.backgroundColor = "green";
  //       }
  //     }
  //   });
};
// #2
// Дан див и кнопка. По первому клику на кнопку покажите див, а по второму клику - спрячьте.

const taskContainer2 = document.querySelector(".task_6-8-2");

const result = taskContainer2.querySelector("#result");
const subBtn = taskContainer2.querySelector("#subBtn");
result.style.display = "none";
subBtn.addEventListener("click", () => {
  result.style.display !== "none"
    ? (result.style.display = "none")
    : (result.style.display = ""); // (result.style.display = "block")
});
