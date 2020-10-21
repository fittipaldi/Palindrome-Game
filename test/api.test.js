require('dotenv').config();
const supertest = require('supertest');
const urlAPI = 'localhost:' + process.env.PORT;
const request = supertest(urlAPI);

describe('Api Test', () => {

    it('Set Points', (done) => {
        request.post('/api/submitEntry')
            .send({
                name: 'Tester',
                word: 'Bob'
            })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                if (!res.body.status) {
                    return done(err);
                }
                done();
            })
    });

    it('Getting Points', (done) => {
        request.get('/api/getScores')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                if (res.body.length == 0) {
                    return done(err);
                }
                done();
            })
    });

});