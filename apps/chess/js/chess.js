const createBoard = () => {
  console.log("--chess--");
  let str = ``;
  // for (let count = 0; count < 64; count++) {
  //   str += `<div class="slot">${count}</div>`;
  // }
  let slotClass = "white";
  for (let row = 0; row < 8; row++) {
    if (row % 2 == 0) {
      slotClass = "white";
    } else {
      slotClass = "black";
    }
    for (let column = 0; column < 8; column++) {
      let obj = { row: row, col: column, color: slotClass };
      let strObj = JSON.stringify(obj);
      str += `<div class="${"slot " + slotClass}"  data-obj=${strObj}>${
        row + " " + column
      }</div>`;
      if (slotClass == "white") {
        slotClass = "black";
      } else {
        slotClass = "white";
      }
    }
  }
  document.getElementById("chessboard").innerHTML = str;

  $(".slot").click(function (e) {
    e.stopPropagation();
    let strObj = $(this).attr("data-obj");
    let obj = JSON.parse(strObj);
    console.log(obj);
  });
};

createBoard();
