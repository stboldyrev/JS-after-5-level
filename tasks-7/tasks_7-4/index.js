// #1
// Дан ul. Выведите в него дни текущего месяца. Текущий день, а также выходные, выделите другими цветами.

const taskContainer1 = document.querySelector(".task_7-4-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const list = taskContainer1.querySelector("#list");

subBtn.addEventListener("click", () => {
  const date = new Date();
  const currentDay = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let day = 1; day <= daysInMonth; day++) {
    const dayInWeek = new Date(year, month, day).getDay();
    const li = document.createElement("li");
    li.textContent = day;
    if (day === currentDay) {
      li.style.color = "blue";
    } else if (dayInWeek === 6 || dayInWeek === 0) {
      li.style.color = "green";
    } else {
      li.style.color = "";
    }
    list.appendChild(li);
  }
});

// #2
// Дан абзац, содержащий текст со словами. Сделайте так, чтобы по клику на любое слово из этого абзаца, это слово выделялось красным цветом.

const taskContainer2 = document.querySelector(".task_7-4-2");

const paragraph = taskContainer2.querySelector("#paragraph");

const text = paragraph.textContent;
paragraph.textContent = "";
const words = text.trim().split(" ");
words.forEach((word) => {
  const span = document.createElement("span");
  span.textContent = word + " ";
  span.addEventListener("click", () => {
    span.style.color = "red";
  });
  paragraph.appendChild(span);
});
// #3
// Дан инпут и кнопка. В него вводится число из четного количества цифр. По клику на кнопку проверьте, что число представляет собой счастливый билет, то есть сумма половины цифр равна сумме второй половине цифр.

const taskContainer3 = document.querySelector(".task_7-4-3");

const inputNum = taskContainer3.querySelector("#inputNum");
const subBtn1 = taskContainer3.querySelector("#subBtn");
const result = taskContainer3.querySelector("#result");

subBtn1.addEventListener("click", () => {
  const value = inputNum.value.split("");
  console.log(value);
  if (value.length % 2 !== 0 || value.length === 0) {
    result.textContent = "Please, provide corrent number";
    return;
  }
  let count1 = 0;
  let count2 = 0;
  const half = value.length / 2;

  for (let i = 0; i < value.length; i++) {
    if (i < half) {
      count1 += +value[i];
    } else {
      count2 += +value[i];
    }
  }
  count1 === count2
    ? (result.textContent = "Sum is equal")
    : (result.textContent = "Sum is NOT equal");
  inputNum.value = "";
});
// #4
// Дан инпут. В него вводится текст. Сделайте так, чтобы в инпут нельзя было ввести больше десяти символов. При превышении количества, символы просто не должны вводиться.

const taskContainer4 = document.querySelector(".task_7-4-4");

const inputText = taskContainer4.querySelector("#inputText");

inputText.addEventListener("input", () => {
  if (inputText.value.length > 10) {
    inputText.value = inputText.value.slice(0, 10);
  }
});
// #5
// Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку сделайте так, чтобы в абзаце начал тикать обратный отсчет от введенного в инпут числа до нуля.

const taskContainer5 = document.querySelector(".task_7-4-5");

const inputNum1 = taskContainer5.querySelector("#inputNum");
const subBtn2 = taskContainer5.querySelector("#subBtn");
const result1 = taskContainer5.querySelector("#result");

subBtn2.addEventListener("click", () => {
  let value = +inputNum1.value;
  inputNum1.value = "";

  const intervalId = setInterval(() => {
    if (value >= 0) {
      result1.textContent = value--;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
});
// #6
// Напишите программу, которая сформирует следующий массив:
// [
// 	[1],
// 	[1, 2],
// 	[1, 2, 3],
// 	[1, 2, 3, 4, 5],
// 	[1, 2, 3, 4, 5, 6],
// ]

const taskContainer6 = document.querySelector(".task_7-4-6");

const subBtn3 = taskContainer6.querySelector("#subBtn");

subBtn3.addEventListener("click", () => {
  let arr = [];
  for (let i = -1; i < 5; i++) {
    let arr2 = [];

    for (let num = 1; num < i + 3; num++) {
      arr2.push(num);
    }
    if (arr2.length !== 4) {
      arr.push(arr2);
    }
  }

  console.log(arr);
});
