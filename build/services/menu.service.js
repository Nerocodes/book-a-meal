"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

var _menu = _interopRequireDefault(require("../models/menu.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuService = {
  fetchMenu: function fetchMenu(day) {
    var validMenus = _dummyData.default.menus.map(function (menu) {
      var newMenu = new _menu.default();
      newMenu.id = menu.id;
      newMenu.name = menu.name;
      newMenu.meals = menu.meals;
      newMenu.day = menu.day;
      return newMenu;
    });

    var filteredMenus = validMenus.filter(function (menu) {
      return menu.day == day;
    });
    return filteredMenus;
  },
  addMenu: function addMenu(menu) {
    var menuLength = _dummyData.default.menus.length;
    var lastId = _dummyData.default.menus[menuLength - 1].id;
    var newId = lastId + 1;
    menu.id = newId;

    _dummyData.default.menus.push(menu);

    return menu;
  }
};
var _default = MenuService;
exports.default = _default;
//# sourceMappingURL=menu.service.js.map