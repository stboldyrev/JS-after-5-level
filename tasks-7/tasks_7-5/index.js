// #1
// Дана кнопка. По клику на кнопку плавно прокрутите окно браузера до самого низа.

const taskContainer1 = document.querySelector(".task_7-5-1");

const subBtn = taskContainer1.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});
// #2
// Даны кнопки и дивы. Каждая кнопка соответствует своему диву. Сделайте так, чтобы по первому клику на кнопку открывался ее див, а по второму клику - скрывался.

const taskContainer2 = document.querySelector(".task_7-5-2");

const subBtnPair1 = taskContainer2.querySelector("#subBtnPair1");
const subBtnPair2 = taskContainer2.querySelector("#subBtnPair2");
const divPair1 = taskContainer2.querySelector("#divPair1");
const divPair2 = taskContainer2.querySelector("#divPair2");
const div = taskContainer2.getElementsByTagName("div");

for (let i = 0; i < div.length; i++) {
  div[i].style.display = "none";
}
subBtnPair1.addEventListener("click", () => {
  divPair1.style.display === "none"
    ? (divPair1.style.display = "")
    : (divPair1.style.display = "none");
});

subBtnPair2.addEventListener("click", () => {
  divPair2.style.display === "none"
    ? (divPair2.style.display = "")
    : (divPair2.style.display = "none");
});

// #3
// Сделайте функцию, которая будет принимать строку на русском языке, а возвращать ее транслит.

const taskContainer3 = document.querySelector(".task_7-5-3");

const inputText = taskContainer3.querySelector("#inputText");
const subBtn1 = taskContainer3.querySelector("#subBtn");
const result = taskContainer3.querySelector("#result");
const translitMap = {
  А: "A",
  Б: "B",
  В: "V",
  Г: "G",
  Д: "D",
  Е: "E",
  Ё: "E",
  Ж: "Zh",
  З: "Z",
  И: "I",
  Й: "Y",
  К: "K",
  Л: "L",
  М: "M",
  Н: "N",
  О: "O",
  П: "P",
  Р: "R",
  С: "S",
  Т: "T",
  У: "U",
  Ф: "F",
  Х: "Kh",
  Ц: "Ts",
  Ч: "Ch",
  Ш: "Sh",
  Щ: "Shch",
  Ы: "Y",
  Э: "E",
  Ю: "Yu",
  Я: "Ya",
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "e",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ы: "y",
  э: "e",
  ю: "yu",
  я: "ya",
};

subBtn1.addEventListener("click", () => {
  if (
    inputText.value === "" ||
    !Object.keys(translitMap).some((key) => inputText.value.includes(key))
  ) {
    result.textContent = "Please provide corrent information";
    return;
  }
  const value = inputText.value;
  inputText.value = "";

  const translate = (text) => {
    const arr = text.trim().split("");
    const newArr = [];
    arr.forEach((letter) => {
      Object.entries(translitMap).forEach(([key, value]) => {
        if (letter == key) {
          letter = value;
          newArr.push(letter);
        }
      });
    });
    return (result.textContent = newArr.join(""));
  };

  translate(value);
});
// #4
// Напишите программу, которая сформирует следующий массив:
// [
// 	['x', 'x', 'x', 'x', 'x'],
// 	['x', 'x', 'x', 'x'],
// 	['x', 'x', 'x'],
// 	['x', 'x'],
// 	['x'],
// ]

const taskContainer4 = document.querySelector(".task_7-5-4");

const subBtn2 = taskContainer4.querySelector("#subBtn");

subBtn2.addEventListener("click", () => {
  const arr = [];
  for (let i = 1; i < 6; i++) {
    const arr2 = [];
    for (let j = 0; j < i; j++) {
      arr2.push("x");
    }
    arr.push(arr2);
  }
  console.log(arr.reverse());
});
