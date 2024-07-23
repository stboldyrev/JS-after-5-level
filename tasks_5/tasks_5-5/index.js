// #1
// Дан инпут, кнопка и три абзаца. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в первый абзац год, во второй абзац - месяц, в третий день.

const taskContainer1 = document.querySelector(".task_5-5-1");

const inputDate = taskContainer1.querySelector("#inputDate");
const subBtn = taskContainer1.querySelector("#subBtn");
const paragraphYear = taskContainer1.querySelector("#paragraphYear");
const paragraphMonth = taskContainer1.querySelector("#paragraphMonth");
const paragraphDay = taskContainer1.querySelector("#paragraphDay");

subBtn.addEventListener("click", function () {
  let arrDate = inputDate.value.split("-");
  paragraphYear.textContent = arrDate[0];
  paragraphMonth.textContent = arrDate[1];
  paragraphDay.textContent = arrDate[2];
});
// #2
// Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку заполните массив целыми числами от первого введеного числа до последнего.
const taskContainer2 = document.querySelector(".task_5-5-2");

const inputNumFirst = taskContainer2.querySelector("#inputNumFirst");
const inputNumLast = taskContainer2.querySelector("#inputNumLast");
const subBtn1 = taskContainer2.querySelector("#subBtn");

subBtn1.addEventListener("click", function () {
  const firstNum = +inputNumFirst.value;
  const lastNum = +inputNumLast.value;
  let arr = [];
  for (let i = firstNum; i <= lastNum; i++) {
    arr.push(i);
  }
  console.log(arr);
});

// #3
// Дан инпут, абзац и кнопка. В инпут вводится строка. По нажатию на кнопку выведите в абзац последний символ введенной строки.

const taskContainer3 = document.querySelector(".task_5-5-3");

const inputText = taskContainer3.querySelector("#inputText");
const subBtn2 = taskContainer3.querySelector("#subBtn");
const result = taskContainer3.querySelector("#result");
subBtn2.addEventListener("click", function () {
  const text = inputText.value;
  result.textContent = text[text.length - 1];
});

// #4
// Дан абзац, в котором записано число 1. По нажатию на кнопку увеличивайте число в абзаце на единицу.
const taskContainer4 = document.querySelector(".task_5-5-4");

const paragraph = taskContainer4.querySelector("#paragraph");
const subBtn3 = taskContainer4.querySelector("#subBtn");
subBtn3.addEventListener("click", function () {
  paragraph.textContent = +paragraph.textContent + 1;
});
// #5
// Дан инпут и абзац. В инпут вводится строка со словами. По потери фокуса выведите в абзац количество слов во введенной строке.

const taskContainer5 = document.querySelector(".task_5-5-5");

const inputText1 = taskContainer5.querySelector("#inputText");
const result1 = taskContainer5.querySelector("#result");

inputText1.addEventListener("blur", function () {
  let arr = inputText1.value.split(" ");
  result1.textContent = arr.length;
});
