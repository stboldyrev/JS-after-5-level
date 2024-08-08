// #1
// Дан массив со словами. Выведите слова, начинающиеся на одинаковые буквы в своем отдельном списке ul.
// Над каждым списком сделайте h2 с названием буквы, для которой сделан список.
const taskContainer1 = document.querySelector(".task_8-5-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const result = taskContainer1.querySelector("#result");

const arr = [
  "apple",
  "banana",
  "avocado",
  "blueberry",
  "cherry",
  "date",
  "apricot",
  "blackberry",
  "cantaloupe",
  "pear",
  "plum",
  "kiwi",
  "pineapple",
  "peach",
  "coconut",
  "carrot",
];

subBtn.addEventListener("click", () => {
  let firstLetter = {};
  for (let word of arr) {
    if (!firstLetter[word[0]]) {
      firstLetter[word[0]] = [word];
    } else {
      firstLetter[word[0]].push(word);
    }
  }

  Object.keys(firstLetter).forEach((key) => {
    const ul = document.createElement("ul");
    const h2 = document.createElement("h2");
    h2.textContent = key;
    ul.appendChild(h2);
    firstLetter[key].forEach((word) => {
      // для каждого слова(значения) в ключе мы создаем отдельный li.
      const li = document.createElement("li");
      li.textContent = word;
      ul.appendChild(li);
    });
    result.appendChild(ul);
  });
});
// #2
// Даны три селекта. В первом селекте выведите дни месяца от 1 до 31, во втором - названия месяцев года, а в третьем - года за предыдущие и следующие 10 лет.

const taskContainer2 = document.querySelector(".task_8-5-2");

const days = taskContainer2.querySelector("#days");
const months = taskContainer2.querySelector("#months");
const years = taskContainer2.querySelector("#years");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

// const option = document.createElement("option");

// taskContainer2.querySelectorAll("select").forEach((el) => {
//   const option = document.createElement("option");
//   option.textContent = "";
//   el.appendChild(option);
// });
const monthsArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (let day = 1; day <= 31; day++) {
  const option = document.createElement("option");
  option.value = day;
  option.textContent = day;
  days.appendChild(option);
}

for (let month = 0; month < monthsArr.length; month++) {
  const option = document.createElement("option");
  option.value = monthsArr[month];
  option.textContent = monthsArr[month];
  months.appendChild(option);
}

for (let year = currentYear - 10; year <= currentYear + 10; year++) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  years.appendChild(option);
}

// #3
// Модифицируйте предыдущую задачу так, чтобы по умолчанию в селектах была выбрана текущая дата.

const taskContainer3 = document.querySelector(".task_8-5-3");

const days1 = taskContainer3.querySelector("#days");
const months1 = taskContainer3.querySelector("#months");
const years1 = taskContainer3.querySelector("#years");

const currentDate1 = new Date();
const currentYear1 = currentDate1.getFullYear();

// const option = document.createElement("option");

// taskContainer3.querySelectorAll("select").forEach((el) => {
//   const option = document.createElement("option");
//   option.textContent = "";
//   el.appendChild(option);
// });
const monthsArr1 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (let day = 1; day <= 31; day++) {
  const option = document.createElement("option");
  option.value = day;
  option.textContent = day;
  days1.appendChild(option);
}

for (let month = 0; month < monthsArr1.length; month++) {
  const option = document.createElement("option");
  option.value = monthsArr1[month];
  option.textContent = monthsArr1[month];
  months1.appendChild(option);
}

for (let year = currentYear1 - 10; year <= currentYear1 + 10; year++) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  years1.appendChild(option);
}
const setCurrentDay = document.querySelector("#setCurrentDay");

setCurrentDay.addEventListener("click", () => {
  const currentDay = currentDate1.getDate();
  days1.querySelectorAll("option").forEach((el) => {
    if (+el.value === +currentDay) {
      el.selected = true;
    }
  });
});
// #4
// Модифицируйте предыдущую задачу так, чтобы в первом селекте количество дней соответствовало выбранному месяцу и году.

const taskContainer4 = document.querySelector(".task_8-5-4");

const days2 = taskContainer4.querySelector("#days");
const months2 = taskContainer4.querySelector("#months");
const years2 = taskContainer4.querySelector("#years");

const currentDate2 = new Date();
const currentYear2 = currentDate2.getFullYear();

// const option = document.createElement("option");

