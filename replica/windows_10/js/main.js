import { arrDesktopIcons } from "./data/desktop_icons.js";
console.log(arrDesktopIcons);

let str = ``;
for (let count = 0; count < arrDesktopIcons.length; count++) {
  str += `<div class="icon">
  <i class="${arrDesktopIcons[count].icon} flt"> </i>
  <div class="title"> ${arrDesktopIcons[count].name}</div>
 </div>`;
}
$("#iconGrid").html(str);
