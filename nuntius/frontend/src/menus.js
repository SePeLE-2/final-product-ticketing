const menus = [];
const addMenu = (menu) => {
  menus.push(menu);
};

addMenu({
        route: '/article',
        label: 'Article',
        permission: '',
});

addMenu({
    route: '/ticket',
    label: 'Tickets',
    permission: '',
})

addMenu({
    route: '/event',
    label: 'Event',
    permission: '',
})

addMenu({
    route: '/report',
    label: 'Report',
    permission: '',
})

const addSubMenu = (label, subMenu, menu = menus) => {
  for (const item of menu) {
    if (item.label === label) {
      item.subMenus.push(subMenu);
      return;
    }
    if (item.subMenus) {
      addSubMenu(label, subMenu, item.subMenus);
    }
  }
};

export const settingsMenu = [
  {
    route: '#',
    label: 'Pengaturan',
    permission: 'administrator',
    subMenus: [
      {
        route: '/settings/appearance',
        label: 'Pengaturan Tampilan',
        permission: 'administrator',
      },
      {
        route: '/settings/role',
        label: 'Pengaturan Role',
        permission: 'administrator',
      },
      {
        route: '/settings/user',
        label: 'Pengaturan User',
        permission: 'administrator',
      },
    ]
  },
]

export default menus;
