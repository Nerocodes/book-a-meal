"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../models/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  fetchAllMenus: function fetchAllMenus(req, res) {
    _index.default.Menu.findAll().then(function (menus) {
      return res.json({
        status: 'success',
        data: menus
      }).status(200);
    }).catch(function (err) {
      return console.log(err);
    });
  },
  addAMenu: function addAMenu(req, res) {
    /*
        Expect json of format
        {
            name: "random",
            day" "day"
        }
     */
    var newMenu = req.body;

    _index.default.Menu.create({
      name: newMenu.name,
      day: newMenu.day
    }).then(function (menus) {
      return res.json({
        status: 'success',
        data: menus
      }).status(201);
    }).catch(function (err) {
      return console.log(err);
    });
  }
};
var _default = MenuController;
exports.default = _default;
//# sourceMappingURL=menu.controller.js.map