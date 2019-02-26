import MenuService from '../services/menu.service';

const MenuController = {

    fetchAllMenus(req, res){
        const todate = new Date();
        let today = todate.getDay();
        switch(today) {
            case 0:
                today = 'Sunday';
                break;
            case 1:
                today = 'Monday';
                break;
            case 2:
                today = 'Tuesday';
                break;
            case 3:
                today = 'Wednesday';
                break;
            case 4:
                today = 'Thursday';
                break;
            case 5:
                today = 'Friday';
                break;
            case 6:
                today = 'Saturday';
                break;
        }
        const allMenus = MenuService.fetchMenu(today);
        return res.json({
            status: 'success',
            data: allMenus
        }).status(200);
    },

    addAMenu(req, res){
        /*
            Expect json of format
            {
                name: "random",
                description: "random",
                price: 300
            }
         */

         const newMenu = req.body;
         const createdMenu = MenuService.addMenu(newMenu);
         return res.json({
            status: 'success',
            data: createdMenu
         }).status(201);
    },

}

export default MenuController;