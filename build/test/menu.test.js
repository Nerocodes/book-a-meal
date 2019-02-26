"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

var should = _chai.default.should(); // Test /Get route


describe('/GET menu', function () {
  it('should get menus', function (done) {
    _chai.default.request(_index.default).get('/api/v1/menu').end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); // Test /POST route

describe('/POST menu', function () {
  it('should post menu', function (done) {
    var menu = [{
      name: 'Burgers',
      meals: [{
        id: 1,
        name: 'Burger',
        description: 'Chicken burger',
        price: 4000
      }],
      day: 'Monday'
    }];

    _chai.default.request(_index.default).post('/api/v1/menu').send(menu).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
});
//# sourceMappingURL=menu.test.js.map