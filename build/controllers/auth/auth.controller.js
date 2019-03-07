"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../models/index"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthController = {
  // fetchAllUsers(req, res){
  //     models.User.findAll().then(users => {
  //         return res.json({
  //             status: 'success',
  //             data: users
  //         }).status(200);
  //     })
  //     .catch(err => console.log(err));
  // },
  register: function register(req, res) {
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

    var hashedPassword = _bcryptjs.default.hashSync(newUser.password, 8);

    _index.default.User.create({
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: hashedPassword
    }).then(function (user) {
      var token = _jsonwebtoken.default.sign({
        id: user.id
      }, _config.default.secret, {
        expiresIn: 86400
      });

      return res.json({
        status: 'success',
        auth: 'true',
        token: token,
        data: user
      }).status(201);
    }).catch(function (err) {
      return console.log(err);
    });
  },
  getSingleUser: function getSingleUser(req, res) {
    _index.default.User.findById(req.userId, {
      attributes: {
        exclude: ['password']
      }
    }).then(function (users) {
      return res.json({
        status: 'success',
        data: users
      }).status(200);
    }).catch(function (err) {
      return console.log(err);
    });
  },
  login: function login(req, res) {
    var oldUser = req.body;

    _index.default.User.findOne({
      where: {
        email: oldUser.email
      }
    }).then(function (user) {
      if (!user) return res.status(404).send('No user found.');

      var passwordIsValid = _bcryptjs.default.compareSync(oldUser.password, user.password);

      if (!passwordIsValid) return res.status(401).send({
        auth: false,
        token: null
      });

      var token = _jsonwebtoken.default.sign({
        id: user._id
      }, _config.default.secret, {
        expiresIn: 86400 // expires in 24 hours

      });

      res.status(200).send({
        auth: true,
        token: token
      });
    }).catch(function (err) {
      return res.status(500).send('Error on the server.');
    });
  },
  logout: function logout(req, res) {
    res.status(200).send({
      auth: false,
      token: null
    });
  }
};
var _default = AuthController;
exports.default = _default;
//# sourceMappingURL=auth.controller.js.map