const requestTester = require("supertest");
const app = require("../index");

describe("GET /helloworld", () => {
    test("Return the text 'Hello World' and a 200 status code", async () => {
        const response = await requestTester(app).get("/helloworld");
        
        expect(response.statusCode).toEqual(200);
        expect(response.text).toEqual("Hello World");
    });
});
