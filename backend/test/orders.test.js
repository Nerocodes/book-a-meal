import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
let should = chai.should();

// Test /Get route
describe('/GET order', () => {
    it('should get orders', (done) => {
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
            .get('/api/v1/orders')
            .set('x-access-token', tokens)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                console.log(res.body);
                done();
            });
        });
   });
});

// Test /POST route
describe('/POST order', () => {
    it('should post order', (done) => {
        const order = [{
            order: [
                {
                    meal: {
                        id: 1,
                        name: 'Burger',
                        description: 'Chicken burger',
                        price: 4000,
                    },
                    portion: 2
                },
                {
                    meal: {
                        id: 3,
                        name: 'Cake',
                        description: 'Chocolate cake',
                        price: 2000,
                    },
                    portion: 1
                }
            ],
            total: 6000
        }];
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
            .post('/api/v1/orders')
            .set('x-access-token', tokens)
            .send(order)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                console.log(res.body);
                done();
            });
        });
    });
});

//Test /Get:id route
describe('/GET/:id order', () => {
    it('should get order by id', (done) => {
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
            .get(`/api/v1/orders/${1}`)
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

//Update Order test
describe('/PUT/:id order', () => {
    it('should update order by id', (done) => {
        const order = {
            order: [
                {
                    meal: {
                        id: 1,
                        name: 'Burger',
                        description: 'Chicken burger',
                        price: 4000,
                    },
                    portion: 2
                },
                {
                    meal: {
                        id: 3,
                        name: 'Cake',
                        description: 'Chocolate cake',
                        price: 2000,
                    },
                    portion: 1
                }
            ],
            total: 6000
        };
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
            .put(`/api/v1/orders/${1}`)
            .set('x-access-token', tokens)
            .send(order)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                console.log('res.body');
                done();
            });
        });
    });
});

//Delete Order

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