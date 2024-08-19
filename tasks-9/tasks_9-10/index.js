// #1
// Дана таблица. Юзер кликает по очереди на две ячейки, выделяя их. Сделайте так, чтобы красным цветом выделились все ячейки, расположенные по порядку между теми, на которые кликнул юзер.

const taskContainer1 = document.querySelector(".task_9-10-1");

const table = taskContainer1.querySelector("#myTable");
const trs = table.querySelectorAll("tr");

let firstCell = null;
let secondCell = null;
let cells = [];
trs.forEach((tr) => {
  const tds = tr.querySelectorAll("td");
  cells.push(...tds);

  tds.forEach((td) => {
    td.addEventListener("click", (event) => {
      const clickedCell = event.target;
      if (firstCell === null) {
        firstCell = clickedCell;
      } else if (secondCell === null) {
        secondCell = clickedCell;

        const startIndex = cells.indexOf(firstCell);
        const endIndex = cells.indexOf(secondCell);

        for (let i = startIndex; i <= endIndex; i++) {
          cells[i].style.backgroundColor = "red";
        }

        firstCell = null;
        secondCell = null;
      }
    });
  });
});

// #2
// Напишите код, который определит максимальный уровень вложенности многомерного массива.

// const taskContainer2 = document.querySelector(".task_9-10-2");

// const subBtn = taskContainer2.querySelector("#subBtn");

// subBtn.addEventListener("click", () => {
//   const func = (arr) => {};

//   func([1, [2, 3], [4, [5, [6]]]]);
// });
// ??
// #3
// Дан список каких-то данных за определенные даты, хранящийся в следующей структуре:
// let data = [
// 	{
// 		year:  2019,
// 		month: 11,
// 		day: 20,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 11,
// 		day: 21,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 12,
// 		day: 25,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 12,
// 		day: 26,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 10,
// 		day: 29,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 10,
// 		day: 30,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 11,
// 		day: 19,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 11,
// 		day: 20,
// 		data: ['массив с данными']
// 	},
// ]
// Напишите код, которой переделает структуру данных в структуру вида:

// {
// 	год1: {
// 		месяц1: {
// 			день1: [массив данных],
// 			день2: [массив данных],
// 			день3: [массив данных],
// 		}
// 		месяц2: {
// 			день1: [массив данных],
// 			день2: [массив данных],
// 			день3: [массив данных],
// 		}
// 	}
// 	год2: {
// 		месяц1: {
// 			день1: [массив данных],
// 			день2: [массив данных],
// 			день3: [массив данных],
// 		}
// 		месяц2: {
// 			день1: [массив данных],
// 			день2: [массив данных],
// 			день3: [массив данных],
// 		}
// 	}
// }

const taskContainer3 = document.querySelector(".task_9-10-3");

const subBtn1 = taskContainer3.querySelector("#subBtn");

let data = [
  {
    year: 2019,
    month: 11,
    day: 20,
    data: ["массив с данными"],
  },
  {
    year: 2019,
    month: 11,
    day: 21,
    data: ["массив с данными"],
  },
  {
    year: 2019,
    month: 12,
    day: 25,
    data: ["массив с данными"],
  },
  {
    year: 2019,
    month: 12,
    day: 26,
    data: ["массив с данными"],
  },
  {
    year: 2020,
    month: 10,
    day: 29,
    data: ["массив с данными"],
  },
  {
    year: 2020,
    month: 10,
    day: 30,
    data: ["массив с данными"],
  },
  {
    year: 2020,
    month: 11,
    day: 19,
    data: ["массив с данными"],
  },
  {
    year: 2020,
    month: 11,
    day: 20,
    data: ["массив с данными"],
  },
];

// {
// 	год1: {
// 		месяц1: {
// 			день1: [массив данных],
// 			день2: [массив данных],
// 			день3: [массив данных],
// 		}
// 		месяц2: {
// 			день1: [массив данных],
// 			день2: [массив данных],
// 			день3: [массив данных],
// 		}
// 	}
// 	год2: {
// 		месяц1: {
// 			день1: [массив данных],
// 			день2: [массив данных],
// 			день3: [массив данных],
// 		}
// 		месяц2: {
// 			день1: [массив данных],
// 			день2: [массив данных],
// 			день3: [массив данных],
// 		}
// 	}
// }

subBtn1.addEventListener("click", () => {
  let finalObj = {};
  data.forEach((obj) => {
    const { year, month, day, data } = obj;
    if (!finalObj[year]) {
      finalObj[year] = {};
    }
    if (!finalObj[year][month]) {
      finalObj[year][month] = {};
    }
    if (!finalObj[year][month][day]) {
      finalObj[year][month][day] = [];
    }
    finalObj[year][month][day].push(...data);
  });
  console.log(finalObj);
});
