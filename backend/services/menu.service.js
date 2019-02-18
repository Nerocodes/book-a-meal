import dummyData from '../utils/dummyData';
import Menu from '../models/menu.model';

const MenuService = {

    fetchMenu(day) {
        const validMenus = dummyData.menus.map((menu) => {
            const newMenu = new Menu();
            newMenu.id = menu.id;
            newMenu.name = menu.name;
            newMenu.meals = menu.meals;
            newMenu.day = menu.day;
            return newMenu;
        });

        const filteredMenus = validMenus.filter(menu => menu.day == day );

        return filteredMenus;
    },

    addMenu(menu){
        const menuLength = dummyData.menus.length;
        const lastId = dummyData.menus[menuLength - 1].id;
        const newId = lastId + 1;
        menu.id = newId;

        dummyData.menus.push(menu);

        return menu;
    },

    // updateMenu(meal, id){
    // },

    // deleteMenu(id){        
    // }

};

export default MenuService;