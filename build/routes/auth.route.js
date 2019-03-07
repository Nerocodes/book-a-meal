"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("../controllers/auth/auth.controller"));

var _VerifyToken = _interopRequireDefault(require("../controllers/auth/middleware/VerifyToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// controller
var router = (0, _express.Router)(); // router.get('/', AuthController.fetchAllUsers);

router.get('/me', _VerifyToken.default.verify, _auth.default.getSingleUser);
router.post('/register', _auth.default.register);
router.post('/login', _auth.default.login);
router.post('/logout', _auth.default.logout); // router.put('/:id', AuthController.updateAUser);
// router.delete('/:id', AuthController.deleteAUser);

var _default = router;
exports.default = _default;
//# sourceMappingURL=auth.route.js.map