// №1
// Выведите даты всех выходных дней текущего года в виде списка ul.

const taskContainer1 = document.querySelector(".task_6-7-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const list = taskContainer1.querySelector("#list");
subBtn.addEventListener("click", () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      if (date.getDay() === 6 || date.getDay() === 0) {
        const li = document.createElement("li");
        li.textContent = date.toISOString().split("T")[0];
        list.appendChild(li);
      }
    }
  }
  //   const startOfTheYear = new Date(currentDate.getFullYear(), 0, 1);
  //   const endOfTheYear = new Date(currentDate.getFullYear(), 11, 31);

  //   for (
  //     let day = startOfTheYear;
  //     day <= endOfTheYear;
  //     day.setDate(day.getDate() + 1)
  //   ) {
  //     console.log(day);
  //     if (day.getDay() === 6 || day.getDay() === 0) {
  //       const li = document.createElement("li");
  //       li.textContent = day.toISOString().split("T")[0];
  //       list.appendChild(li);
  //     }
  //   }
});
// №2
// Дан абзац и кнопка. По клику на кнопку выведите в абзац название дня недели последнего дня текущего месяца.

const taskContainer2 = document.querySelector(".task_6-7-2");

const subBtn1 = taskContainer2.querySelector("#subBtn");
const result = taskContainer2.querySelector("#result");

subBtn1.addEventListener("click", () => {
  const dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const lastDayInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  result.textContent = dayArr[lastDayInMonth.getDay()];
});
// №3
// Дана кнопка и селект. По клику на кнопку заполните селект числами от первого до последнего дня текущего месяца.

const taskContainer3 = document.querySelector(".task_6-7-3");

const subBtn2 = taskContainer3.querySelector("#subBtn");
const result1 = taskContainer3.querySelector("#result");

subBtn2.addEventListener("click", () => {
  const date = new Date();
  const lastDayInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  for (let day = 1; day <= lastDayInMonth.getDate(); day++) {
    const option = document.createElement("option");
    option.textContent = day;
    option.value = day;
    result1.appendChild(option);
  }
});
// №4
// Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац строку, состоящую из нулей, количество которых равно числу. Например, при вводе числа 5 у нас должна получится строка '00000'.

const taskContainer4 = document.querySelector(".task_6-7-4");

const inputNum = taskContainer4.querySelector("#inputNum");
const subBtn3 = taskContainer4.querySelector("#subBtn");
const result2 = taskContainer4.querySelector("#result");

subBtn3.addEventListener("click", () => {
  result2.textContent = "";
  const value = +inputNum.value;
  let arr = [];
  for (let i = 1; i <= value; i++) {
    arr.push(0);
  }

  result2.textContent = arr.join("");
  inputNum.value = "";
});
