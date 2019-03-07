import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
let should = chai.should();

// Test /Get route
describe('/GET meal', () => {
    it('should get meals', (done) => {
        chai.request(app)
        .get('/api/v1/meals')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body);
            done();
        });
   });
});

// Test /POST route
describe('/POST meal', () => {
    it('should post meal', (done) => {
        const meal = {
            name: 'Burger',
            description: 'Chicken burger',
            price: 4000,
        };
        chai.request(app)
        .post('/api/v1/meals')
        .send(meal)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body);
            done();
        });
    });
});

//Test /Get:id route
describe('/GET/:id meal', () => {
    it('should get meal by id', (done) => {
        chai.request(app)
        .get(`/api/v1/meals/${2}`)
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log('res.body');
            done();
        });
    });
});

//Update Meal test
describe('/PUT/:id meal', () => {
    it('should update meal by id', (done) => {
        const meal = {
            name: 'Burger',
            description: 'Chicken burger',
            price: 4000,
        };
        chai.request(app)
        .put(`/api/v1/meals/${2}`)
        .send(meal)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log('res.body');
            done();
        });
    });
});

//Delete Meal

describe('/DELETE/:id meal', () => {
    it('should delete meal by id', (done) => {
        chai.request(app)
        .delete(`/api/v1/meals/${3}`)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body);
            done();
        });
    });
});