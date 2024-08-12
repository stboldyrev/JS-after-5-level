// #1
// Дано меню со ссылками. Сделайте так, чтобы по клику на ссылку меню под ней выпадало подменю.

const taskContainer1 = document.querySelector(".task_8-9-1");

const menuItems = taskContainer1.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const subMenu = item.querySelector(".submenu");
    // // Проверка, чтобы не закрыть текущее подменю
    // menuItems.forEach((otherItem) => {
    //   if (otherItem !== item) {
    //     const otherSubMenu = otherItem.querySelector(".submenu");
    //     otherSubMenu.style.display = "none";
    //   }
    // });
    if (subMenu.style.display === "none" || subMenu.style.display === "") {
      subMenu.style.display = "block";
    } else {
      subMenu.style.display = "none";
    }
  });
});
// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     const nav = document.createElement("nav");
//     const ul = document.createElement("ul");
//     for (let i = 1; i <= 3; i++) {
//       const li = document.createElement("li");
//       const a = document.createElement("a");
//       a.href = "#";
//       a.textContent = `sub nav ${i}`;
//       li.appendChild(a);
//       ul.appendChild(li);
//     }
//     nav.appendChild(ul);
//     link.appendChild(nav);
//   });
// });
// #2
// Дан абзац со словами и кнопка. По клику на кнопку покрасьте каждое слово в случайный цвет так, чтобы у соседних абзацев были разные цвета.

const taskContainer2 = document.querySelector(".task_8-9-2");

const subBtn = taskContainer2.querySelector("#subBtn");
const paragraph = taskContainer2.querySelector("#paragraph");

const colors = [
  "#FF5733", // Красно-оранжевый
  "#33FF57", // Зелёный
  "#3357FF", // Синий
  "#FF33A8", // Розовый
  "#FFC300", // Жёлтый
  "#DAF7A6", // Светло-зелёный
  "#581845", // Тёмно-фиолетовый
  "#C70039", // Красный
  "#900C3F", // Бордовый
  "#2ECC71", // Бирюзовый
  "#2980B9", // Тёмно-синий
  "#8E44AD", // Фиолетовый
  "#F39C12", // Оранжевый
  "#E74C3C", // Коралловый
  "#3498DB", // Голубой
];

subBtn.addEventListener("click", () => {
  const text = paragraph.textContent.trim().split(" ");
  paragraph.textContent = "";

  let lastColor = "";
  text.forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word;
    let getRandom;

    do {
      getRandom = Math.floor(Math.random() * colors.length);
    } while (colors[getRandom] === lastColor);

    span.style.color = colors[getRandom];
    lastColor = colors[getRandom];
    paragraph.appendChild(span);

    if (i < text.length - 1) {
      paragraph.appendChild(document.createTextNode(" "));
    }
  });
});
// #3
// Дан див. У этого дива есть крестик закрытия. Сделайте так, чтобы по клику на крестик, либо на любое место страницы вне дива, этот див прятался.

const taskContainer3 = document.querySelector(".task_8-9-3");

const myDiv = taskContainer3.querySelector("#myDiv");
const closeBtn = myDiv.querySelector("#closeBtn");

// let isClicked = true;

// myDiv.addEventListener("click", () => {
//   isClicked = false;
// });
// document.addEventListener("click", () => {
//   if (isClicked) {
//     myDiv.style.display = "none";
//   }
//   isClicked = true;
// });

document.addEventListener("click", (event) => {
  if (event.target.id !== "myDiv" && myDiv.style.display !== "none") {
    myDiv.style.display = "none";
  }
});

closeBtn.addEventListener("click", () => {
  myDiv.style.display = "none";
});
// #4
// Дан текстареа и ul. В текстареа вводится текст. Сделайте так, чтобы по нажатию Shift + Enter каждая строка текста добавилась в список в виде отдельного тега li.

const taskContainer4 = document.querySelector(".task_8-9-4");

const textArea = taskContainer4.querySelector("#textArea");
const list = taskContainer4.querySelector("#list");

function runOnKeys(...keys) {
  let pressed = new Set();

  document.addEventListener("keydown", (event) => {
    pressed.add(event.key);

    for (let key of keys) {
      if (!pressed.has(key)) {
        return;
      }
    }

    pressed.clear();
    let textArr = textArea.value.trim().split("\n");

    textArr.forEach((word) => {
      if (word !== "") {
        const li = document.createElement("li");
        li.textContent = word;
        list.appendChild(li);
      }
    });
    textArea.value = "";
  });

  document.addEventListener("keyup", (event) => {
    pressed.delete(event.key);
  });
}

runOnKeys("Shift", "Enter");

{
  /* <p>Нажмите "Q" и "W" вместе (язык значения не играет).</p>

<script>
  function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);

      for (let code of codes) { // все ли клавиши из набора нажаты?
        if (!pressed.has(code)) {
          return;
        }
      }

      // да, все

      // во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
      // при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
      // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
      pressed.clear();

      func();
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });

  }

  runOnKeys(
    () => alert("Привет!"),
    "KeyQ",
    "KeyW"
  );
</script> */
}

// #5
// Дан такой список дел за определенную дату:
// let affairs = {
// 	'2019-12-31': ['массив дел'],
// 	'2018-11-29': ['массив дел'],
// 	'2018-11-30': ['массив дел'],
// 	'2018-12-27': ['массив дел'],
// 	'2019-12-29': ['массив дел'],
// 	'2019-12-30': ['массив дел'],
// 	'2018-12-30': ['массив дел'],
// 	'2018-12-31': ['массив дел'],
// }
// Выведите на экран все дела за 2018 год.

const taskContainer5 = document.querySelector(".task_8-9-5");
const subBtn1 = taskContainer5.querySelector("#subBtn");

let affairs = {
  "2019-12-31": ["массив дел"],
  "2018-11-29": ["массив дел"],
  "2018-11-30": ["массив дел"],
  "2018-12-27": ["массив дел"],
  "2019-12-29": ["массив дел"],
  "2019-12-30": ["массив дел"],
  "2018-12-30": ["массив дел"],
  "2018-12-31": ["массив дел"],
};

subBtn1.addEventListener("click", () => {
  let arr = [];
  Object.keys(affairs).forEach((key) => {
    if (+key.split("-")[0] === 2018) {
      arr.push(affairs[key]);
    }
  });
  console.log(arr);

  //   let affairs2018 = Object.keys(affairs)
  //     .filter((key) => key.startsWith("2018"))
  //     .map((key) => affairs[key]);
  //   console.log(affairs2018);
});
