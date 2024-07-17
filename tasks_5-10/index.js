// #1
// Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.
const taskContainer1 = document.querySelector(".task_5-10-1");
const numberInput = taskContainer1.querySelector("#numberInput");

numberInput.addEventListener("blur", function () {
  const num = +numberInput.value;
  if (num % 2 === 0) {
    numberInput.style.border = "2px solid green";
  } else {
    numberInput.style.border = "2px solid red";
  }
});

// #2
// Дан массив с числами и кнопка. По нажатию на кнопку добавьте в массив случайное число и выведите массив в консоль.
const taskContainer2 = document.querySelector(".task_5-10-2");
const addRandomNumberBtn = taskContainer2.querySelector("#addRandomNumberBtn");
let numbersArray = [1, 2, 3, 4, 5]; // Пример массива чисел

addRandomNumberBtn.addEventListener("click", function () {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  numbersArray.push(randomNum);
  console.log(numbersArray);
});

// #3
// Дан массив с названиями цвета. Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в случайный цвет из массива.
const taskContainer3 = document.querySelector(".task_5-10-3");
const paragraphs = taskContainer3.querySelectorAll("p");
const colors = ["red", "green", "blue", "yellow", "purple"]; // Пример массива цветов

taskContainer3.addEventListener("click", function (event) {
  if (event.target.tagName === "P") {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    event.target.style.color = randomColor;
  }
});

// #4
// Дан массив с числами, кнопка и абзац. Сделайте так, чтобы по клику на кнопку в инпут через запятую выводились четные числа из этого массива.
const taskContainer4 = document.querySelector(".task_5-10-4");
const evenNumbersBtn = taskContainer4.querySelector("#evenNumbersBtn");
const evenNumbersInput = taskContainer4.querySelector("#evenNumbersInput");

const numbersArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Пример массива чисел

evenNumbersBtn.addEventListener("click", function () {
  const evenNumbers = numbersArray4.filter((num) => num % 2 === 0);
  evenNumbersInput.value = evenNumbers.join(", ");
});

// #5
// Дана кнопка и див. По нажатию на кнопку выведите, сколько дней осталось до Нового Года.
const taskContainer5 = document.querySelector(".task_5-10-5");
const daysToNewYearBtn = taskContainer5.querySelector("#daysToNewYearBtn");
const daysToNewYear = taskContainer5.querySelector("#daysToNewYear");

daysToNewYearBtn.addEventListener("click", function () {
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1);
  const diff = Math.ceil((newYear - now) / (1000 * 60 * 60 * 24));
  daysToNewYear.textContent = `До Нового Года осталось ${diff} дней`;
});

// #6
// Дана кнопка и ul. По клику на кнопку выведите список всех годов за сто лет назад и вперед.
const taskContainer6 = document.querySelector(".task_5-10-6");
const yearsListBtn = taskContainer6.querySelector("#yearsListBtn");
const yearsList = taskContainer6.querySelector("#yearsList");

yearsListBtn.addEventListener("click", function () {
  yearsList.innerHTML = ""; // Очищаем список перед добавлением новых элементов

  const currentYear = new Date().getFullYear();

  for (let i = currentYear - 100; i <= currentYear + 100; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    yearsList.appendChild(li);
  }
});
