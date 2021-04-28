const createTabList = () => {
  let arr = [
    {
      id: "1",
      name: "Inbox",
      class: "fas fa-user",
    },
    {
      id: "2",
      name: "Primary",
      class: "fas fa-user",
    },
    {
      id: "3",
      name: "Sent",
      class: "fas fa-user",
    },
  ];
  let str = ``;
  arr.map((item) => {
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
  let arr = [
    {
      id: "cat_1",
      name: "Inbox",
      class: "fas fa-user",
    },
    {
      id: "cat_2",
      name: "Sent",
      class: "fas fa-box",
    },
    {
      id: "cat_3",
      name: "Draft",
      class: "fas fa-user",
    },
  ];

  let str = ``;
  arr.map((item) => {
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
  let arr = [
    {
      id: "con_1",
      name: "Virat Kohli",
      class: "fas fa-user",
    },
    {
      id: "con_2",
      name: "Rohit Sharma",
      class: "fas fa-box",
    },
    {
      id: "con_3",
      name: "Shikhar Dhawan",
      class: "fas fa-user",
    },
  ];

  let str = ``;
  arr.map((item) => {
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
  let arr = [
    {
      id: "lf_1",
      name: "Virat Kohli",
      class: "fas fa-user",
    },
    {
      id: "lf_2",
      name: "Rohit Sharma",
      class: "fas fa-box",
    },
    {
      id: "lf_3",
      name: "Shikhar Dhawan",
      class: "fas fa-user",
    },
  ];
  arr.map((item) => {
    str += ` <i  id="${item.id}"class="${item.class}" title="${item.name}"></i>`;
    return str;
  });
  document.getElementById("leftFooter").innerHTML = str;
};

const createRightSidebar = () => {
  let str = ``;
  let arr = [
    {
      id: "rt_1",
      name: "Virat Kohli",
      class: "fas fa-user",
    },
    {
      id: "rt_2",
      name: "Rohit Sharma",
      class: "fas fa-box",
    },
    {
      id: "rt_3",
      name: "Shikhar Dhawan",
      class: "fas fa-user",
    },
  ];
  arr.map((item) => {
    str += ` <i  id="${item.id}"class="${item.class}" title="${item.name}"></i>`;
    return str;
  });
  document.getElementById("rightSidebar").innerHTML = str;
};
createContactList();
createMailCategories();
createEmailList();
createTabList();
createLeftFooter();
createRightSidebar();
