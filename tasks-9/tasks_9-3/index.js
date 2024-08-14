// #1
// Дан массив со словами. Получите из этого массива случайное слово, начинающееся на заданную букву.

const taskContainer1 = document.querySelector(".task_9-3-1");

const inputText = taskContainer1.querySelector("#inputText");
const subBtn = taskContainer1.querySelector("#subBtn");
const result = taskContainer1.querySelector("#result");

const words = [
  "apple",
  "banana",
  "avocado",
  "cherry",
  "apricot",
  "blueberry",
  "carrot",
];

subBtn.addEventListener("click", () => {
  if (inputText.value.length !== 1) {
    console.log("Give me a letter");
    return;
  }

  const value = inputText.value.toLowerCase();
  const filteredArr = words.filter((word) =>
    word.toLowerCase().startsWith(value)
  );

  if (filteredArr.length === 0) {
    console.log("There is no words that starts with this letter");
    return;
  }
  const getRandomNum = Math.floor(Math.random() * filteredArr.length);

  result.textContent = filteredArr[getRandomNum];
  inputText.value = "";
});
// #2
// Пусть у нас есть дата 22.02.2017. В этой дате 4 двойки. Найдите все даты с 4-мя двойками в текущем столетии.

const taskContainer2 = document.querySelector(".task_9-3-2");

const subBtn1 = taskContainer2.querySelector("#subBtn");

subBtn1.addEventListener("click", () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const startOfCurrentCentury =
    currentYear.toString().split("").slice(0, 2).join("") * 100; // Math.floor(currentYear / 100) * 100;

  const daysInYear = [];
  const startDate = new Date(startOfCurrentCentury, 0, 1);
  const endDate = new Date(startOfCurrentCentury + 100, 0, 1);
  let currentDate = startDate;

  while (currentDate < endDate) {
    daysInYear.push(
      new Date(currentDate).toISOString().split("T")[0].replace(/-/g, ".")
    );
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const finalArr = [];
  daysInYear.forEach((date) => {
    const newArr = [];
    [...date].forEach((el) => {
      if (+el === 2) {
        newArr.push(el);
      }
    });
    if (newArr.length === 4) {
      finalArr.push(date);
    }
  });
  console.log(finalArr);
});
// #3
// Дан массив с точками:
// [
// 	[1, 2], [2, 4], [3, 8], [4, 16], [5, 32]
// ]
// Отрисуйте эти точки на графике.
