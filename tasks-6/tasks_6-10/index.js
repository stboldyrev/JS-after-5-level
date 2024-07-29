// #1
// Дана кнопка, инпут и список ul, В инпут вводится текст. По клику на кнопку добавьте в список новую li с этим текстом, но только если этот текст больше текста последнего тега li из списка.

const taskContainer1 = document.querySelector(".task_6-10-1");

const subBtn = taskContainer1.querySelector("#subBtn");
const inputText = taskContainer1.querySelector("#inputText");
const list = taskContainer1.querySelector("#list");

subBtn.addEventListener("click", () => {
  if (inputText.value === "") {
    inputText.placeholder = "Please write something";
    return;
  }
  const value = inputText.value;
  const li = document.createElement("li");
  li.textContent = value;
  if (list.children.length === 0) {
    list.appendChild(li);
  } else {
    let lastUlChild = list.lastElementChild.textContent.length;
    if (li.textContent.length >= lastUlChild) {
      list.appendChild(li);
    }
  }
  inputText.value = "";
});
// #2
// Сделайте вручную HTML таблицу 8 на 8. По нажатию на кнопку покрасьте каждую четную ячейку в белый цвет, а нечетную - в черный.

const taskContainer2 = document.querySelector(".task_6-10-2");

const tableContainer = taskContainer2.querySelector("#myTable tbody");
const subBtn1 = taskContainer2.querySelector("#subBtn");
for (let i = 0; i < 8; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 8; j++) {
    const cell = document.createElement("td");
    row.appendChild(cell);
  }
  tableContainer.appendChild(row);
}
subBtn1.addEventListener("click", () => {
  const cells = taskContainer2.querySelectorAll("#myTable td");
  cells.forEach((cell, i) => {
    if ((i + 1) % 2 === 0) {
      cell.style.backgroundColor = "white";
    } else {
      cell.style.backgroundColor = "black";
    }
  });
});
// #3
// Напишите код, который выведет на экран таблицу умножения.

const taskContainer3 = document.querySelector(".task_6-10-3");

const tableContainer1 = taskContainer3.querySelector("#myTable tbody");
for (let i = 1; i < 10; i++) {
  const row = document.createElement("tr");
  for (let j = 1; j < 10; j++) {
    const cell = document.createElement("td");
    cell.textContent = i * j;
    row.appendChild(cell);
  }
  tableContainer1.appendChild(row);
}
// #4
// Даны текстареа, инпут и кнопка. В текстареа вводится текст со словами. В инпут вводится слово. По нажатию на кнопку выведите на экран, сколько раз встречается это слово в веденном тексте.

const taskContainer4 = document.querySelector(".task_6-10-4");

const textArea = taskContainer4.querySelector("#textArea");
const inputText1 = taskContainer4.querySelector("#inputText");
const subBtn2 = taskContainer4.querySelector("#subBtn");
const result = taskContainer4.querySelector("#result");

subBtn2.addEventListener("click", () => {
  if (textArea.value === "") {
    textArea.placeholder = "Please provide text";
    return;
  } else if (inputText1.value === "") {
    inputText1.placeholder = "Please provide text";
    return;
  }

  const textAreaContentArr = textArea.value.trim().split(" ");
  const value = inputText1.value.trim().toLowerCase();

  let counter = 0;
  textAreaContentArr.forEach((el) => {
    if (el.toLowerCase() === value) {
      counter++;
    }
  });

  result.textContent = counter;

  textArea.value = "";
  inputText1.value = "";
});
