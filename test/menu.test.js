import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
let should = chai.should();

// Test /Get route
describe('/GET menu', () => {
    it('should get menus', (done) => {
        chai.request(app)
        .get('/api/v1/menu')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body);
            done();
        });
   });
});

// Test /POST route
describe('/POST menu', () => {
    it('should post menu', (done) => {
        const menu = [{
            name: 'Burgers',
            meals: [
                {
                    id: 1,
                    name: 'Burger',
                    description: 'Chicken burger',
                    price: 4000,
                }
            ],
            day: 'Monday'
        }];
        chai.request(app)
        .post('/api/v1/menu')
        .send(menu)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body);
            done();
        });
    });
});