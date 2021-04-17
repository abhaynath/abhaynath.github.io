export const ObjStartMenuIcons = {
  default: {
    title: "Default",
    list: [
      {
        name: "Windows",
        icon: "fab fa-windows",
      },
    ],
  },
  all_apps: {
    title: "All Applications",
    list: [
      {
        title: "A",
        apps: [
          {
            name: "Adobe Creative Cloud",
            icon: "fab fa-chrome",
            type: "app",
          },
          {
            name: "Adobe Master Collection",
            icon: "fab fa-microsoft",
            type: "folder",
            apps: [
              {
                name: "Photoshop",
                icon: "fab fa-js",
                type: "app",
              },
              {
                name: "After Effects",
                icon: "fab fa-bootstrap",
                type: "app",
              },
            ],
          },
        ],
      },

      {
        title: "B",
        apps: [
          {
            name: "Blend for Visual Studio",
            icon: "fab fa-chrome",
            type: "app",
          },
          {
            name: "Blender",
            icon: "fab fa-microsoft",
            type: "folder",
            apps: [
              {
                name: "Blender",
                icon: "fab fa-js",
                type: "app",
              },
            ],
          },
        ],
      },
    ],
  },
  pinned_apps: {
    title: "Pinned Apps",
    list: [],
  },
};
