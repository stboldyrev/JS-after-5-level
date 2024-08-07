// #1
// Даны инпуты. В них вводятся числа. Сделайте так, чтобы при потери фокуса в любом из инпутов в нем появлялся квадрат введенного в него числа.

const taskContainer1 = document.querySelector(".task_5-8-1");

const inputNum = taskContainer1.querySelectorAll(".inputNum");

inputNum.forEach((input) => {
  input.addEventListener("blur", () => {
    input.value = input.value ** 2;
  });
});

// #2
// Дан массив, кнопка и инпут. Сделайте так, чтобы по клику на кнопку в инпут выводился случайный элемент массива.

const taskContainer2 = document.querySelector(".task_5-8-2");

const inputResult = taskContainer2.querySelector("#inputResult");
const subBtn = taskContainer2.querySelector("#subBtn");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
subBtn.addEventListener("click", () => {
  inputResult.value = arr[Math.floor(Math.random() * arr.length)];
});
// #3
// Дан инпут и абзац. В него через запятую вводятся числа. По потери фокуса найдите сумму введенных чисел и выведите ее в абзац.

const taskContainer3 = document.querySelector(".task_5-8-3");

const inputNum1 = taskContainer3.querySelector("#inputNum");
const result = taskContainer3.querySelector("#result");

inputNum1.addEventListener("blur", () => {
  result.textContent = inputNum1.value
    .split(",")
    .reduce((sum, el) => sum + +el, 0);
});
// #4
// Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку получите массив общих делителей этих чисел и выведите его в консоль.

const taskContainer4 = document.querySelector(".task_5-8-4");

const inputNumber1 = taskContainer4.querySelector("#inputNumber1");
const inputNumber2 = taskContainer4.querySelector("#inputNumber2");
const subBtn1 = taskContainer4.querySelector("#subBtn");

subBtn1.addEventListener("click", () => {
  const num1 = +inputNumber1.value;
  const num2 = +inputNumber2.value;
  let arr1 = [];
  let arr2 = [];

  let arrMain = [];
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      arr1.push(i);
    }
  }
  for (let i = 1; i <= num2; i++) {
    if (num2 % i === 0) {
      arr2.push(i);
    }
  }

  if (arr1.length >= arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1.includes(arr2[i])) {
        arrMain.push(arr2[i]);
      }
    }
  } else {
    for (let i = 0; i < arr2.length; i++) {
      if (arr2.includes(arr1[i])) {
        arrMain.push(arr1[i]);
      }
    }
  }
  console.log(arrMain);
});
// #5
// Дан инпут и кнопка. В инпут через запятую вводятся числа. По нажатию на кнопку проверьте, есть ли среди введенных число 13.
const taskContainer5 = document.querySelector(".task_5-8-5");

const inputNum2 = taskContainer5.querySelector("#inputNum");
const subBtn2 = taskContainer5.querySelector("#subBtn");

subBtn2.addEventListener("click", () => {
  let arr = inputNum2.value.split(",").map((num) => +num.trim());
  console.log(arr);
  arr.includes(13)
    ? console.log("Input includes 13")
    : console.log("Input does NOT include 13");
});
// #6
// Дан инпут и кнопка. В него вводится число из шести цифр. По клику на кнопку проверьте, что число представляет собой счастливый билет, то есть сумма первых трех цифр равна сумме вторых трех цифр.

const taskContainer6 = document.querySelector(".task_5-8-6");

const inputNum3 = taskContainer6.querySelector("#inputNum");
const subBtn3 = taskContainer6.querySelector("#subBtn");
const result1 = taskContainer6.querySelector("#result");

subBtn3.addEventListener("click", () => {
  let arrNum = inputNum3.value.split("");
  let count1 = 0;
  let count2 = 0;
  if (arrNum.length !== 6) {
    result1.textContent = "Number has less or more than 6 digits";
  } else {
    for (let i = 0; i < arrNum.length; i++) {
      if (i < 3) {
        count1 += +arrNum[i];
      } else {
        count2 += +arrNum[i];
      }
    }
    count1 === count2
      ? (result1.textContent = "Sum is equal")
      : (result1.textContent = "Sum is NOT equal");
  }
});
