"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../models/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserController = {
  fetchAllUsers: function fetchAllUsers(req, res) {
    _index.default.User.findAll().then(function (users) {
      return res.json({
        status: 'success',
        data: users
      }).status(200);
    }).catch(function (err) {
      return console.log(err);
    });
  },
  addAUser: function addAUser(req, res) {
    /*
        Expect json of format
        {
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }
     */
    var newUser = req.body;

    _index.default.User.create({
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    }).then(function (users) {
      return res.json({
        status: 'success',
        data: users
      }).status(201);
    }).catch(function (err) {
      return console.log(err);
    });
  },
  getSingleUser: function getSingleUser(req, res) {
    var id = req.params.id;

    _index.default.User.findById(id).then(function (users) {
      return res.json({
        status: 'success',
        data: users
      }).status(200);
    }).catch(function (err) {
      return console.log(err);
    });
  },
  updateAUser: function updateAUser(req, res) {
    var id = req.params.id;
    var newUser = req.body;

    _index.default.User.findById(id).then(function (users) {
      users.update({
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
      }).then(function (user) {
        return res.json({
          status: 'success',
          data: user
        }).status(201);
      });
    }).catch(function (err) {
      return console.log(err);
    });
  },
  deleteAUser: function deleteAUser(req, res) {
    var id = req.params.id;

    _index.default.User.findById(id).then(function (users) {
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
var _default = UserController;
exports.default = _default;
//# sourceMappingURL=user.controller.js.map