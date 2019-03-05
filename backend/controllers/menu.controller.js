import models from '../models/index';

const MenuController = {

    fetchAllMenus(req, res){
        models.Menu.findAll().then(menus => {
            return res.json({
                status: 'success',
                data: menus
            }).status(200);
        })
        .catch(err => console.log(err));
    },

    addAMenu(req, res){
        /*
            Expect json of format
            {
                name: "random",
                day" "day"
            }
         */

         const newMenu = req.body;
         models.Menu.create({
            name: newMenu.name,
            day: newMenu.day

        }).then(menus => {
           return res.json({
               status: 'success',
               data: menus
            }).status(201);
        }).catch(err => console.log(err));
    },

}

export default MenuController;