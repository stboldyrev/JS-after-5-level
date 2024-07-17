// #1
// Даны инпуты. В них вводятся числа. Сделайте так, чтобы при потери фокуса в любом из инпутов в нем появлялся квадрат введенного в него числа.
const taskContainer1 = document.querySelector(".task_5-8-1");
const numberInputs = taskContainer1.querySelectorAll(".numberInp");

numberInputs.forEach((input) => {
  input.addEventListener("blur", function () {
    const num = +input.value;
    input.value = num ** 2;
  });
});

// #2
// Дан массив, кнопка и инпут. Сделайте так, чтобы по клику на кнопку в инпут выводился случайный элемент массива.
const taskContainer2 = document.querySelector(".task_5-8-2");
const randomBtn = taskContainer2.querySelector("#randomBtn");
const randomInput = taskContainer2.querySelector("#randomInput");

const array = ["apple", "banana", "cherry", "date", "elderberry"];

randomBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * array.length);
  randomInput.value = array[randomIndex];
});

// #3
// Дан инпут и абзац. В него через запятую вводятся числа. По потери фокуса найдите сумму введенных чисел и выведите ее в абзац.
const taskContainer3 = document.querySelector(".task_5-8-3");
const numbersInput = taskContainer3.querySelector("#numbersInput");
const sumBtn = taskContainer3.querySelector("#sumBtn");
const sumResult = taskContainer3.querySelector("#sumResult");

sumBtn.addEventListener("click", function () {
  const numbersArray = numbersInput.value.split(",").map((num) => +num.trim());
  const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
  sumResult.textContent = `Сумма чисел: ${sum}`;
});

// #4
// Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку получите массив общих делителей этих чисел и выведите его в консоль.
const taskContainer4 = document.querySelector(".task_5-8-4");
const inputNum1 = taskContainer4.querySelector("#inputNum1");
const inputNum2 = taskContainer4.querySelector("#inputNum2");
const commonDivisorsBtn = taskContainer4.querySelector("#commonDivisorsBtn");

commonDivisorsBtn.addEventListener("click", function () {
  const num1 = +inputNum1.value;
  const num2 = +inputNum2.value;
  const divisors = [];

  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisors.push(i);
    }
  }

  console.log("Общие делители:", divisors);
});

// #5
// Дан инпут и кнопка. В инпут через запятую вводятся числа. По нажатию на кнопку проверьте, есть ли среди введенных число 13.
const taskContainer5 = document.querySelector(".task_5-8-5");
const numbersToCheck = taskContainer5.querySelector("#numbersToCheck");
const checkNumberBtn = taskContainer5.querySelector("#checkNumberBtn");
const checkResult = taskContainer5.querySelector("#checkResult");

checkNumberBtn.addEventListener("click", function () {
  const numbersArray = numbersToCheck.value
    .split(",")
    .map((num) => +num.trim());
  if (numbersArray.includes(13)) {
    checkResult.textContent = "Число 13 найдено!";
  } else {
    checkResult.textContent = "Число 13 не найдено.";
  }
});

// #6
// Дан инпут и кнопка. В него вводится число из шести цифр. По клику на кнопку проверьте, что число представляет собой счастливый билет, то есть сумма первых трех цифр равна сумме вторых трех цифр.
const taskContainer6 = document.querySelector(".task_5-8-6");
const ticketNumber = taskContainer6.querySelector("#ticketNumber");
const checkTicketBtn = taskContainer6.querySelector("#checkTicketBtn");
const ticketResult = taskContainer6.querySelector("#ticketResult");

checkTicketBtn.addEventListener("click", function () {
  const number = ticketNumber.value.trim();
  if (number.length !== 6 || isNaN(number)) {
    ticketResult.textContent = "Введите корректное число из 6 цифр.";
    return;
  }

  const firstThree =
    parseInt(number[0]) + parseInt(number[1]) + parseInt(number[2]);
  const lastThree =
    parseInt(number[3]) + parseInt(number[4]) + parseInt(number[5]);

  if (firstThree === lastThree) {
    ticketResult.textContent = "Это счастливый билет!";
  } else {
    ticketResult.textContent = "Это не счастливый билет.";
  }
});
