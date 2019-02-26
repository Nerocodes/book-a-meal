"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  meals: [{
    id: 1,
    name: 'Burger',
    description: 'Chicken burger',
    price: 4000
  }, {
    id: 2,
    name: 'Pizza',
    description: 'Chicken pizza',
    price: 5000
  }, {
    id: 3,
    name: 'Cake',
    description: 'Chocolate cake',
    price: 2000
  }],
  menus: [{
    id: 1,
    name: 'Burgers',
    meals: [{
      id: 1,
      name: 'Burger',
      description: 'Chicken burger',
      price: 4000
    }],
    day: 'Monday'
  }, {
    id: 2,
    name: 'Cakes',
    meals: [{
      id: 3,
      name: 'Cake',
      description: 'Chocolate cake',
      price: 2000
    }],
    day: 'Tuesday'
  }, {
    id: 3,
    name: 'Pizzas',
    meals: [{
      id: 2,
      name: 'Pizza',
      description: 'Chicken pizza',
      price: 5000
    }],
    day: 'Wednesday'
  }, {
    id: 4,
    name: 'Burgers',
    meals: [{
      id: 1,
      name: 'Burger',
      description: 'Chicken burger',
      price: 4000
    }],
    day: 'Thursday'
  }, {
    id: 5,
    name: 'Cakes',
    meals: [{
      id: 3,
      name: 'Cake',
      description: 'Chocolate cake',
      price: 2000
    }],
    day: 'Friday'
  }, {
    id: 6,
    name: 'Burgers',
    meals: [{
      id: 1,
      name: 'Burger',
      description: 'Chicken burger',
      price: 4000
    }],
    day: 'Saturday'
  }, {
    id: 7,
    name: 'Cakes',
    meals: [{
      id: 3,
      name: 'Cake',
      description: 'Chocolate cake',
      price: 2000
    }],
    day: 'Sunday'
  }],
  orders: [{
    id: 1,
    order: [{
      meal: {
        id: 1,
        name: 'Burger',
        description: 'Chicken burger',
        price: 4000
      },
      portion: 2
    }],
    total: 4000
  }, {
    id: 2,
    order: [{
      meal: {
        id: 1,
        name: 'Burger',
        description: 'Chicken burger',
        price: 4000
      },
      portion: 2
    }, {
      meal: {
        id: 3,
        name: 'Cake',
        description: 'Chocolate cake',
        price: 2000
      },
      portion: 1
    }],
    total: 6000
  }]
};
exports.default = _default;
//# sourceMappingURL=dummyData.js.map