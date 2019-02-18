import MealService from '../services/meal.service';

const MealController = {

    fetchAllMeals(req, res){
        const allMeals = MealService.fetchAllMeals();
        return res.json({
            status: 'success',
            data: allMeals
        }).status(200);
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
         const createdMeal = MealService.addMeal(newMeal);
         return res.json({
            status: 'success',
            data: createdMeal
         }).status(201);
    },

    getSingleMeal(req, res){
        const id = req.params.id;
        const foundMeal = MealService.getAMeal(id);
        return res.json({
            status: 'success',
            data: foundMeal
         }).status(200);
    },

    updateAMeal(req, res){
        const id = req.params.id;
        const newMeal = req.body;
        const updatedMeal = MealService.updateMeal(newMeal, id);
        return res.json({
            status: 'success',
            data: updatedMeal
         }).status(201);
    },

    deleteAMeal(req, res){
        const id = req.params.id;
        const deleteMeal = MealService.deleteMeal(id);
        return res.json({
            status: 'success',
            data: deleteMeal
         }).status(201);
    }

}

export default MealController;