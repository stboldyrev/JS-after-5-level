// #1
// Дана кнопка и блок с текстом. Текст по высоте не влазит в блок и скрыт. По клику на кнопку распахните блок на всю высоту.

const taskContainer1 = document.querySelector(".task_8-4-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const block = taskContainer1.querySelector("#block");

subBtn.addEventListener("click", () => {
  block.style.height = "auto";
});
// #2
// Дана строка с текстом. Получите процентное содержание каждого символа текста в виде объекта, в котором ключами будут символы, а значениями - их процентное содержание.

const taskContainer2 = document.querySelector(".task_8-4-2");

const subBtn1 = taskContainer2.querySelector("#subBtn");
const paragraph = taskContainer2.querySelector("#paragraph");

subBtn1.addEventListener("click", () => {
  const text = paragraph.textContent.trim().split("");
  const counterObj = {};
  // text.forEach((word) => {
  //   const trimmedWord = word.toLowerCase().replace(/[.,!?]/g, "");
  //   arrWords.push(trimmedWord);
  // });

  for (let symbol of text) {
    if (counterObj[symbol]) {
      counterObj[symbol]++;
    } else {
      counterObj[symbol] = 1;
    }
  }

  let finalObj = {};
  const textLength = text.length;
  for (let symbol of text) {
    finalObj[symbol] =
      ((counterObj[symbol] * 100) / textLength).toFixed(2) + "%";
  }
  // for (let symbol in counterObj) {
  //   finalObj[symbol] =
  //     ((counterObj[symbol] * 100) / textLength).toFixed(2) + "%";
  // }

  console.log(finalObj);
});
// #3
// Дан список ul и инпут. По мере ввода текста в инпут оставляйте видимыми только те li, текст которых начинается на текст, введенный в инпут.

const taskContainer3 = document.querySelector(".task_8-4-3");

const inputText = taskContainer3.querySelector("#inputText");
const list = taskContainer3.querySelector("#list");

inputText.addEventListener("input", () => {
  // if (inputText.value === "") {
  //   return;
  // }
  const value = inputText.value.toLowerCase();
  const items = list.querySelectorAll("li");
  items.forEach((item) => {
    if (value === "" || value[0] === item.textContent[0].toLowerCase()) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });

  //

  // // if (value === "") {
  // //   // Если инпут пустой, скрываем все элементы списка
  // //   items.forEach((item) => {
  // //     item.style.display = "none";
  // //   });
  // //   return;
  // // }

  // items.forEach((item) => {
  //   const itemText = item.textContent.toLowerCase();
  //   if (value === "" || itemText.startsWith(value)) {
  //     item.style.display = "list-item";
  //   } else {
  //     item.style.display = "none";
  //   }
  // });
});
// #4
// Выведите на экран следующую пирамидку:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

const taskContainer4 = document.querySelector(".task_8-4-4");

const subBtn2 = taskContainer4.querySelector("#subBtn");
const result = taskContainer4.querySelector("#result");

subBtn2.addEventListener("click", () => {
  let arr = [];
  for (let i = 1; i <= 9; i++) {
    let arr2 = [];
    for (let j = 1; j <= i; j++) {
      arr2.push(+i);
    }
    arr.push(arr2.join(""));
  }
  console.log(arr.join("\n"));
  result.innerHTML = arr.join("<br>");
});
// #5
// Дан список городов и их стран, хранящийся в следующей структуре:
// let data = [
// 	{
// 		country: 'country1',
// 		city:    'city11',
// 	},
// 	{
// 		country: 'country2',
// 		city:    'city21',
// 	},
// 	{
// 		country: 'country3',
// 		city:    'city31',
// 	},
// 	{
// 		country: 'country1',
// 		city:    'city12',
// 	},
// 	{
// 		country: 'country1',
// 		city:    'city13',
// 	},
// 	{
// 		country: 'country2',
// 		city:    'city22',
// 	},
// 	{
// 		country: 'country3',
// 		city:    'city31',
// 	},
// ]
// Напишите код, которой переделает структуру данных вот в такую:

// {
// 	'country1': [
// 		'city11', 'city12', 'city13',
// 	],
// 	'country2': [
// 		'city21', 'city22'
// 	],
// 	'country3': [
// 		'city31', 'city32'
// 	],
// }

const taskContainer5 = document.querySelector(".task_8-4-5");

const subBtn3 = taskContainer5.querySelector("#subBtn");

let data = [
  {
    country: "country1",
    city: "city11",
  },
  {
    country: "country2",
    city: "city21",
  },
  {
    country: "country3",
    city: "city31",
  },
  {
    country: "country1",
    city: "city12",
  },
  {
    country: "country1",
    city: "city13",
  },
  {
    country: "country2",
    city: "city22",
  },
  {
    country: "country3",
    city: "city32",
  },
];

const finalObj = {};
subBtn3.addEventListener("click", () => {
  data.forEach((obj) => {
    if (!finalObj[obj.country]) {
      finalObj[obj.country] = [obj.city];
    } else {
      finalObj[obj.country].push(obj.city);
    }
  });
  // data.forEach(({ country, city }) => {
  //   if (!finalObj[country]) {
  //     finalObj[country] = [city];
  //   } else {
  //     finalObj[country].push(city);
  //   }
  // });
  console.log(finalObj);
});
