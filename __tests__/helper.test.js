const request = require('supertest');
const app = require('../app');

it('Test the test setup', () => {});

describe('Tests for GET functionalities', () => {
    it('GET /posts returns a JSON', () => {
        return request(app)
            .get('/posts')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(expect.arrayContaining([
                    expect.objectContaining({
                        userid: expect.any(Int)
                        
                    })
                ]))
            });
    });
    it('GET /posts/userid returns the posts of a specific user', () => {});
    it('GET /posts/userid when invalid id return 404', () => {});
    it('GET /weatherid return an array', () => {});
    it('GET /feelingid returns an array', () => {});
});

describe('Tests for DELETE functionalities', () => {

});

describe('Tests for POST functionalities', () => {
    
});

describe('Tests for UPDATE functionalities', () => {
    
});