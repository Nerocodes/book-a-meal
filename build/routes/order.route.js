"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _order = _interopRequireDefault(require("../controllers/order.controller"));

var _VerifyToken = _interopRequireDefault(require("../controllers/auth/middleware/VerifyToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// controller
var router = (0, _express.Router)();
router.get('/', _VerifyToken.default.verify, _order.default.fetchAllOrders);
router.post('/', _VerifyToken.default.verify, _order.default.addAnOrder);
router.get('/:id', _VerifyToken.default.verify, _order.default.getSingleOrder);
router.put('/:id', _VerifyToken.default.verify, _order.default.updateAnOrder);
var _default = router;
exports.default = _default;
//# sourceMappingURL=order.route.js.map