import models from '../models/index';

const MealController = {

    fetchAllMeals(req, res){
        models.Meal.findAll().then(meals => {
            return res.json({
                status: 'success',
                data: meals
            }).status(200);
        })
        .catch(err => console.log(err));
    },

    addAMeal(req, res){
        /*
            Expect json of format
            {
                name: "random",
                description: "random",
                price: 300
            }
         */

         const newMeal = req.body;
         models.Meal.create({
            name: newMeal.name,
            description: newMeal.description,
            price: newMeal.price

        }).then(meals => {
           return res.json({
               status: 'success',
               data: meals
            }).status(201);
        }).catch(err => console.log(err));
    },

    getSingleMeal(req, res){
        const id = req.params.id;
        models.Meal.findById(id).then(meals => {
            return res.json({
                status: 'success',
                data: meals
             }).status(200);
        }).catch(err => console.log(err));
    },

    updateAMeal(req, res){
        const id = req.params.id;
        const newMeal = req.body;
        models.Meal.findById(id).then(meals => {
            meals.update({
                name: newMeal.name,
                description: newMeal.description,
                price: newMeal.price
            }).then(meal => {
                return res.json({
                    status: 'success',
                    data: meal
                 }).status(201);
            });
        }).catch(err => console.log(err));
    },

    deleteAMeal(req, res){
        const id = req.params.id;
        models.Meal.findById(id).then(users => {
            users.destroy().then(() => {
                return res.json({
                    status: 'success',
                    data: 'Deleted Successfully'
                 }).status(201);
            });
        }).catch(err => console.log(err));
    }

}

export default MealController;