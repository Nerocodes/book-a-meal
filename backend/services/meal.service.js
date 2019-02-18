import dummyData from '../utils/dummyData';
import Meal from '../models/meal.model';

const MealService = {

    fetchAllMeals() {
        const validMeals = dummyData.meals.map((meal) => {
            const newMeal = new Meal();
            newMeal.id = meal.id;
            newMeal.name = meal.name;
            newMeal.description = meal.description;
            newMeal.price = meal.price;
            return newMeal;
        });

        return validMeals;
    },

    addMeal(meal){
        const mealLength = dummyData.meals.length;
        const lastId = dummyData.meals[mealLength - 1].id;
        const newId = lastId + 1;
        meal.id = newId;

        dummyData.meals.push(meal);

        return meal;
    },

    getAMeal(id){
        const meal = dummyData.meals.find(meal => meal.id == id);
        return meal || {};
    },

    updateMeal(meal, id){
        const updatedMeal = dummyData.meals.find(updatedMeal => updatedMeal.id == id);
        updatedMeal.name = meal.name;
        updatedMeal.description = meal.description;
        updatedMeal.price = meal.price;
        return updatedMeal;
    }

};

export default MealService;