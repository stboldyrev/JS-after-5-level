// #1
// Дан список ul. Сделайте так, чтобы по клику на любую li она удалялась из списка.

const taskContainer1 = document.querySelector(".task_6-4-1");

const items1 = taskContainer1.querySelectorAll(".items");

items1.forEach((item) => {
  item.addEventListener("click", () => {
    item.remove();
  });
});
// #2
// Дан список ul и инпут. Сделайте так, чтобы по потери фокуса инпутом его текст становился новым пунктом списка.

const taskContainer2 = document.querySelector(".task_6-4-2");

const list = taskContainer2.querySelector("#list");
const inputText = taskContainer2.querySelector("#inputText");

inputText.addEventListener("blur", () => {
  const value = inputText.value.trim();

  if (inputText.value !== "") {
    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
  }
  inputText.value = "";
});
// #3
// Дана таблица из трех колонок, три инпута и кнопка. Сделайте так, чтобы по клику на кнопку в таблицу добавлялся новый ряд с текстами ячеек из инпутов.

const taskContainer3 = document.querySelector(".task_6-4-3");

const tbody = taskContainer3.querySelector("tbody");
const input1 = taskContainer3.querySelector("#input1");
const input2 = taskContainer3.querySelector("#input2");
const input3 = taskContainer3.querySelector("#input3");
const subBtn = taskContainer3.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  const input1Value = input1.value;
  const input2Value = input2.value;
  const input3Value = input3.value;

  let newRow = document.createElement("tr");

  const cell1 = document.createElement("td");
  cell1.textContent = input1Value;
  cell1.style.border = "1px solid black";
  newRow.appendChild(cell1);

  const cell2 = document.createElement("td");
  cell2.textContent = input2Value;
  cell2.style.border = "1px solid black";
  newRow.appendChild(cell2);

  const cell3 = document.createElement("td");
  cell3.textContent = input3Value;
  cell3.style.border = "1px solid black";
  newRow.appendChild(cell3);

  tbody.appendChild(newRow);

  input1.value = "";
  input2.value = "";
  input3.value = "";
});

// #4
// Дан инпут и ul. В инпут вводится год. Выведите в список даты всех пятниц 13-е в заданном году.

const taskContainer4 = document.querySelector(".task_6-4-4");

const list1 = taskContainer4.querySelector("#list");
const inputYear = taskContainer4.querySelector("#inputYear");
const subBtn1 = taskContainer4.querySelector("#subBtn");

subBtn1.addEventListener("click", () => {
  list1.innerHTML = "";
  const yearValue = +inputYear.value;

  for (let month = 0; month < 12; month++) {
    const date = new Date(Date.UTC(yearValue, month, 13));
    if (date.getDay() === 5) {
      const li = document.createElement("li");
      li.textContent = date.toISOString().split("T")[0];
      list1.appendChild(li);
    }
  }
  inputYear.value = "";
});
