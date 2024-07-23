// #1
// Дан инпут, кнопка и абзац. В инпут вводится год. По нажатию на кнопку определите, введен високосный год или нет и выведите информацию об этом в абзац.

const taskContainer1 = document.querySelector(".task_5-6-1");

const inputYear = taskContainer1.querySelector("#inputYear");
const subBtn = taskContainer1.querySelector("#subBtn");
const result = taskContainer1.querySelector("#result");

subBtn.addEventListener("click", function () {
  const year = +inputYear.value;
  if (year <= 0) {
    result.textContent = "Invalid year";
  } else {
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
      ? (result.textContent = "Year is leap")
      : (result.textContent = "Year isn't leap");
  }
});

// #2
// Дан инпут и кнопка. По нажатию на кнопку выведите в инпут случайное число из диапазона от 1 до 100.

const taskContainer2 = document.querySelector(".task_5-6-2");

const inputNum = taskContainer2.querySelector("#inputNum");
const subBtn1 = taskContainer2.querySelector("#subBtn");

subBtn1.addEventListener("click", function () {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  inputNum.value = +randomNum;
});

// #3
// Дан инпут, кнопка и абзац. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в абзац день недели, соответствующий этой дате.

const taskContainer3 = document.querySelector(".task_5-6-3");

const inputDate = taskContainer3.querySelector("#inputDate");
const subBtn2 = taskContainer3.querySelector("#subBtn");
const result1 = taskContainer3.querySelector("#result");

subBtn2.addEventListener("click", function () {
  const dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(inputDate.value);
  result1.textContent = dayArr[date.getDay()];
});

// #4
// Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза.

const taskContainer4 = document.querySelector(".task_5-6-4");

const divWithWidth = taskContainer4.querySelector("#divWithWidth");
const subBtn3 = taskContainer4.querySelector("#subBtn");
subBtn3.addEventListener("click", function () {
  const styles = window.getComputedStyle(divWithWidth);
  const divWidth = parseFloat(styles.width) * 2;
  const divHeight = parseFloat(styles.height) * 2;
  divWithWidth.style.width = divWidth + "px";
  divWithWidth.style.height = divHeight + "px";
});
// #5
// Даны ссылки. Сделайте так, чтобы по наведению на любую ссылку над ней появлялось значение ее атрибута href.

const taskContainer5 = document.querySelector(".task_5-6-5");

const links = taskContainer5.querySelectorAll(".link");

links.forEach((link) => {
  const tooltip = link.nextElementSibling;
  link.addEventListener("mouseover", function () {
    tooltip.textContent = link.getAttribute("href");
    tooltip.style.position = "absolute";
    tooltip.style.backgroundColor = "#fff";
    tooltip.style.border = "1px solid #ccc";
    tooltip.style.padding = "5px";
    tooltip.style.zIndex = "1000";
    tooltip.style.display = "block";
  });

  link.addEventListener("mouseout", function () {
    tooltip.style.display = "none";
    tooltip.textContent = "";
  });
});
