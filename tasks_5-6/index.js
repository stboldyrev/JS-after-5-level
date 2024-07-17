// #1
// Дан инпут, кнопка и абзац. В инпут вводится год. По нажатию на кнопку определите, введен високосный год или нет и выведите информацию об этом в абзац.
const taskContainer1 = document.querySelector(".task_5-6-1");
const inputYear = taskContainer1.querySelector("#inputYear");
const result1 = taskContainer1.querySelector("#result1");
const subBtn1 = taskContainer1.querySelector("#subBtn1");

subBtn1.addEventListener("click", function () {
  const year = parseInt(inputYear.value);
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    result1.textContent = `${year} - високосный год`;
  } else {
    result1.textContent = `${year} - не високосный год`;
  }
});

// #2
// Дан инпут и кнопка. По нажатию на кнопку выведите в инпут случайное число из диапазона от 1 до 100.
const taskContainer2 = document.querySelector(".task_5-6-2");
const randomNumber = taskContainer2.querySelector("#randomNumber");
const subBtn2 = taskContainer2.querySelector("#subBtn2");

subBtn2.addEventListener("click", function () {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  randomNumber.value = randomNum;
});

// #3
// Дан инпут, кнопка и абзац. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в абзац день недели, соответствующий этой дате.
const taskContainer3 = document.querySelector(".task_5-6-3");
const inputDate = taskContainer3.querySelector("#inputDate");
const dayOfWeek = taskContainer3.querySelector("#dayOfWeek");
const subBtn3 = taskContainer3.querySelector("#subBtn3");

subBtn3.addEventListener("click", function () {
  const dateStr = inputDate.value.trim();
  if (dateStr.length === 10 && dateStr.includes("-")) {
    const parts = dateStr.split("-");
    const date = new Date(`${parts[0]}-${parts[1]}-${parts[2]}`);
    const options = { weekday: "long" };
    dayOfWeek.textContent = new Intl.DateTimeFormat("ru-RU", options).format(
      date
    );
  } else {
    dayOfWeek.textContent = "Некорректная дата";
  }
});

// #4
// Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза.
const taskContainer4 = document.querySelector(".task_5-6-4");
const divToResize = taskContainer4.querySelector("div");
const subBtn4 = taskContainer4.querySelector("#subBtn4");

subBtn4.addEventListener("click", function () {
  const currentWidth = divToResize.offsetWidth;
  const currentHeight = divToResize.offsetHeight;
  divToResize.style.width = `${currentWidth * 2}px`;
  divToResize.style.height = `${currentHeight * 2}px`;
});

// #5
// Даны ссылки. Сделайте так, чтобы по наведению на любую ссылку над ней появлялось значение ее атрибута href.
const taskContainer5 = document.querySelector(".task_5-6-5");
const links = taskContainer5.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("mouseover", function () {
    const hrefValue = link.getAttribute("href");
    alert(hrefValue);
  });
});
