import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
let should = chai.should();

// Test /POST route
// Test /POST route
describe('/POST user', () => {
    it('should register user', (done) => {
        const user = {
            first_name: 'Nero',
            last_name: 'Codes',
            email: 'nero@nerocodes.com',
            password: 'pass'
        };
        chai.request(app)
        .post('/api/v1/auth/register')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body);
            done();
        });
    });
});

describe('/GET user', () => {
    it('should get user', (done) => {
        const user = {
            email: 'nero@nerocodes.com',
            password: 'pass'
        };
        chai.request(app)
        .post('/api/v1/auth/login')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200);
            console.log(res.body);
            const tokens = res.body.token;
            chai.request(app)
            .get(`/api/v1/auth/me`)
            .set('x-access-token', tokens)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                console.log('res.body');
                done();
            });
        });
    });
});

describe('/POST user', () => {
    it('should login user', (done) => {
        const user = {
            email: 'nero@nerocodes.com',
            password: 'pass'
        };
        chai.request(app)
        .post('/api/v1/auth/login')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body);
            done();
        });
    });
});

describe('/POST user', () => {
    it('should logout user', (done) => {
        const user = {
            email: 'nero@nerocodes.com',
            password: 'pass'
        };
        chai.request(app)
        .post('/api/v1/auth/logout')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200);
            console.log(res.body);
            done();
        });
    });
});