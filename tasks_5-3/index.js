// #1
// Дан абзац, инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал введенного числа.
const taskContainer1 = document.querySelector(".task_5-3-1");
const input1 = taskContainer1.querySelector("#input1");
const result1 = taskContainer1.querySelector("#result1");
const subBtn1 = taskContainer1.querySelector("#subBtn1");

subBtn1.addEventListener("click", function () {
  const num = +input1.value;
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  result1.textContent = `Factorial of ${num} is ${factorial}`;
});

// #2
// Даны два инпута, кнопка и абзац. В инпуты вводятся целые числа. Определите, какое из введенных чисел больше и выведите его в абзац.
const taskContainer2 = document.querySelector(".task_5-3-2");
const input2_1 = taskContainer2.querySelector("#input2_1");
const input2_2 = taskContainer2.querySelector("#input2_2");
const result2 = taskContainer2.querySelector("#result2");
const subBtn2 = taskContainer2.querySelector("#subBtn2");

subBtn2.addEventListener("click", function () {
  const num1 = +input2_1.value;
  const num2 = +input2_2.value;
  if (num1 > num2) {
    result2.textContent = `${num1} is greater than ${num2}`;
  } else if (num2 > num1) {
    result2.textContent = `${num2} is greater than ${num1}`;
  } else {
    result2.textContent = `${num1} and ${num2} are equal`;
  }
});

// #3
// Дана кнопка и инпут. В инпут вводится число. По нажатию на кнопку найдите сумму цифр введеного числа.
const taskContainer3 = document.querySelector(".task_5-3-3");
const input3 = taskContainer3.querySelector("#input3");
const result3 = taskContainer3.querySelector("#result3");
const subBtn3 = taskContainer3.querySelector("#subBtn3");

subBtn3.addEventListener("click", function () {
  const numStr = input3.value;
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    sum += +numStr[i];
  }
  result3.textContent = `Sum of digits in ${numStr} is ${sum}`;
});

// #4
// Дан абзац, инпут и кнопка. В инпут вводится слово. По нажатию на кнопку переверните слово и запишите его в абзац.
const taskContainer4 = document.querySelector(".task_5-3-4");
const input4 = taskContainer4.querySelector("#input4");
const result4 = taskContainer4.querySelector("#result4");
const subBtn4 = taskContainer4.querySelector("#subBtn4");

subBtn4.addEventListener("click", function () {
  const word = input4.value;
  const reversedWord = word.split("").reverse().join("");
  result4.textContent = `Reversed word: ${reversedWord}`;
});

// #5
// Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.
const taskContainer5 = document.querySelector(".task_5-3-5");
const paragraphs5 = taskContainer5.querySelectorAll("p");
const subBtn5 = taskContainer5.querySelector("#subBtn5");

subBtn5.addEventListener("click", function () {
  paragraphs5.forEach((paragraph, index) => {
    paragraph.textContent = index + 1;
  });
});

// #6
// Дан инпут, абзац и кнопка. В инпут вводится число. По клику на кнопку выведите в абзац факториал этого числа.
const taskContainer6 = document.querySelector(".task_5-3-6");
const input6 = taskContainer6.querySelector("#input6");
const result6 = taskContainer6.querySelector("#result6");
const subBtn6 = taskContainer6.querySelector("#subBtn6");

subBtn6.addEventListener("click", function () {
  const num = +input6.value;
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  result6.textContent = `Factorial of ${num} is ${factorial}`;
});
