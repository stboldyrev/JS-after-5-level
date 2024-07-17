// #1
// Дан массив с числами, кнопка и инпут. По нажатию на кнопку запишите в инпут все числа из массива, разделив их запятыми.
const taskContainer1 = document.querySelector(".task_5-9-1");
const showNumbersBtn = taskContainer1.querySelector("#showNumbersBtn");
const numbersInput = taskContainer1.querySelector("#numbersInput");

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Пример массива чисел

showNumbersBtn.addEventListener("click", function () {
  numbersInput.value = numbersArray.join(", ");
});

// #2
// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в красный цвет.
const taskContainer2 = document.querySelector(".task_5-9-2");
const paragraphs = taskContainer2.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("click", function () {
    paragraph.style.color = "red";
  });
});

// #3
// Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.
const taskContainer3 = document.querySelector(".task_5-9-3");
const numberInput = taskContainer3.querySelector("#numberInput");

numberInput.addEventListener("blur", function () {
  const num = +numberInput.value;
  if (num % 2 === 0) {
    numberInput.style.border = "2px solid green";
  } else {
    numberInput.style.border = "2px solid red";
  }
});

// #4
// В инпут вводится дата в формате 2025-12-31. По потери фокуса сделайте так, чтобы в инпуте стала дата в формате 31.12.25.
const taskContainer4 = document.querySelector(".task_5-9-4");
const dateInput = taskContainer4.querySelector("#dateInput");

dateInput.addEventListener("blur", function () {
  const inputDate = dateInput.value.trim();
  if (inputDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const parts = inputDate.split("-");
    const formattedDate = `${parts[2]}.${parts[1]}.${parts[0].slice(2)}`;
    dateInput.value = formattedDate;
  }
});

// #5
// Дан пустой список ul и текстареа. В него вводится текст со знаками препинания. По потери фокуса запишите каждое предложение из текста в свой тег li.
const taskContainer5 = document.querySelector(".task_5-9-5");
const textInput = taskContainer5.querySelector("#textInput");
const sentencesList = taskContainer5.querySelector("#sentencesList");

textInput.addEventListener("blur", function () {
  const text = textInput.value.trim();
  const sentences = text
    .split(/[.!?]+/)
    .filter((sentence) => sentence.trim() !== "");

  sentences.forEach((sentence) => {
    const li = document.createElement("li");
    li.textContent = sentence.trim();
    sentencesList.appendChild(li);
  });
});