// taskContainer4.querySelectorAll("select").forEach((el) => {
//   const option = document.createElement("option");
//   option.textContent = "";
//   el.appendChild(option);
// });
const monthsArr2 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (let day = 1; day <= 31; day++) {
  const option = document.createElement("option");
  option.value = day;
  option.textContent = day;
  days2.appendChild(option);
}

for (let month = 0; month < monthsArr2.length; month++) {
  const option = document.createElement("option");
  option.value = month;
  option.textContent = monthsArr2[month];
  months2.appendChild(option);
}

for (let year = currentYear2 - 10; year <= currentYear2 + 10; year++) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  years2.appendChild(option);
}

let optionYear = years2.value;
let optionMonth = +months2.value;

const newFunction = () => {
  let newDate = new Date(optionYear, optionMonth, 0).getDate();
  days2.innerHTML = "";
  for (let day = 1; day <= newDate; day++) {
    const option = document.createElement("option");
    option.value = day;
    option.textContent = day;
    days2.appendChild(option);
  }
  console.log(newDate);
};

years2.addEventListener("change", () => {
  optionYear = years2.value;
  newFunction();
});
months2.addEventListener("change", () => {
  optionMonth = +months2.value;
  newFunction();
});

// 1. Инициализация переменных
// Переменные optionYear и optionMonth инициализируются один раз в начале, но они должны обновляться внутри обработчиков событий, чтобы использовать актуальные значения из селекторов.

// 2. Оптимизация функции обновления
// Функция newFunction вызывается внутри обработчиков событий, но значения optionYear и optionMonth должны быть обновлены внутри этой функции, чтобы избежать ошибок при изменении значений.

// 3. Инициализация селекторов
// Чтобы убедиться, что значения по умолчанию корректны при загрузке страницы, стоит вызывать функцию обновления сразу после инициализации селекторов.

// Вот улучшенный вариант:
// javascript
// Копировать код
// const taskContainer4 = document.querySelector(".task_8-5-4");

// const days2 = taskContainer4.querySelector("#days");
// const months2 = taskContainer4.querySelector("#months");
// const years2 = taskContainer4.querySelector("#years");

// const currentDate2 = new Date();
// const currentYear2 = currentDate2.getFullYear();

// const monthsArr2 = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// // Заполнение селектов с днями, месяцами и годами
// for (let day = 1; day <= 31; day++) {
//   const option = document.createElement("option");
//   option.value = day;
//   option.textContent = day;
//   days2.appendChild(option);
// }

// for (let month = 0; month < monthsArr2.length; month++) {
//   const option = document.createElement("option");
//   option.value = month;
//   option.textContent = monthsArr2[month];
//   months2.appendChild(option);
// }

// for (let year = currentYear2 - 10; year <= currentYear2 + 10; year++) {
//   const option = document.createElement("option");
//   option.value = year;
//   option.textContent = year;
//   years2.appendChild(option);
// }

// // Функция для обновления дней
// const updateDays = () => {
//   const year = years2.value;
//   const month = +months2.value; // Преобразование значения месяца в число
//   const daysInMonth = new Date(year, month + 1, 0).getDate(); // Количество дней в месяце

//   days2.innerHTML = ""; // Очистка текущих дней

//   for (let day = 1; day <= daysInMonth; day++) {
//     const option = document.createElement("option");
//     option.value = day;
//     option.textContent = day;
//     days2.appendChild(option);
//   }

//   console.log(`Days in selected month: ${daysInMonth}`);
// };

// // Инициализация значений и установка обработчиков событий
// updateDays(); // Обновляем дни при загрузке страницы

// years2.addEventListener("change", updateDays);
// months2.addEventListener("change", updateDays);
// #5
// Выведите на экран следующую пирамидку:
// 1
// 333
// 55555
// 7777777
// 999999999

const taskContainer5 = document.querySelector(".task_8-5-5");

const subBtn4 = taskContainer5.querySelector("#subBtn");
const result1 = taskContainer5.querySelector("#result");

subBtn4.addEventListener("click", () => {
  let arr = [];
  for (let i = 1; i <= 9; i++) {
    let arr2 = [];
    for (let j = 1; j <= i; j++) {
      arr2.push(+i);
    }
    if (i % 2 !== 0) {
      arr.push(arr2.join(""));
    }
  }
  console.log(arr.join("\n"));
  result1.innerHTML = arr.join("<br>");
});
