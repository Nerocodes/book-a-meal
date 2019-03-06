"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var verifyToken = {
  verify: function verify(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(403).send({
      auth: false,
      message: 'No token provided.'
    });

    _jsonwebtoken.default.verify(token, _config.default.secret, function (err, decoded) {
      if (err) return res.status(500).send({
        auth: false,
        message: 'Failed to authenticate token.'
      }); // if everything good, save to request for use in other routes

      req.userId = decoded.id;
      next();
    });
  }
};
var _default = verifyToken;
exports.default = _default;
;
//# sourceMappingURL=VerifyToken.js.map