import { arrDesktopIcons } from "./data/desktop_icons.js";
import { ObjStartMenuIcons } from "./data/start_menu_icons.js";
import { arrTaskbarIcons } from "./data/taskbar_icons.js";

console.log("--ObjStartMenuIcons--", ObjStartMenuIcons);
var UIManager = (function () {
  var instance = {};

  function createDesktopIcons() {
    let str = ``;
    for (let count = 0; count < arrDesktopIcons.length; count++) {
      str += `<div class="icon" title="${arrDesktopIcons[count].name}">
  <i class="${arrDesktopIcons[count].icon} flt"> </i>
  <div class="title"> ${arrDesktopIcons[count].name}</div>
 </div>`;
    }
    $("#iconGrid").html(str);
  }

  function createTaskbar() {
    let str = ``;
    for (let count = 0; count < arrTaskbarIcons.length; count++) {
      str += `
  <i class="${arrTaskbarIcons[count].icon}" title=" ${arrTaskbarIcons[count].name}"> </i>
  `;
    }
    $("#taskbar").html(str);
  }

  instance.createDesktopIcons = createDesktopIcons;
  instance.createTaskbar = createTaskbar;
  return instance;
})();

UIManager.createDesktopIcons();
UIManager.createTaskbar();
