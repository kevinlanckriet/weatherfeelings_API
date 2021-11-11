const request = require('supertest');
const { response } = require('../app');
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
    it('GET /posts/userid returns the posts of a specific user', () => {
        return request(app)
            .get('/posts/1')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(expect.objectContaining([{
                    userid: expect.any(Int),
                    posts: expect.arrayContaining([
                        expect.objectContaining({
                            weather: expect.any(String),
                            mood: expect.any(String)
                        })
                    ]) 
                }]))
            });
    });
    it('GET /posts/userid when invalid id return 404', () => {
        return request(app).get('/posts/invalid').expect(404);
    });
    it('GET /weatherid return an array of moods', () => {
        return request(app)
            .get('/weather/1')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(
                    expect.any(Array))
            })
    });
    it('GET /feelingid returns an array', () => {
        return request(app)
            .get('/feeling/1')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(
                    expect.any(Array))
            })
    });
});

describe('Tests for DELETE functionalities', () => {

});

describe('Tests for POST functionalities', () => {
    
});

describe('Tests for UPDATE functionalities', () => {
    
});