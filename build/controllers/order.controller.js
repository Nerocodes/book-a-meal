"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../services/order.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderController = {
  fetchAllOrders: function fetchAllOrders(req, res) {
    var allOrders = _order.default.fetchAllOrders();

    return res.json({
      status: 'success',
      data: allOrders
    }).status(200);
  },
  addAnOrder: function addAnOrder(req, res) {
    /*
        Expect json of format
        {
            order: [],
            total: number
        }
     */
    var newOrder = req.body;

    var createdOrder = _order.default.addOrder(newOrder);

    return res.json({
      status: 'success',
      data: createdOrder
    }).status(201);
  },
  getSingleOrder: function getSingleOrder(req, res) {
    var id = req.params.id;

    var foundOrder = _order.default.getAnOrder(id);

    return res.json({
      status: 'success',
      data: foundOrder
    }).status(200);
  },
  updateAnOrder: function updateAnOrder(req, res) {
    var id = req.params.id;
    var newOrder = req.body;

    var updatedOrder = _order.default.updateOrder(newOrder, id);

    return res.json({
      status: 'success',
      data: updatedOrder
    }).status(201);
  }
};
var _default = OrderController;
exports.default = _default;
//# sourceMappingURL=order.controller.js.map