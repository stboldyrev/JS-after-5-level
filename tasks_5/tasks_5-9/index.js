// #1
// Дан массив с числами, кнопка и инпут. По нажатию на кнопку запишите в инпут все числа из массива, разделив их запятыми.

const taskContainer1 = document.querySelector(".task_5-9-1");

const inputArr = taskContainer1.querySelector("#inputArr");
const subBtn = taskContainer1.querySelector("#subBtn");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

subBtn.addEventListener("click", function () {
  inputArr.value = arr.join(",");
});
// #2
// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в красный цвет.

const taskContainer2 = document.querySelector(".task_5-9-2");

const paragraphs = taskContainer2.querySelectorAll(".paragraphs");

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("click", () => {
    paragraph.style.color = "red";
  });
});
// #3
// Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.

const taskContainer3 = document.querySelector(".task_5-9-3");

const inputNum = taskContainer3.querySelector("#inputNum");

inputNum.addEventListener("change", () => {
  const value = inputNum.value.trim();
  if (value === "") {
    inputNum.style.borderColor = "";
  } else {
    const num = +value;
    if (num % 2 === 0) {
      inputNum.style.borderColor = "green";
    }
    if (num % 2 !== 0) {
      inputNum.style.borderColor = "red";
    }
  }
});
// #4
// В инпут вводится дата в формате 2025-12-31. По потери фокуса сделайте так, чтобы в инпуте стала дата в формате 31.12.25.

const taskContainer4 = document.querySelector(".task_5-9-4");

const inputDate = taskContainer4.querySelector("#inputDate");

inputDate.addEventListener("blur", () => {
  const dateValue = inputDate.value;
  if (dateValue && dateValue.includes("-")) {
    let arrDate = inputDate.value.split("-"); // 2025-12-31
    let objDate = {
      year: arrDate[0].slice(-2),
      month: arrDate[1],
      day: arrDate[2],
    };

    inputDate.value = [objDate.day, objDate.month, objDate.year].join(".");
  } else {
    inputDate.value = "Incorrenct value";
  }
});

// #5
// Дан пустой список ul и текстареа. В него вводится текст со знаками препинания. По потери фокуса запишите каждое предложение из текста в свой тег li.

const taskContainer5 = document.querySelector(".task_5-9-5");

const emptyUl = taskContainer5.querySelector("#emptyUl");
const textArea = taskContainer5.querySelector("#textArea");

textArea.addEventListener("blur", () => {
  const sentences = textArea.value.trim().split(/(?<=[.!?])\s+/);
  emptyUl.innerHTML = "";
  for (let i = 0; i < sentences.length; i++) {
    let newLi = document.createElement("li");
    newLi.textContent = sentences[i];
    emptyUl.appendChild(newLi);
  }
});
