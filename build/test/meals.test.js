"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

var should = _chai.default.should(); // Test /Get route


describe('/GET meal', function () {
  it('should get meals', function (done) {
    _chai.default.request(_index.default).get('/api/v1/meals').end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); // Test /POST route

describe('/POST meal', function () {
  it('should post meal', function (done) {
    var meal = {
      name: 'Burger',
      description: 'Chicken burger',
      price: 4000
    };

    _chai.default.request(_index.default).post('/api/v1/meals').send(meal).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); //Test /Get:id route

describe('/GET/:id meal', function () {
  it('should get meal by id', function (done) {
    _chai.default.request(_index.default).get("/api/v1/meals/".concat(2)).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      console.log('res.body');
      done();
    });
  });
}); //Update Meal test

describe('/PUT/:id meal', function () {
  it('should update meal by id', function (done) {
    var meal = {
      name: 'Burger',
      description: 'Chicken burger',
      price: 4000
    };

    _chai.default.request(_index.default).put("/api/v1/meals/".concat(2)).send(meal).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      console.log('res.body');
      done();
    });
  });
}); //Delete Meal

describe('/DELETE/:id meal', function () {
  it('should delete meal by id', function (done) {
    _chai.default.request(_index.default).delete("/api/v1/meals/".concat(3)).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
});
//# sourceMappingURL=meals.test.js.map