// #1
// Дан инпут, кнопка и три абзаца. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в первый абзац год, во второй абзац - месяц, в третий день.
const taskContainer1 = document.querySelector(".task_5-5-1");
const inputDate = taskContainer1.querySelector("#inputDate");
const year = taskContainer1.querySelector("#year");
const month = taskContainer1.querySelector("#month");
const day = taskContainer1.querySelector("#day");
const subBtn1 = taskContainer1.querySelector("#subBtn1");

subBtn1.addEventListener("click", function () {
  const dateStr = inputDate.value.trim();
  if (dateStr.length === 10 && dateStr.includes("-")) {
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      year.textContent = `Год: ${parts[0]}`;
      month.textContent = `Месяц: ${parts[1]}`;
      day.textContent = `День: ${parts[2]}`;
    }
  }
});

// #2
// Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку заполните массив целыми числами от первого введеного числа до последнего.
const taskContainer2 = document.querySelector(".task_5-5-2");
const inputNum1 = taskContainer2.querySelector("#inputNum1");
const inputNum2 = taskContainer2.querySelector("#inputNum2");
const result2 = taskContainer2.querySelector("#result2");
const subBtn2 = taskContainer2.querySelector("#subBtn2");

subBtn2.addEventListener("click", function () {
  const num1 = parseInt(inputNum1.value);
  const num2 = parseInt(inputNum2.value);
  if (!isNaN(num1) && !isNaN(num2)) {
    const numbers = [];
    for (let i = num1; i <= num2; i++) {
      numbers.push(i);
    }
    result2.textContent = JSON.stringify(numbers);
  }
});

// #3
// Дан инпут, абзац и кнопка. В инпут вводится строка. По нажатию на кнопку выведите в абзац последний символ введенной строки.
const taskContainer3 = document.querySelector(".task_5-5-3");
const inputStr = taskContainer3.querySelector("#inputStr");
const result3 = taskContainer3.querySelector("#result3");
const subBtn3 = taskContainer3.querySelector("#subBtn3");

subBtn3.addEventListener("click", function () {
  const str = inputStr.value.trim();
  if (str.length > 0) {
    result3.textContent = `Последний символ: ${str.charAt(str.length - 1)}`;
  }
});

// #4
// Дан абзац, в котором записано число 1. По нажатию на кнопку увеличивайте число в абзаце на единицу.
const taskContainer4 = document.querySelector(".task_5-5-4");
const number = taskContainer4.querySelector("#number");
const subBtn4 = taskContainer4.querySelector("#subBtn4");

subBtn4.addEventListener("click", function () {
  let currentNumber = parseInt(number.textContent);
  number.textContent = currentNumber + 1;
});

// #5
// Дан инпут и абзац. В инпут вводится строка со словами. По потери фокуса выведите в абзац количество слов во введенной строке.
const taskContainer5 = document.querySelector(".task_5-5-5");
const inputWords = taskContainer5.querySelector("#inputWords");
const result5 = taskContainer5.querySelector("#result5");

inputWords.addEventListener("blur", function () {
  const words = inputWords.value
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  result5.textContent = `Количество слов: ${words.length}`;
});
