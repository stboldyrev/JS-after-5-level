// #1
// Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.

const taskContainer1 = document.querySelector(".task_5-10-1");

const inputNum = taskContainer1.querySelector("#inputNum");

inputNum.addEventListener("change", () => {
  const value = inputNum.value.trim();
  if (value === "") {
    inputNum.style.borderColor = "";
  } else {
    const num = +value;
    if (num % 2 === 0) {
      inputNum.style.borderColor = "green";
    } else if (num % 2 !== 0) {
      inputNum.style.borderColor = "red";
    }
  }
});
// #2
// Дан массив с числами и кнопка. По нажатию на кнопку добавьте в массив случайное число и выведите массив в консоль.

const taskContainer2 = document.querySelector(".task_5-10-2");

const subBtn = taskContainer2.querySelector("#subBtn");
let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

subBtn.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * arrNumbers.length);
  console.log(arrNumbers[randomNum]);
});

// #3
// Дан массив с названиями цвета. Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в случайный цвет из массива.

const taskContainer3 = document.querySelector(".task_5-10-3");

const paragraphs = taskContainer3.querySelectorAll(".paragraphs");
let arrColors = ["red", "green", "blue", "yellow", "purple", "orange"];

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * arrColors.length);
    paragraph.style.color = arrColors[randomNum];
  });
});
// #4
// Дан массив с числами, кнопка и абзац. Сделайте так, чтобы по клику на кнопку в инпут через запятую выводились четные числа из этого массива.

const taskContainer4 = document.querySelector(".task_5-10-4");
let arrNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const subBtn1 = taskContainer4.querySelector("#subBtn");
const result = taskContainer4.querySelector("#result");

subBtn1.addEventListener("click", () => {
  result.textContent = arrNumbers1.filter((el) => el % 2 === 0).join(",");
});

// #5
// Дана кнопка и див. По нажатию на кнопку выведите, сколько дней осталось до Нового Года.

const taskContainer5 = document.querySelector(".task_5-10-5");
const subBtn2 = taskContainer5.querySelector("#subBtn");
const result1 = taskContainer5.querySelector("#result");

subBtn2.addEventListener("click", () => {
  //   let currentDate = new Date();
  //   let startOfYear = new Date(currentDate.getFullYear(), 0, 1);
  //   let dateInMilliseconds = currentDate - startOfYear;
  //   let dayInSeconds = 60 * 60 * 24 * 1000;
  //   const daySinceStartedYear = Math.floor(dateInMilliseconds / dayInSeconds);
  //   console.log(daySinceStartedYear);
  //   let year = currentDate.getFullYear();
  //   if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  //     result1.textContent = `${
  //       366 - daySinceStartedYear
  //     } days left till New Year`;
  //   } else {
  //     result1.textContent = `${
  //       365 - daySinceStartedYear
  //     } days left till New Year`;
  //   }
  let currentDate = new Date();
  let newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);
  let differenceInMilliseconds = newYearDate - currentDate;
  let daysInMilliseconds = 60 * 60 * 24 * 1000;
  let howManyDaysLeft = Math.floor(
    differenceInMilliseconds / daysInMilliseconds
  );
  result1.textContent = `${howManyDaysLeft} days left till New Year`;
});
// #6
// Дана кнопка и ul. По клику на кнопку выведите список всех годов за сто лет назад и вперед.

const taskContainer6 = document.querySelector(".task_5-10-6");
const subBtn3 = taskContainer6.querySelector("#subBtn");
const list = taskContainer6.querySelector("#list");

subBtn3.addEventListener("click", () => {
  list.innerHTML = "";
  let date = new Date();
  let year = date.getFullYear();
  for (let i = year - 100; i < year; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
  for (let i = year + 1; i <= year + 100; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});
