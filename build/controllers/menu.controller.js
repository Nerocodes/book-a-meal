"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  fetchAllMenus: function fetchAllMenus(req, res) {
    var todate = new Date();
    var today = todate.getDay();

    switch (today) {
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

    var allMenus = _menu.default.fetchMenu(today);

    return res.json({
      status: 'success',
      data: allMenus
    }).status(200);
  },
  addAMenu: function addAMenu(req, res) {
    /*
        Expect json of format
        {
            name: "random",
            description: "random",
            price: 300
        }
     */
    var newMenu = req.body;

    var createdMenu = _menu.default.addMenu(newMenu);

    return res.json({
      status: 'success',
      data: createdMenu
    }).status(201);
  }
};
var _default = MenuController;
exports.default = _default;
//# sourceMappingURL=menu.controller.js.map