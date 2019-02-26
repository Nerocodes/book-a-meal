"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

var should = _chai.default.should(); // Test /Get route


describe('/GET order', function () {
  it('should get orders', function (done) {
    _chai.default.request(_index.default).get('/api/v1/orders').end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); // Test /POST route

describe('/POST order', function () {
  it('should post order', function (done) {
    var order = [{
      order: [{
        meal: {
          id: 1,
          name: 'Burger',
          description: 'Chicken burger',
          price: 4000
        },
        portion: 2
      }, {
        meal: {
          id: 3,
          name: 'Cake',
          description: 'Chocolate cake',
          price: 2000
        },
        portion: 1
      }],
      total: 6000
    }];

    _chai.default.request(_index.default).post('/api/v1/orders').send(order).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); //Test /Get:id route

describe('/GET/:id order', function () {
  it('should get order by id', function (done) {
    _chai.default.request(_index.default).get("/api/v1/orders/".concat(1)).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      console.log('res.body');
      done();
    });
  });
}); //Update Order test

describe('/PUT/:id order', function () {
  it('should update order by id', function (done) {
    var order = {
      order: [{
        meal: {
          id: 1,
          name: 'Burger',
          description: 'Chicken burger',
          price: 4000
        },
        portion: 2
      }, {
        meal: {
          id: 3,
          name: 'Cake',
          description: 'Chocolate cake',
          price: 2000
        },
        portion: 1
      }],
      total: 6000
    };

    _chai.default.request(_index.default).put("/api/v1/orders/".concat(1)).send(order).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      console.log('res.body');
      done();
    });
  });
}); //Delete Order
// describe('/DELETE/:id order', () => {
//     it('should delete order by id', (done) => {
//         chai.request(app)
//         .delete(`/api/v1/orders/ ${1}`)
//         .end((err, res) => {
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             console.log(res.body);
//             done();
//         });
//     });
// });
//# sourceMappingURL=orders.test.js.map