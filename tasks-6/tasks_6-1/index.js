// #1
// Дана кнопка, пустой список ul и массив. По клику на кнопку заполните список элементами этого массива.

const taskContainer1 = document.querySelector(".task_6-1-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const list = taskContainer1.querySelector("#list");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

subBtn.addEventListener("click", () => {
  list.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.textContent = arr[i];
    list.appendChild(li);
  }
});
// #2
// Дана кнопка и пустой список ul. По клику на кнопку заполните список числами от 1 до 10.

const taskContainer2 = document.querySelector(".task_6-1-2");

const subBtn1 = taskContainer2.querySelector("#subBtn");
const list1 = taskContainer2.querySelector("#list");

subBtn1.addEventListener("click", () => {
  list1.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    list1.appendChild(li);
  }
});
// #3
// Дана кнопка и пустой список ul. По клику на кнопку добавьте в конец списка новый пункт с текстом '!'.

const taskContainer3 = document.querySelector(".task_6-1-3");

const subBtn2 = taskContainer3.querySelector("#subBtn");
const list2 = taskContainer3.querySelector("#list");

subBtn2.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = "!";
  list2.appendChild(li);
});
// #4
// Дана кнопка и пустой список ul. По клику на кнопку добавьте в конец списка новый пункт с порядковым номером.

const taskContainer4 = document.querySelector(".task_6-1-4");

const subBtn3 = taskContainer4.querySelector("#subBtn");
const list3 = taskContainer4.querySelector("#list");

let currentNum = 1;
subBtn3.addEventListener("click", () => {
  let li = document.createElement("li");
  console.log(currentNum);
  li.textContent = currentNum;
  list3.appendChild(li);
  currentNum++;
});
// #5
// Дана кнопка и список ul, заполненный пунктами. По клику на кнопку удалите последний пункт списка.

const taskContainer5 = document.querySelector(".task_6-1-5");

const subBtn4 = taskContainer5.querySelector("#subBtn");
const list4 = taskContainer5.querySelector("#list");
const item = list4.getElementsByClassName("item");

subBtn4.addEventListener("click", () => {
  //   list4.removeChild(item[item.length - 1]);
  list4.removeChild(list4.lastElementChild);
});
// #6
// Дана кнопка и список ul, заполненный пунктами. По клику на кнопку удалите случайный пункт списка.

const taskContainer6 = document.querySelector(".task_6-1-6");

const subBtn5 = taskContainer6.querySelector("#subBtn");
const list5 = taskContainer6.querySelector("#list");

subBtn5.addEventListener("click", () => {
  let items = [...list5.getElementsByClassName("item")];
  if (items.length !== 0) {
    const randomNum = Math.floor(Math.random() * items.length);
    list5.removeChild(items[randomNum]);
  } else {
    console.log("Nothing to remove");
  }

  //   const fn = () => {
  //     let items = [...list5.getElementsByClassName("item")];
  //     console.log(items);
  //     if (items.length !== 0) {
  //       const randomNum = Math.floor(Math.random() * items.length);
  //       if (items.includes(items[randomNum])) {
  //         list5.removeChild(items[randomNum]);
  //         console.log(list5);
  //         console.log(items);
  //       } else {
  //         fn();
  //       }
  //     } else {
  //       console.log("Nothing to remove");
  //     }
  //   };
  //   fn();
});
