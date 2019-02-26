"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../services/meal.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  fetchAllMeals: function fetchAllMeals(req, res) {
    var allMeals = _meal.default.fetchAllMeals();

    return res.json({
      status: 'success',
      data: allMeals
    }).status(200);
  },
  addAMeal: function addAMeal(req, res) {
    /*
        Expect json of format
        {
            name: "random",
            description: "random",
            price: 300
        }
     */
    var newMeal = req.body;

    var createdMeal = _meal.default.addMeal(newMeal);

    return res.json({
      status: 'success',
      data: createdMeal
    }).status(201);
  },
  getSingleMeal: function getSingleMeal(req, res) {
    var id = req.params.id;

    var foundMeal = _meal.default.getAMeal(id);

    return res.json({
      status: 'success',
      data: foundMeal
    }).status(200);
  },
  updateAMeal: function updateAMeal(req, res) {
    var id = req.params.id;
    var newMeal = req.body;

    var updatedMeal = _meal.default.updateMeal(newMeal, id);

    return res.json({
      status: 'success',
      data: updatedMeal
    }).status(201);
  },
  deleteAMeal: function deleteAMeal(req, res) {
    var id = req.params.id;

    var deleteMeal = _meal.default.deleteMeal(id);

    return res.json({
      status: 'success',
      data: deleteMeal
    }).status(201);
  }
};
var _default = MealController;
exports.default = _default;
//# sourceMappingURL=meal.controller.js.map