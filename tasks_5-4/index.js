// #1
// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текстом становилось значение '!'.
const taskContainer1 = document.querySelector(".task_5-4-1");
const paragraphs1 = taskContainer1.querySelectorAll("p");

paragraphs1.forEach((paragraph) => {
  paragraph.addEventListener("click", function () {
    paragraph.textContent = "!";
  });
});

// #2
// Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.
const taskContainer2 = document.querySelector(".task_5-4-2");
const subBtn2 = taskContainer2.querySelector("#subBtn2");
const result2 = taskContainer2.querySelector("#result2");
const links = taskContainer2.querySelectorAll("a");

subBtn2.addEventListener("click", function () {
  const hrefs = Array.from(links).map((link) => link.getAttribute("href"));
  result2.textContent = JSON.stringify(hrefs);
});

// #3
// Дан абзац и кнопка. По нажатию на кнопку сделайте в цикле строку '123456789' и запишите ее в абзац.
const taskContainer3 = document.querySelector(".task_5-4-3");
const result3 = taskContainer3.querySelector("#result3");
const subBtn3 = taskContainer3.querySelector("#subBtn3");

subBtn3.addEventListener("click", function () {
  let numbersString = "";
  for (let i = 1; i <= 9; i++) {
    numbersString += i;
  }
  result3.textContent = numbersString;
});

// #4
// Даны три абзаца. Выведите в первый текущий год, во второй - текущий месяц, в третий - текущий день.
const taskContainer4 = document.querySelector(".task_5-4-4");
const year = taskContainer4.querySelector("#year");
const month = taskContainer4.querySelector("#month");
const day = taskContainer4.querySelector("#day");

const currentDate = new Date();
year.textContent = `Current year: ${currentDate.getFullYear()}`;
month.textContent = `Current month: ${currentDate.getMonth() + 1}`;
day.textContent = `Current day: ${currentDate.getDate()}`;

// #5
// Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.
const taskContainer5 = document.querySelector(".task_5-4-5");
const link = taskContainer5.querySelector("#link");
const subBtn5 = taskContainer5.querySelector("#subBtn5");
const result5 = taskContainer5.querySelector("#result5");

subBtn5.addEventListener("click", function () {
  result5.textContent = `Href of the link is: ${link.getAttribute("href")}`;
});
