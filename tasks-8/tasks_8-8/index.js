// #1
// Даны два селекта. В первом селекте выводятся страны. Сделайте так, чтобы во втором селекте выводились города выбранной страны.

const taskContainer1 = document.querySelector(".task_8-8-1");

const select1 = taskContainer1.querySelector("#select1");
const select2 = taskContainer1.querySelector("#select2");

const countries = {
  USA: ["New York", "Los Angeles", "Chicago"],
  Canada: ["Toronto", "Vancouver", "Montreal"],
  Germany: ["Berlin", "Munich", "Hamburg"],
  France: ["Paris", "Lyon", "Marseille"],
  Japan: ["Tokyo", "Osaka", "Kyoto"],
};
Object.keys(countries).forEach((country) => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  select1.appendChild(option);
});

select1.addEventListener("change", () => {
  select2.innerHTML = '<option value="" disabled selected>Choose city</option>';
  const selectedEl = select1.value;

  //   countries[selectedEl].forEach((city) => {
  //     const option = document.createElement("option");
  //     option.value = city;
  //     option.textContent = city;
  //     select2.appendChild(option);
  //   });
  Object.keys(countries).forEach((country) => {
    if (selectedEl === country) {
      countries[country].forEach((city) => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        select2.appendChild(option);
      });
    }
  });
});
// select1.addEventListener("change", () => {
//     select2.innerHTML = '<option value="" disabled selected>Choose city</option>';
//     const options = Array.from(select1.options);
//     options.forEach((el) => {
//       let selectedEl = "";
//       if (el.selected) {
//         selectedEl = el.value;
//       }
//       Object.keys(countries).forEach((country) => {
//         if (selectedEl === country) {
//           countries[country].forEach((city) => {
//             const option = document.createElement("option");
//             option.value = city;
//             option.textContent = city;
//             select2.appendChild(option);
//           });
//         }
//       });
//     });
//   });
// #2
// Даны инпут и кнопка. В инпут вводится число. По клику на кнопку, проверьте, является ли это число совершенным.

const taskContainer2 = document.querySelector(".task_8-8-2");

const inputNum = taskContainer2.querySelector("#inputNum");
const subBtn = taskContainer2.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  if (inputNum.value === "") {
    console.log("Please provide information");
    return;
  }

  const num = +inputNum.value;
  const arr = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }

  arr.reduce((sum, el) => sum + el, 0) === num
    ? console.log(`Num ${num} is perfect`)
    : console.log(`Num ${num} is NOT perfect`);
});
// #3
// Дан список событий за определенные месяцы, хранящийся в следующей структуре:
// let events = [
// 	{
// 		date:  '2019-12'
// 		event: 'name1'
// 	},
// 	{
// 		date:  '2019-12'
// 		event: 'name2'
// 	},
// 	{
// 		date:  '2019-11'
// 		event: 'name3'
// 	},
// 	{
// 		date:  '2019-11'
// 		event: 'name4'
// 	},
// 	{
// 		date:  '2020-10'
// 		event: 'name5'
// 	},
// 	{
// 		date:  '2020-10'
// 		event: 'name6'
// 	},
// 	{
// 		date:  '2020-11'
// 		event: 'name5'
// 	},
// 	{
// 		date:  '2020-11'
// 		event: 'name6'
// 	},
// 	{
// 		date:  '2020-12'
// 		event: 'name7'
// 	},
// 	{
// 		date:  '2020-12'
// 		event: 'name8'
// 	},
// 	{
// 		date:  '2020-12'
// 		event: 'name9'
// 	},
// ]
// Напишите код, которой переделает структуру данных вот в такую:

// {
// 	2019: {
// 		11: [массив событий],
// 		12: [массив событий],
// 	}
// 	2020: {
// 		10: [массив событий],
// 		11: [массив событий],
// 		12: [массив событий],
// 	}
// }

const taskContainer3 = document.querySelector(".task_8-8-3");
const subBtn1 = taskContainer3.querySelector("#subBtn");

let events = [
  {
    date: "2019-12",
    event: "name1",
  },
  {
    date: "2019-12",
    event: "name2",
  },
  {
    date: "2019-11",
    event: "name3",
  },
  {
    date: "2019-11",
    event: "name4",
  },
  {
    date: "2020-10",
    event: "name5",
  },
  {
    date: "2020-10",
    event: "name6",
  },
  {
    date: "2020-11",
    event: "name5",
  },
  {
    date: "2020-11",
    event: "name6",
  },
  {
    date: "2020-12",
    event: "name7",
  },
  {
    date: "2020-12",
    event: "name8",
  },
  {
    date: "2020-12",
    event: "name9",
  },
];

// {
// 	2019: {
// 		11: [массив событий],
// 		12: [массив событий],
// 	}
// 	2020: {
// 		10: [массив событий],
// 		11: [массив событий],
// 		12: [массив событий],
// 	}
// }

subBtn1.addEventListener("click", () => {
  const finalObj = {};
  events.forEach(({ date, event }) => {
    const [year, month] = date.split("-");

    // if (finalObj[year]) {
    //   if (finalObj[year][month]) {
    //     finalObj[year][month].push(event);
    //   } else {
    //     finalObj[year][month] = [event];
    //   }
    // } else {
    //   finalObj[year] = {};
    // }
    if (!finalObj[year]) {
      finalObj[year] = {};
    }

    if (!finalObj[year][month]) {
      finalObj[year][month] = [];
    }
    finalObj[year][month].push(event);
  });

  console.log(finalObj);
});
