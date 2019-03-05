"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("../controllers/user.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// controller
var router = (0, _express.Router)();
router.get('/', _user.default.fetchAllUsers);
router.get('/:id', _user.default.getSingleUser);
router.post('/', _user.default.addAUser);
router.put('/:id', _user.default.updateAUser);
router.delete('/:id', _user.default.deleteAUser);
var _default = router;
exports.default = _default;
//# sourceMappingURL=user.route.js.map