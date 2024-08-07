// #1
// Даны теги li с числами, инпут и кнопка. По нажатию на кнопку найдите сумму чисел и выведите их в инпут.

const taskContainer1 = document.querySelector(".task_5-7-1");

const liNum = taskContainer1.querySelectorAll(".liNum");
const subBtn = taskContainer1.querySelector("#subBtn");
const inputLi = taskContainer1.querySelector("#inputLi");

subBtn.addEventListener("click", function () {
  let arrLi = [];
  liNum.forEach((li) => arrLi.push(+li.textContent));
  inputLi.value = arrLi.reduce((sum, el) => sum + el, 0);
});
// #2
// Даны теги li с числами и кнопка. По нажатию на кнопку увеличьте все числа в тегах li на единицу.

const taskContainer2 = document.querySelector(".task_5-7-2");

const liNum1 = taskContainer2.querySelectorAll(".liNum");
const subBtn1 = taskContainer2.querySelector("#subBtn");

subBtn1.addEventListener("click", function () {
  liNum1.forEach((li) => {
    li.textContent = +li.textContent + 1;
  });
});
// #3
// Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку получите массив делителей числа и выведите их в абзац через запятую.

const taskContainer3 = document.querySelector(".task_5-7-3");

const inputNum = taskContainer3.querySelector("#inputNum");
const subBtn2 = taskContainer3.querySelector("#subBtn");
const result = taskContainer3.querySelector("#result");

subBtn2.addEventListener("click", function () {
  let arr = [];
  const num = +inputNum.value;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }

  result.textContent = arr.join(",");
});
// #4
// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст переворачивался.

const taskContainer4 = document.querySelector(".task_5-7-4");

const paragraphReverse = taskContainer4.querySelectorAll(".paragraphReverse");

paragraphReverse.forEach((paragraph) =>
  paragraph.addEventListener("click", () => {
    paragraph.textContent = paragraph.textContent.split("").reverse().join("");
  })
);
// #5
// В инпут вводится число из 6-ти цифр. По нажатию на кнопку проверьте, равна ли сумма первых трех цифр сумме вторых трех цифр.

const taskContainer5 = document.querySelector(".task_5-7-5");

const inputNum1 = taskContainer5.querySelector("#inputNum");
const subBtn3 = taskContainer5.querySelector("#subBtn");
const result1 = taskContainer5.querySelector("#result");

subBtn3.addEventListener("click", () => {
  let arrNum = inputNum1.value.split("");
  let count1 = 0;
  let count2 = 0;
  if (arrNum.length !== 6) {
    result1.textContent = "Number has less or more than 6 digits";
  } else {
    for (let i = 0; i < arrNum.length; i++) {
      if (i < 3) {
        count1 += +arrNum[i];
      } else {
        count2 += +arrNum[i];
      }
    }
    count1 === count2
      ? (result1.textContent = "Sum is equal")
      : (result1.textContent = "Sum is NOT equal");
  }
});
