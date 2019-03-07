"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

var should = _chai.default.should(); // Test /POST route
// Test /POST route


describe('/POST user', function () {
  it('should register user', function (done) {
    var user = {
      first_name: 'Nero',
      last_name: 'Codes',
      email: 'nero@nerocodes.com',
      password: 'pass'
    };

    _chai.default.request(_index.default).post('/api/v1/auth/register').send(user).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
});
describe('/GET user', function () {
  it('should get user', function (done) {
    var user = {
      email: 'nero@nerocodes.com',
      password: 'pass'
    };

    _chai.default.request(_index.default).post('/api/v1/auth/login').send(user).end(function (err, res) {
      res.should.have.status(200);
      console.log(res.body);
      var tokens = res.body.token;

      _chai.default.request(_index.default).get("/api/v1/auth/me").set('x-access-token', tokens).end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        console.log('res.body');
        done();
      });
    });
  });
});
describe('/POST user', function () {
  it('should login user', function (done) {
    var user = {
      email: 'nero@nerocodes.com',
      password: 'pass'
    };

    _chai.default.request(_index.default).post('/api/v1/auth/login').send(user).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
});
describe('/POST user', function () {
  it('should logout user', function (done) {
    var user = {
      email: 'nero@nerocodes.com',
      password: 'pass'
    };

    _chai.default.request(_index.default).post('/api/v1/auth/logout').send(user).end(function (err, res) {
      res.should.have.status(200);
      console.log(res.body);
      done();
    });
  });
});
//# sourceMappingURL=auth.test.js.map