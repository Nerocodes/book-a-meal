"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

var _meal = _interopRequireDefault(require("../models/meal.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealService = {
  fetchAllMeals: function fetchAllMeals() {
    var validMeals = _dummyData.default.meals.map(function (meal) {
      var newMeal = new _meal.default();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.description = meal.description;
      newMeal.price = meal.price;
      return newMeal;
    });

    return validMeals;
  },
  addMeal: function addMeal(meal) {
    var mealLength = _dummyData.default.meals.length;
    var lastId = _dummyData.default.meals[mealLength - 1].id;
    var newId = lastId + 1;
    meal.id = newId;

    _dummyData.default.meals.push(meal);

    return meal;
  },
  getAMeal: function getAMeal(id) {
    var meal = _dummyData.default.meals.find(function (meal) {
      return meal.id == id;
    });

    return meal || {};
  },
  updateMeal: function updateMeal(meal, id) {
    var updatedMeal = _dummyData.default.meals.find(function (updatedMeal) {
      return updatedMeal.id == id;
    });

    updatedMeal.name = meal.name;
    updatedMeal.description = meal.description;
    updatedMeal.price = meal.price;
    return updatedMeal;
  },
  deleteMeal: function deleteMeal(id) {
    var mealIndex = _dummyData.default.meals.findIndex(function (meal) {
      return meal.id == id;
    });

    _dummyData.default.meals.splice(mealIndex, 1);

    var validMeals = _dummyData.default.meals.map(function (meal) {
      var newMeal = new _meal.default();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.description = meal.description;
      newMeal.price = meal.price;
      return newMeal;
    });

    return validMeals;
  }
};
var _default = MealService;
exports.default = _default;
//# sourceMappingURL=meal.service.js.map