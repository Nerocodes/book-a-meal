"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../models/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  fetchAllMeals: function fetchAllMeals(req, res) {
    _index.default.Meal.findAll().then(function (meals) {
      return res.json({
        status: 'success',
        data: meals
      }).status(200);
    }).catch(function (err) {
      return console.log(err);
    });
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

    _index.default.Meal.create({
      name: newMeal.name,
      description: newMeal.description,
      price: newMeal.price
    }).then(function (meals) {
      return res.json({
        status: 'success',
        data: meals
      }).status(201);
    }).catch(function (err) {
      return console.log(err);
    });
  },
  getSingleMeal: function getSingleMeal(req, res) {
    var id = req.params.id;

    _index.default.Meal.findById(id).then(function (meals) {
      return res.json({
        status: 'success',
        data: meals
      }).status(200);
    }).catch(function (err) {
      return console.log(err);
    });
  },
  updateAMeal: function updateAMeal(req, res) {
    var id = req.params.id;
    var newMeal = req.body;

    _index.default.Meal.findById(id).then(function (meals) {
      meals.update({
        name: newMeal.name,
        description: newMeal.description,
        price: newMeal.price
      }).then(function (meal) {
        return res.json({
          status: 'success',
          data: meal
        }).status(201);
      });
    }).catch(function (err) {
      return console.log(err);
    });
  },
  deleteAMeal: function deleteAMeal(req, res) {
    var id = req.params.id;

    _index.default.Meal.findById(id).then(function (users) {
      users.destroy().then(function () {
        return res.json({
          status: 'success',
          data: 'Deleted Successfully'
        }).status(201);
      });
    }).catch(function (err) {
      return console.log(err);
    });
  }
};
var _default = MealController;
exports.default = _default;
//# sourceMappingURL=meal.controller.js.map