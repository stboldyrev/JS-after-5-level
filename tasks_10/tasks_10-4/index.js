// #1
// Дан текст со словами. Перемешайте все слова этого текста в случайном порядке.

const taskContainer1 = document.querySelector(".task_10-4-1");

const paragraph = taskContainer1.querySelector("#paragraph");
const subBtn = taskContainer1.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  const text = paragraph.textContent.replace("\n", "").split(" ");
  let cleanedArray = text
    .map((item) => item.trim())
    .filter((item) => item !== "");

  paragraph.textContent = "";
  paragraph.textContent = cleanedArray
    .sort(() => Math.random() - 0.5)
    .join(" ");
});

// #2
// Выведите на страницу обратный отсчет дней, часов, минут и секунд, оставшихся до Нового Года.

const taskContainer2 = document.querySelector(".task_10-4-2");

const result = taskContainer2.querySelector("#result");

setInterval(() => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const newYear = new Date(currentYear + 1, 0, 1);

  const totalSeconds = Math.floor((newYear - currentDate) / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  result.textContent = `Days: ${days}, hours ${hours}, minutes ${minutes}, seconds ${seconds} till New Year`;
}, 1000);

// #3
// Даны два числа. Выведите на экран процесс нахождения НОК, как в школе.
// ??

// #4
// Даны два числа. Выведите на экран процесс нахождения НОД, как в школе.
// ??

// #5
// Дана HTML таблица, в которой в произвольных двух ячейках стоят плюсы:
// По нажатию на кнопку заполните минусами все ячейки между заданными следующим образом:

const taskContainer5 = document.querySelector(".task_10-4-5");
const table = taskContainer5.querySelector("#myTable");
const trs = table.querySelectorAll("tr");
const tds = table.querySelectorAll("td");

const subBtn2 = taskContainer5.querySelector("#subBtn");

subBtn2.addEventListener("click", () => {
  let arrIndex = [];
  tds.forEach((td, i) => {
    if (td.textContent === "+") {
      arrIndex.push(i);
    }
  });

  const [startIdx, endIdx] = [arrIndex[0], arrIndex[1]];

  const [start, end] =
    startIdx < endIdx ? [startIdx, endIdx] : [endIdx, startIdx];

  for (let i = start + 1; i < end; i++) {
    tds[i].textContent = "-";
  }
});
