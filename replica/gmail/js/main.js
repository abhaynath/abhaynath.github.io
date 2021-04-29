import { arrCategoryList } from "./data/category_list.js";
import { arrContactList } from "./data/contact_list.js";
import { arrLeftFooter } from "./data/footer_list.js";
import { arrRightSidebar } from "./data/sideicon_list.js";
import { arrTabsList } from "./data/tabs_list.js";
import { arrToolIcons } from "./data/tools_list.js";
const createTabList = () => {
  let str = ``;
  arrTabsList.map((item) => {
    str += `  <div class="tab" id="${"tab_" + item.id}">
    <i class="${item.class}"></i>
    <div class="tabtitle">
      ${item.name}
      <span class="tag">New</span>
    </div>
  </div>`;
    return str;
  });
  document.getElementById("tabList").innerHTML = str;
};
const createEmailList = () => {
  let str = ``;
  for (let count = 0; count < 100; count++) {
    str += `<div class="row">
        <div class="icons">
          <i class="fa fa-check-square"></i>
          <i class="fa fa-check-circle"></i>
          <i class="fa fa-check"></i>
        </div>
        <div class="from">Undertaker</div>
        <div class="title">New Job opening</div>
        <div class="date">12 January</div>
      </div>`;
  }
  document.getElementById("divListMail").innerHTML = str;
};
const createMailCategories = () => {
  let str = ``;
  arrCategoryList.map((item) => {
    str += `  <div class="category" id="${item.id}">
    <i class="${item.class}"></i>
    <div class="title">${item.name}</div>
    <div class="count">1</div>
  </div>`;
    return str;
  });
  document.getElementById("mailCategory").innerHTML = str;
};
const createContactList = () => {
  let str = ``;
  arrContactList.map((item) => {
    str += `  <div class="category" id="${item.id}">
    <i class="${item.class}"></i>
    <div class="title">${item.name}</div>
    <div class="count">6</div>
  </div>`;
    return str;
  });
  document.getElementById("contactList").innerHTML = str;
};

const createLeftFooter = () => {
  let str = ``;

  arrLeftFooter.map((item) => {
    str += ` <i  id="${item.id}"class="${item.class}" title="${item.name}"></i>`;
    return str;
  });
  document.getElementById("leftFooter").innerHTML = str;
};

const createRightSidebar = () => {
  let str = ``;

  arrRightSidebar.map((item) => {
    str += ` <i  id="${item.id}"class="${item.class}" title="${item.name}"></i>`;
    return str;
  });
  document.getElementById("rightSidebar").innerHTML = str;
};

const createToolbar = () => {
  let str = ``;
  arrToolIcons.map((item) => {
    str += ` <i  id="${item.id}"class="${item.class}" title="${item.name}"></i>`;
    return str;
  });
  document.getElementById("divToolbar").innerHTML = str;
};
createContactList();
createMailCategories();
createEmailList();
createTabList();
createLeftFooter();
createRightSidebar();
createToolbar();
