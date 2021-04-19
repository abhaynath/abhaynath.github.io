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
  <i  id="${arrTaskbarIcons[count].id}"class="${arrTaskbarIcons[count].icon}" title="${arrTaskbarIcons[count].name}"> </i>
  `;
    }
    $("#taskbar_icons").html(str);

    $("#tsk_windows").click((e) => {
      e.stopPropagation();
      $("#startMenu").toggle();
    });
  }

  function createAllAppsIcon() {
    let list = ObjStartMenuIcons.all_apps.list;

    let str = ``;
    for (let count = 0; count < list.length; count++) {
      let obj = list[count];

      let apps = obj.apps;

      let strApp = ``;
      for (let j = 0; j < apps.length; j++) {
        let folderIcon = "";
        if (apps[j].type == "folder") {
          folderIcon = ` <i class="fas fa-angle-down"></i>`;
        }
        strApp += ` <div class="${apps[j].type}">
        <i class="${apps[j].icon}"></i>
        <div class="apptitle">${apps[j].name}</div>
       ${folderIcon}
      </div>`;
      }

      str += `
      <div class="group">
      <div class="groupTitle">${obj.title}</div>
      <div class="groupApps">${strApp}
      
      </div>
    </div>
  `;
    }
    $("#divAllAppsList").html(str);
    $("#startMenu").hide();
  }

  function initEventHandlers() {
    $("#conWallpaper").click((e) => {
      e.stopPropagation();
      $("#startMenu").hide();
    });
  }
  instance.createDesktopIcons = createDesktopIcons;
  instance.createTaskbar = createTaskbar;
  instance.createAllAppsIcon = createAllAppsIcon;
  instance.initEventHandlers = initEventHandlers;
  return instance;
})();

UIManager.createDesktopIcons();
UIManager.createTaskbar();
UIManager.createAllAppsIcon();
UIManager.initEventHandlers();
