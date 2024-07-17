// #1
// Даны теги li с числами, инпут и кнопка. По нажатию на кнопку найдите сумму чисел и выведите их в инпут.
const taskContainer1 = document.querySelector(".task_5-7-1");
const liElements1 = taskContainer1.querySelectorAll("li");
const sumInput = taskContainer1.querySelector("#sumInput");
const subBtn1 = taskContainer1.querySelector("#subBtn1");

subBtn1.addEventListener("click", function () {
  let sum = 0;
  liElements1.forEach((li) => {
    sum += parseInt(li.textContent);
  });
  sumInput.value = sum;
});

// #2
// Даны теги li с числами и кнопка. По нажатию на кнопку увеличьте все числа в тегах li на единицу.
const taskContainer2 = document.querySelector(".task_5-7-2");
const liElements2 = taskContainer2.querySelectorAll("li");
const subBtn2 = taskContainer2.querySelector("#subBtn2");

subBtn2.addEventListener("click", function () {
  liElements2.forEach((li) => {
    let currentValue = parseInt(li.textContent);
    li.textContent = currentValue + 1;
  });
});

// #3
// Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку получите массив делителей числа и выведите их в абзац через запятую.
const taskContainer3 = document.querySelector(".task_5-7-3");
const inputNumber = taskContainer3.querySelector("#inputNumber");
const divisors = taskContainer3.querySelector("#divisors");
const subBtn3 = taskContainer3.querySelector("#subBtn3");

subBtn3.addEventListener("click", function () {
  const number = parseInt(inputNumber.value);
  let divisorsArray = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisorsArray.push(i);
    }
  }
  divisors.textContent = divisorsArray.join(", ");
});

// #4
// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст переворачивался.
const taskContainer4 = document.querySelector(".task_5-7-4");
const paragraphs = taskContainer4.querySelectorAll("p");

paragraphs.forEach((p) => {
  p.addEventListener("click", function () {
    let reversedText = p.textContent.split("").reverse().join("");
    p.textContent = reversedText;
  });
});

// #5
// В инпут вводится число из 6-ти цифр. По нажатию на кнопку проверьте, равна ли сумма первых трех цифр сумме вторых трех цифр.
const taskContainer5 = document.querySelector(".task_5-7-5");
const numberInput = taskContainer5.querySelector("#numberInput");
const result5 = taskContainer5.querySelector("#result5");
const subBtn5 = taskContainer5.querySelector("#subBtn5");

subBtn5.addEventListener("click", function () {
  const number = numberInput.value.trim();
  if (number.length !== 6 || isNaN(number)) {
    result5.textContent = "Введите корректное число из 6 цифр.";
    return;
  }

  const firstThree =
    parseInt(number[0]) + parseInt(number[1]) + parseInt(number[2]);
  const lastThree =
    parseInt(number[3]) + parseInt(number[4]) + parseInt(number[5]);

  if (firstThree === lastThree) {
    result5.textContent = "Суммы первых и вторых трех цифр равны.";
  } else {
    result5.textContent = "Суммы первых и вторых трех цифр не равны.";
  }
});
