"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../models/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderController = {
  fetchAllOrders: function fetchAllOrders(req, res) {
    _index.default.Order.findAll().then(function (orders) {
      return res.json({
        status: 'success',
        data: orders
      }).status(200);
    }).catch(function (err) {
      return console.log(err);
    });
  },
  addAnOrder: function addAnOrder(req, res) {
    /*
        Expect json of format
        {
            total: number
        }
     */
    var newOrder = req.body;

    _index.default.Order.create({
      total: newOrder.total
    }).then(function (orders) {
      return res.json({
        status: 'success',
        data: orders
      }).status(201);
    }).catch(function (err) {
      return console.log(err);
    });
  },
  getSingleOrder: function getSingleOrder(req, res) {
    var id = req.params.id;

    _index.default.Order.findById(id).then(function (orders) {
      return res.json({
        status: 'success',
        data: orders
      }).status(200);
    }).catch(function (err) {
      return console.log(err);
    });
  },
  updateAnOrder: function updateAnOrder(req, res) {
    var id = req.params.id;
    var newOrder = req.body;

    _index.default.Order.findById(id).then(function (orders) {
      orders.update({
        total: newOrder.total
      }).then(function (order) {
        return res.json({
          status: 'success',
          data: order
        }).status(201);
      });
    }).catch(function (err) {
      return console.log(err);
    });
  }
};
var _default = OrderController;
exports.default = _default;
//# sourceMappingURL=order.controller.js.map