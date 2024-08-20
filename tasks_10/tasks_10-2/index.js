// #1
// Дана таблица. При клике на ячейку она активируется каким-нибудь цветом. Сделайте так, чтобы ячейки вокруг активированной не активировались.

const taskContainer1 = document.querySelector(".task_10-2-1");
const table = taskContainer1.querySelector("#myTable");
const tds = table.querySelectorAll("td");

tds.forEach((td) => {
  td.addEventListener("click", () => {
    tds.forEach((cell) => {
      cell.classList.remove("active");
    });
    td.classList.add("active");
  });
});

// #2
// Дана таблица. Сделайте так, чтобы каждую секунду активировалась случайная ячейка таблицы. Одна ячейка не может быть активной два раза подряд.

const taskContainer2 = document.querySelector(".task_10-2-2");
const table1 = taskContainer2.querySelector("#myTable");
const tds1 = table1.querySelectorAll("td");

let lastActiveIndex = null;

setInterval(() => {
  tds1.forEach((td) => {
    td.classList.remove("active");
  });

  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * tds1.length);
  } while (lastActiveIndex === newIndex);

  tds1[newIndex].classList.add("active");
  lastActiveIndex = newIndex;
}, 1000);
// #3
// Дан текстареа. Как известно, его размер можно менять, потянув за уголок. Сделайте так, чтобы можно было изменить размер этого текстареа, а затем обновить страницу - и изменения не должны пропасть.

const taskContainer3 = document.querySelector(".task_10-2-3");

const textArea = taskContainer3.querySelector("#textArea");

const objArea = JSON.parse(localStorage.getItem("objArea")) || {
  width: textArea.offsetWidth + "px",
  height: textArea.offsetHeight + "px",
};

textArea.style.width = objArea.width;
textArea.style.height = objArea.height;

textArea.addEventListener("mouseup", () => {
  const newSize = {
    width: textArea.style.width,
    height: textArea.style.height,
  };
  localStorage.setItem("objArea", JSON.stringify(newSize));
});

// #4
// Дан инпут и кнопка. По клику на кнопку выведите список список ul всех избыточных чисел из промежутка, заданном значениями инпутов.

const taskContainer4 = document.querySelector(".task_10-2-4");

const inputNum1 = taskContainer4.querySelector("#inputNum1");
const inputNum2 = taskContainer4.querySelector("#inputNum2");
const subBtn = taskContainer4.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  if (inputNum1.value === "" || inputNum2.value === "") {
    console.log("Please provide correct num");
    return;
  }
  const num1 = +inputNum1.value;
  const num2 = +inputNum2.value;
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);

  const existingUl = taskContainer4.querySelector("ul");
  if (existingUl) {
    taskContainer4.removeChild(existingUl);
  }

  const ul = document.createElement("ul");

  for (let i = min; i <= max; i++) {
    let arr = [];
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        arr.push(j);
      }
    }
    if (arr.reduce((sum, el) => sum + el, 0) > i) {
      const li = document.createElement("li");
      li.textContent = i;
      ul.appendChild(li);
    }
  }

  taskContainer4.appendChild(ul);
});

// #5
// Дана квадратная HTML таблица произвольного размера. По нажатию на кнопку заполните половину таблицу следующим образом:

const taskContainer5 = document.querySelector(".task_10-2-5");
const table2 = taskContainer5.querySelector("#myTable");
const trs = table2.querySelectorAll("tr");
const subBtn1 = taskContainer5.querySelector("#subBtn");

subBtn1.addEventListener("click", () => {
  let counter = 0;
  trs.forEach((tr) => {
    const tds = tr.querySelectorAll("td");

    for (let i = 0; i < tds.length - counter; i++) {
      tds[i].textContent = "+";
    }
    counter++;
  });
});
