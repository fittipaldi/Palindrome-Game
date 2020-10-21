require('dotenv').config();
const supertest = require('supertest');
const urlAPI = 'localhost:' + process.env.PORT;
const request = supertest(urlAPI);

describe('Api Test', () => {

    it('Getting Points', (done) => {
        request.get('')
            .expect(200)
            .end((err, res) => {
                console.log(res.body);
                if (err) {
                    return done(err);
                }
                if (!res.body.status) {
                    return done(err);
                }
                done();
            })
    });

});