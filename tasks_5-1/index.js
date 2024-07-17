// #1
// Даны два инпута, абзац и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите в абзац сумму этих чисел.

// const input1 = document.getElementById("numberInp1");
// const input2 = document.getElementById("numberInp2");
// const subBtn = document.getElementById("subBtn");
// const resultNum = document.getElementById("result");

// subBtn.addEventListener("click", function () {
//   const num1 = +input1.value;
//   const num2 = +input2.value;
//   const sum = num1 + num2;
//   resultNum.textContent = sum;
// });

// #2
// Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.

// const numberH2 = document.getElementById("numberH2");
// const subBtn2 = document.getElementById("subBtn2");

// subBtn2.addEventListener("click", function () {
//   const num1 = +numberH2.textContent;
//   const sum = num1 ** 2;
//   numberH2.textContent = sum;
// });
// #3
// Дан абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.

// const numberParagraph1 = document.getElementById("numberParagraph1");
// const numberParagraph2 = document.getElementById("numberParagraph2");
// const sumOfParagraph = document.getElementById("sumOfParagraph");
// const subBtn3 = document.getElementById("subBtn3");

// subBtn3.addEventListener("click", function () {
//   const num1 = +numberParagraph1.textContent;
//   const num2 = +numberParagraph2.textContent;
//   const sum = num1 + num2;
//   sumOfParagraph.textContent = sum;
// });
// #4
// Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его значение возводилось в квадрат.
// const numberParagraph = document.querySelectorAll(".numberParagraph");

// numberParagraph.forEach((p) => {
//   p.addEventListener("click", function () {
//     const num1 = +p.textContent;
//     const sum = num1 ** 2;
//     p.textContent = sum;
//   });
// });

// #5
// Даны инпуты, в которые вводятся числа. Сделайте так, чтобы по потери фокуса в любом инпуте его значение возводилось в квадрат.

// const inputNum = document.querySelectorAll(".numberInp");

// inputNum.forEach((input) =>
//   input.addEventListener("blur", function () {
//     const num = +input.value;
//     input.value = num ** 2;
//   })
// );
