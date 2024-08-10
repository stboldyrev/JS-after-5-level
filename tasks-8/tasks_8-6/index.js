// #1
// Дан абзац с текстом и кнопка. По клику на кнопку покрасьте каждый символ в случайный цвет так, чтобы у соседних символов были разные цвета.

const taskContainer1 = document.querySelector(".task_8-6-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const paragraph = taskContainer1.querySelector("#paragraph");

const colors = [
  "#FF5733", // Красно-оранжевый
  "#33FF57", // Зелёный
  "#3357FF", // Синий
  "#FF33A8", // Розовый
  "#FFC300", // Жёлтый
  "#DAF7A6", // Светло-зелёный
  "#581845", // Тёмно-фиолетовый
  "#C70039", // Красный
  "#900C3F", // Бордовый
  "#2ECC71", // Бирюзовый
  "#2980B9", // Тёмно-синий
  "#8E44AD", // Фиолетовый
  "#F39C12", // Оранжевый
  "#E74C3C", // Коралловый
  "#3498DB", // Голубой
];

subBtn.addEventListener("click", () => {
  const arr = paragraph.textContent.trim().split("");
  paragraph.textContent = "";

  let lastColor = "";
  arr.forEach((el, i) => {
    const span = document.createElement("span");
    span.textContent = el;
    let getRandom;

    if (i === 0) {
      getRandom = Math.floor(Math.random() * colors.length);
    } else {
      // Для остальных проверяем, чтобы цвет не повторялся с предыдущим
      do {
        getRandom = Math.floor(Math.random() * colors.length);
      } while (colors[getRandom] === lastColor);
    }
    span.style.color = colors[getRandom];
    lastColor = colors[getRandom];
    paragraph.appendChild(span);
    console.log(span.style.color);
  });
});

// #2
// Дан абзац со словами и инпут. В инпут вводится слово. По клику на кнопку найдите это в абзаце и покрасьте его в красный цвет.

const taskContainer2 = document.querySelector(".task_8-6-2");

const subBtn1 = taskContainer2.querySelector("#subBtn");
const inputText = taskContainer2.querySelector("#inputText");
const paragraph1 = taskContainer2.querySelector("#paragraph");

subBtn1.addEventListener("click", () => {
  if (inputText.value === "") {
    console.log("Please provide information");
    return;
  }

  const value = inputText.value.toLowerCase();
  const text = paragraph1.innerHTML.trim().split(/\s+/);
  const newArr = [];

  text.forEach((word) => {
    const trimmedWord = word.toLowerCase().replace(/[.,!?]/g, "");

    if (value === trimmedWord) {
      newArr.push(`<span class="highlight">${word}</span>`);
    } else {
      newArr.push(word);
    }
  });
  paragraph1.innerHTML = newArr.join(" ");
  inputText.value = "";
});
// #3
// Дано меню со ссылками. Покрасьте в красный цвет ту ссылку, адрес которой совпадает с URL из адресной строки браузера.

const taskContainer3 = document.querySelector(".task_8-6-3");

const a = taskContainer3.querySelectorAll("a");

const browserHref = window.location.href;
console.log(browserHref);

a.forEach((el) => {
  if (el.getAttribute("href") === browserHref) {
    el.style.color = "red";
  }
});

// #4
// Выведите на экран следующую пирамидку:
// xxxxx
// xxxx
// xxx
// xx
// x

const taskContainer4 = document.querySelector(".task_8-6-4");

const subBtn2 = taskContainer4.querySelector("#subBtn");

subBtn2.addEventListener("click", () => {
  let arr = [];
  for (let i = 1; i <= 5; i++) {
    let arr2 = [];
    for (let j = 0; j < i; j++) {
      arr2.push("x");
    }
    arr.push(arr2.join(""));
  }
  console.log(arr.reverse().join("\n"));
});

// #5
// Дан список событий за определенные даты, хранящийся в следующей структуре:
// let events = [
// 	{
// 		date:  '2019-12-29'
// 		event: 'name1'
// 	},
// 	{
// 		date:  '2019-12-31'
// 		event: 'name2'
// 	},
// 	{
// 		date:  '2019-12-29'
// 		event: 'name3'
// 	},
// 	{
// 		date:  '2019-12-30'
// 		event: 'name4'
// 	},
// 	{
// 		date:  '2019-12-29'
// 		event: 'name5'
// 	},
// 	{
// 		date:  '2019-12-31'
// 		event: 'name6'
// 	},
// 	{
// 		date:  '2019-12-29'
// 		event: 'name7'
// 	},
// 	{
// 		date:  '2019-12-30'
// 		event: 'name8'
// 	},
// 	{
// 		date:  '2019-12-30'
// 		event: 'name9'
// 	},
// ]
// Напишите код, которой переделает структуру данных вот в такую:

// {
// 	'2019-12-29': ['name1', 'name3', 'name5', 'name7'],
// 	'2019-12-30': ['name4', 'name8', 'name9'],
// 	'2019-12-31': ['name2', 'name6'],
// }

const taskContainer5 = document.querySelector(".task_8-6-5");

const subBtn3 = taskContainer5.querySelector("#subBtn");

let events = [
  {
    date: "2019-12-29",
    event: "name1",
  },
  {
    date: "2019-12-31",
    event: "name2",
  },
  {
    date: "2019-12-29",
    event: "name3",
  },
  {
    date: "2019-12-30",
    event: "name4",
  },
  {
    date: "2019-12-29",
    event: "name5",
  },
  {
    date: "2019-12-31",
    event: "name6",
  },
  {
    date: "2019-12-29",
    event: "name7",
  },
  {
    date: "2019-12-30",
    event: "name8",
  },
  {
    date: "2019-12-30",
    event: "name9",
  },
];
subBtn3.addEventListener("click", () => {
  const finalObj = {};

  events.forEach(({ date, event }) => {
    if (finalObj[date]) {
      finalObj[date].push(event);
    } else {
      finalObj[date] = [event];
    }
  });
  //   events.forEach((obj) => {
  //     if (finalObj[obj.date]) {
  //       finalObj[obj.date].push(obj.event);
  //     } else {
  //       finalObj[obj.date] = [obj.event];
  //     }
  //   });
  console.log(finalObj);
});
