// #1
// Сделайте инпут, в который можно ввести только числа. Остальные символы не должны вводится в инпут.

const taskContainer1 = document.querySelector(".task_10-3-1");
const inputTask1 = taskContainer1.querySelector("input");

inputTask1.addEventListener("input", () => {
  inputTask1.value = inputTask1.value.replace(/[^0-9]/g, "");
});

// #2
// Дан блок. По клику на блок покажите всплывающую подсказку с некоторым достаточно длинным текстом. Покажите подсказку или сверху или снизу с учетом того, чтобы она целиком поместилась на экране и не ушла под прокрутку.

const taskContainer2 = document.querySelector(".task_10-3-2");
const subBtn = taskContainer2.querySelector("#subBtn");
const tooltip = taskContainer2.querySelector("#tooltip");
let isVisible = false;
subBtn.addEventListener("click", () => {
  isVisible = !isVisible;

  if (isVisible) {
    tooltip.classList.add("show");
  } else {
    tooltip.classList.remove("show");
  }
});
// #3
// Дан массив из шести цифр. Проверьте, можно ли собрать из этих цифр счастливый билет.

const taskContainer3 = document.querySelector(".task_10-3-3");
const subBtn1 = taskContainer3.querySelector("#subBtn");

subBtn1.addEventListener("click", () => {
  const arrLuckyTicket = [1, 1, 1, 2, 1, 0];
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < arrLuckyTicket.length; i++) {
    if (i < 3) {
      count1 += +arrLuckyTicket[i];
    } else {
      count2 += +arrLuckyTicket[i];
    }
  }
  count1 === count2
    ? console.log("Sum is equal")
    : console.log("Sum is NOT equal");
});

// #4
// Дана прямоугольная таблица. По нажатию на кнопку покрасьте ячейки одной диагонали в красный цвет, а второй диагонали - в зеленый.

const taskContainer4 = document.querySelector(".task_10-3-4");
const table = taskContainer4.querySelector("#myTable");
const trs = table.querySelectorAll("tr");
const subBtn2 = taskContainer4.querySelector("#subBtn");

subBtn2.addEventListener("click", () => {
  let counter = 0;
  trs.forEach((tr) => {
    const tds = tr.querySelectorAll("td");

    for (let i = 0; i < tds.length - counter; i++) {
      tds[i].style.backgroundColor = "red";
    }
    counter++;
  });
  trs.forEach((tr) => {
    const tds = tr.querySelectorAll("td");

    tds.forEach((td) => {
      if (td.style.backgroundColor !== "red") {
        td.style.backgroundColor = "green";
      }
    });
  });
});
// #5
// Напишите код, который будет генерировать пароль заданного размера. Пароль обязательно должен будет содержать маленькую и большую буквы, цифру и какой-то специальный символ.

const taskContainer5 = document.querySelector(".task_10-3-5");
const subBtn3 = taskContainer5.querySelector("#subBtn");
const inputNumLength = taskContainer5.querySelector("#inputNumLength");
const result = taskContainer5.querySelector("#result");

subBtn3.addEventListener("click", () => {
  if (inputNumLength.value === "") {
    console.log("Please provide some num");
    return;
  }
  const value = inputNumLength.value;

  function generatePassword(passwordLength) {
    const numberChars = "0123456789";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const symbolChars = "!@#$%^&*()_+";
    const allChars = numberChars + upperChars + lowerChars + symbolChars;

    let randomString = "";

    for (let i = 0; i < passwordLength; i++) {
      let getRandomNum = Math.floor(Math.random() * allChars.length);
      randomString += allChars[getRandomNum];
    }

    const containsNumber = [...numberChars].some((num) =>
      randomString.includes(num)
    );
    const containsUpper = [...upperChars].some((upper) =>
      randomString.includes(upper)
    );
    const containsLower = [...lowerChars].some((lower) =>
      randomString.includes(lower)
    );
    const containsSymbol = [...symbolChars].some((symbol) =>
      randomString.includes(symbol)
    );

    if (containsNumber && containsUpper && containsLower && containsSymbol) {
      result.textContent = randomString;
      return;
    } else {
      generatePassword(passwordLength);
    }
  }

  generatePassword(value);
});

// #6
// Дано окно браузера. Сделайте так, чтобы элементы, целиком находящиеся в левой половине окна покрасились в зеленый цвет, целиком находящиеся в правой половине окна - в синий, а находящиеся и там, и там - в красный.

function colorElements() {
  const elements = document.querySelectorAll(
    "a, span, p, input, textarea, table, td ,tr"
  );
  const viewportWidth = window.innerWidth;

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (rect.width === 0 || rect.height === 0) return;

    if (rect.right <= viewportWidth / 2) {
      element.style.backgroundColor = "green";
    } else if (rect.left >= viewportWidth / 2) {
      element.style.backgroundColor = "blue";
    } else {
      element.style.backgroundColor = "red";
    }
  });
}
colorElements();
// #7
// Даны два числа. Выведите на экран процесс деления этих чисел в столбик, как в школе.

// #8
// Дана строка, содержащая два числа и математическую операцию между ними:
// '10 + 20'
// Напишите код, который вычислит результат записанной математической операции.

const taskContainer8 = document.querySelector(".task_10-3-8");
const subBtn4 = taskContainer8.querySelector("#subBtn");

let str = "10 + 20";
subBtn4.addEventListener("click", () => {
  const arr = str.split(" ");

  const num1 = +arr[0];
  const num2 = +arr[2];
  let result;
  switch (arr[1]) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Unknown symbol");
  }

  console.log(result);
});
