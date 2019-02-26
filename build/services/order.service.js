"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

var _order = _interopRequireDefault(require("../models/order.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderService = {
  fetchAllOrders: function fetchAllOrders() {
    var validOrders = _dummyData.default.orders.map(function (singleOrder) {
      var newOrder = new _order.default();
      newOrder.id = singleOrder.id;
      newOrder.order = singleOrder.order;
      newOrder.total = singleOrder.total;
      return newOrder;
    });

    return validOrders;
  },
  addOrder: function addOrder(order) {
    var orderLength = _dummyData.default.orders.length;
    var lastId = _dummyData.default.orders[orderLength - 1].id;
    var newId = lastId + 1;
    order.id = newId;

    _dummyData.default.orders.push(order);

    return order;
  },
  getAnOrder: function getAnOrder(id) {
    var order = _dummyData.default.orders.find(function (order) {
      return order.id == id;
    });

    return order || {};
  },
  updateOrder: function updateOrder(newOrder, id) {
    var updatedOrder = _dummyData.default.orders.find(function (updatedOrder) {
      return updatedOrder.id == id;
    });

    updatedOrder.name = newOrder.name;
    updatedOrder.order = newOrder.order;
    updatedOrder.total = newOrder.total;
    return updatedOrder;
  }
};
var _default = OrderService;
exports.default = _default;
//# sourceMappingURL=order.service.js.map