// #1
// Дан абзац и инпут. В абзаце через пробел написаны слова. В инпут вводится некоторое слово. По потери фокуса проверьте, есть ли такое слово в абзаце, и если нет - добавьте его.
const taskContainer1 = document.querySelector(".task_7-9-1");

const inputText = taskContainer1.querySelector("#inputText");
const paragraph = taskContainer1.querySelector("#paragraph");

inputText.addEventListener("blur", () => {
  const text = paragraph.textContent.trim().split(" ");
  const value = inputText.value.trim();
  const newArr = [];
  for (let i = 0; i < text.length; i++) {
    const currentWord = text[i].toLowerCase().replace(/[.,!?]/g, "");
    newArr.push(currentWord);
  }
  if (newArr.includes(value)) {
    console.log("Text from value contains in the text");
  } else {
    text.push(value);
  }
  paragraph.textContent = text.join(" ");
  inputText.value = "";
});
// #2
// Напишите программу, которая сформирует следующую строку:
// '-1-12-23-34-45-'

const taskContainer2 = document.querySelector(".task_7-9-2");

const subBtn = taskContainer2.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    if (i !== 0) {
      arr.push("-");
      arr.push(i.toString() + (i + 1).toString());
    }
  }
  arr.push("-");
  console.log(arr.join(""));
});
// #3
// Напишите программу, которая сформирует следующий массив:
// [
// 	12,
// 	34,
// 	56,
// 	78,
// 	90,
// ]
const taskContainer3 = document.querySelector(".task_7-9-3");

const subBtn1 = taskContainer3.querySelector("#subBtn");

subBtn1.addEventListener("click", () => {
  let arr = [];
  for (let i = 12; i <= 90; i += 22) {
    arr.push(i);
  }
  if (arr[arr.length - 1] !== 90) {
    arr.push(90);
  }
  console.log(arr);
});
// #4
// Дан следующая верстка:
// <a href="1.html">111</a>
//<a href="2.html">222</a>
//<a href="3.html">333</a>
//Получите содержимое адресов и текстов ссылок в виде следующей структуры:
// [
// 	{
// 		text: '111',
// 		href: '1.html',
// 	},
// 	{
// 		text: '222',
// 		href: '2.html',
// 	},
// 	{
// 		text: '333',
// 		href: '3.html',
// 	},
// ]

const taskContainer4 = document.querySelector(".task_7-9-4");

const subBtn2 = taskContainer4.querySelector("#subBtn");
const links = taskContainer4.querySelectorAll("a");

subBtn2.addEventListener("click", () => {
  let arr = [];
  links.forEach((link) => {
    let obj = {
      text: link.textContent,
      href: link.getAttribute("href"),
    };
    arr.push(obj);
  });
  console.log(arr);
});
