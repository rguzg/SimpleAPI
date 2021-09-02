const requestTester = require("supertest");
const app = require("../index");

describe('Not Found middleware tests', () => {
    test('GET request to a non-existent route should return a status code of 404', async () => {
        let response = await requestTester(app).get('/NonExistentRoute');

        expect(response.statusCode).toEqual(404);
    });

    test('POST request to a non-existent route should return a status code of 404', async () => {
        let response = await requestTester(app).post('/NonExistentRoute');

        expect(response.statusCode).toEqual(404);
    });
});