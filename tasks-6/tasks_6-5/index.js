// #1
// Дан абзац и инпут. В инпут вводится дата рождения юзера в формате год-месяц-день. Выведите в абзац, сколько полных лет юзеру.

const taskContainer1 = document.querySelector(".task_6-5-1");

const inputDate = taskContainer1.querySelector("#inputDate");
const result = taskContainer1.querySelector("#result");
const subBtn = taskContainer1.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  const userDate = new Date(inputDate.value);
  const currentDate = new Date();

  const userYear = userDate.getFullYear();
  const userMonth = userDate.getMonth();
  const userDay = userDate.getDate();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const age = currentYear - userYear;

  if (userDate < currentDate) {
    if (currentMonth > userMonth) {
      result.textContent = `User is ${age} years old`;
    } else if (currentMonth < userMonth) {
      result.textContent = `User is ${age - 1} years old`;
    } else {
      if (currentDay >= userDay) {
        result.textContent = `User is ${age} years old`;
      } else if (currentDay < userDay) {
        result.textContent = `User is ${age - 1} years old`;
      }
    }
  } else {
    result.textContent = "Invalid date";
  }

  //   if (userDate < currentDate) {
  //     result.textContent = "Invalid date";
  //   }

  //   if (
  //     currentMonth < userMonth ||
  //     (currentMonth === userMonth && currentDay < userDay)
  //   ) {
  //     age--;
  //   }

  //   result.textContent = `User is ${age} years old`;
});

// #2
// Дан абзац и инпут. В инпут вводятся числа, разделенные запятыми. Сделайте так, чтобы по мере ввода данных в инпут в абзац выводилась сумма введеных чисел.

const taskContainer2 = document.querySelector(".task_6-5-2");

const inputNum = taskContainer2.querySelector("#inputNum");
const result1 = taskContainer2.querySelector("#result");

inputNum.addEventListener("input", () => {
  inputNum.value = inputNum.value.replace(/[^0-9,]/g, "");
  let arrNum = inputNum.value.split(",");
  result1.textContent = arrNum.reduce((sum, el) => sum + +el, 0);
});
// #3
// Дан абзац и кнопка. Каждое нажатие на кнопку добавляет новый инпут. В инпуты вводятся числа. Сделайте так, чтобы по мере ввода чисел в инпуты в абзац выводилась сумма введеных чисел.

const taskContainer3 = document.querySelector(".task_6-5-3");

const subBtn1 = taskContainer3.querySelector("#subBtn");
const result2 = taskContainer3.querySelector("#result");
const arr = [];
subBtn1.addEventListener("click", () => {
  const input = document.createElement("input");
  input.style.display = "block";
  input.type = "number";
  taskContainer3.appendChild(input);

  arr.push(input);
  input.addEventListener("input", () => {
    result2.textContent = arr.reduce((sum, el) => sum + +el.value, 0);
  });
});
// #4
// Дано произвольное количество инпутов и кнопка. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел и выведите в текст кнопки.

const taskContainer4 = document.querySelector(".task_6-5-4");

const inputNumbers = taskContainer4.querySelectorAll(".inputNumbers");
const subBtn2 = taskContainer4.querySelector("#subBtn");

let arr1 = [];
inputNumbers.forEach((input) => arr.push(input));

subBtn2.addEventListener("click", () => {
  subBtn2.textContent = arr.reduce((sum, el) => sum + +el.value, 0);
  //   subBtn2.textContent = [...inputNumbers].reduce(
  //     (sum, el) => sum + +el.value,
  //     0
  //   );
});
// #5
// Даны два инпута, абзац и кнопка. В инпуты через запятую вводятся числа. По клику на кнопку выведите через запятую в абзац числа, которые есть в обоих инпутах.

const taskContainer5 = document.querySelector(".task_6-5-5");

const inputNumber1 = taskContainer5.querySelector("#inputNumber1");
const inputNumber2 = taskContainer5.querySelector("#inputNumber2");
const subBtn3 = taskContainer5.querySelector("#subBtn");
const result3 = taskContainer5.querySelector("#result");

inputNumber1.addEventListener("input", () => {
  inputNumber1.value = inputNumber1.value.replace(/[^0-9,]/g, "");
});
inputNumber2.addEventListener("input", () => {
  inputNumber2.value = inputNumber2.value.replace(/[^0-9,]/g, "");
});

subBtn3.addEventListener("click", () => {
  let arr1 = inputNumber1.value.split(",").map((el) => +el);
  let arr2 = inputNumber2.value.split(",").map((el) => +el);
  console.log(arr1);
  console.log(arr2);

  let finalArr = [];
  arr1.forEach((el) => {
    if (arr2.includes(el)) {
      finalArr.push(el);
    }
  });

  let set = new Set(finalArr);
  result3.textContent = [...set].join(", ");

  //   let set1 = new Set(arr1);
  //   let set2 = new Set(arr2);

  //   const final = [...set1].filter((el) => set2.has(el));
  //   result3.textContent = final;

  inputNumber1.value = "";
  inputNumber2.value = "";
});
