// #1
// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текстом становилось значение '!'.

const taskContainer1 = document.querySelector(".task_5-4-1");

const paragraphs = Array.from(taskContainer1.getElementsByTagName("p"));

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("click", function () {
    paragraph.textContent = "!";
  });
});
// #2
// Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.

const taskContainer2 = document.querySelector(".task_5-4-2");

const aHref = Array.from(taskContainer2.getElementsByTagName("a"));
const subBtn = taskContainer2.querySelector("#subBtn");
const result = taskContainer2.querySelector("#result");

subBtn.addEventListener("click", function () {
  console.log(aHref.map((links) => links.getAttribute("href")));
});
// #3
// Дан абзац и кнопка. По нажатию на кнопку сделайте в цикле строку '123456789' и запишите ее в абзац.

const taskContainer3 = document.querySelector(".task_5-4-3");

const result1 = taskContainer3.querySelector("#result");
const subBtn1 = taskContainer3.querySelector("#subBtn");

subBtn1.addEventListener("click", function () {
  let str = "";
  for (let i = 1; i <= 9; i++) {
    str += i;
  }

  result1.textContent = str;
});
// #4
// Даны три абзаца. Выведите в первый текущий год, во второй - текущий месяц, в третий - текущий день.

const taskContainer4 = document.querySelector(".task_5-4-4");

const paragraph1 = taskContainer4.querySelector("#paragraph1");
const paragraph2 = taskContainer4.querySelector("#paragraph2");
const paragraph3 = taskContainer4.querySelector("#paragraph3");
const date = new Date();
paragraph1.textContent = date.getFullYear();
paragraph2.textContent = date.getMonth() + 1;
paragraph3.textContent = date.getDate();
// #5
// Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.

const taskContainer5 = document.querySelector(".task_5-4-5");

const subBtn2 = taskContainer5.querySelector("#subBtn");
const result2 = taskContainer5.querySelector("#result");
const link = taskContainer5.querySelector("#link");

subBtn2.addEventListener("click", function () {
  result2.textContent = link.getAttribute("href");
});

// const taskContainer5 = document.querySelector(".task_5-4-5");

// const subBtn2 = taskContainer5.querySelector("#subBtn");
// const result2 = taskContainer5.querySelector("#result");
// const link = Array.from(taskContainer5.getElementsByTagName("a"));

// subBtn2.addEventListener("click", function () {
//   result2.textContent = link.map((el) => el.getAttribute("href"));
// });
