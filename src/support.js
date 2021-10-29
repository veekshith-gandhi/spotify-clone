var arr1 = [
  "clickDrop1",
  "clickDrop2",
  "clickDrop3",
  "clickDrop4",
  "clickDrop5",
  "clickDrop6",
];

var i = 1;
arr1.forEach((el) => {
  let id_name = `drop${i}`;
  console.log(el);
  let dropHeader = document.getElementById(el);
  dropHeader.addEventListener("click", function () {
    dropBtn(id_name);
  });
  i++;
});

function dropBtn(id_name) {
  if (id_name === "drop1") {
    funShow(id_name);
  } else if (id_name === "drop2") {
    funShow(id_name);
  } else if (id_name === "drop3") {
    funShow(id_name);
  } else if (id_name === "drop4") {
    funShow(id_name);
  } else if (id_name === "drop5") {
    funShow(id_name);
  } else if (id_name === "drop6") {
    funShow(id_name);
  }
}

function funShow(id) {
  document.getElementById(id).classList.toggle("show");
}
