// #1
// Дан абзац, инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал введенного числа.

const taskContainer1 = document.querySelector(".task_5-3-1");

const result = taskContainer1.querySelector("#result");
const inputNum = taskContainer1.querySelector("#inputNum");
const subBtn = taskContainer1.querySelector("#subBtn");

subBtn.addEventListener("click", function () {
  const num = inputNum.value;
  let count = 1;
  for (let i = 1; i <= num; i++) {
    count *= i;
  }

  result.textContent = count;
});
// #2
// Даны два инпута, кнопка и абзац. В инпуты вводятся целые числа. Определите, какое из введенных чисел больше и выведите его в абзац.

const taskContainer2 = document.querySelector(".task_5-3-2");

const result1 = taskContainer2.querySelector("#result");
const subBtn1 = taskContainer2.querySelector("#subBtn");
const inputNum1 = taskContainer2.querySelector("#inputNum1");
const inputNum2 = taskContainer2.querySelector("#inputNum2");

subBtn1.addEventListener("click", function () {
  const num1 = +inputNum1.value;
  const num2 = +inputNum2.value;
  if (num1 > num2) {
    result1.textContent = num1;
  } else if (num2 > num1) {
    result1.textContent = num2;
  } else {
    result1.textContent = `Numbers are the same`;
  }
});

// #3
// Дана кнопка и инпут. В инпут вводится число. По нажатию на кнопку найдите сумму цифр введеного числа.

const taskContainer3 = document.querySelector(".task_5-3-3");
const result2 = taskContainer3.querySelector("#result");
const subBtn2 = taskContainer3.querySelector("#subBtn");
const inputNumber = taskContainer3.querySelector("#inputNumber");

subBtn2.addEventListener("click", function () {
  const num = inputNumber.value;
  result2.textContent = num.split("").reduce((sum, el) => sum + +el, 0);
});
// #4
// Дан абзац, инпут и кнопка. В инпут вводится слово. По нажатию на кнопку переверните слово и запишите его в абзац.
const taskContainer4 = document.querySelector(".task_5-3-4");
const result3 = taskContainer4.querySelector("#result");
const subBtn3 = taskContainer4.querySelector("#subBtn");
const inputText = taskContainer4.querySelector("#inputText");

subBtn3.addEventListener("click", function () {
  const word = inputText.value.trim();
  result3.textContent = word.split("").reverse().join("");
});
// #5
// Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.
const taskContainer5 = document.querySelector(".task_5-3-5");
const subBtn4 = taskContainer5.querySelector("#subBtn");
const paragraphs = taskContainer5.querySelectorAll("p");

subBtn4.addEventListener("click", function () {
  let count = 1;
  paragraphs.forEach((el) => {
    el.textContent = count;
    count++;
  });
  // paragraphs.forEach((el, i) => {
  //   el.textContent = i + 1;
  // });
});
// #6
// Дан инпут, абзац и кнопка. В инпут вводится число. По клику на кнопку выведите в абзац факториал этого числа.

const taskContainer6 = document.querySelector(".task_5-3-6");

const result4 = taskContainer6.querySelector("#result");
const inputNumber1 = taskContainer6.querySelector("#inputNumber");
const subBtn5 = taskContainer6.querySelector("#subBtn");

subBtn5.addEventListener("click", function () {
  const num = inputNumber1.value;
  let count = 1;
  for (let i = 1; i <= num; i++) {
    count *= i;
  }

  result4.textContent = count;
});
