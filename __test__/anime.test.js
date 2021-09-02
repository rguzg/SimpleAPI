const app = require("../server");
const requestTester = require("supertest");

describe("GET /anime", () => {
    test("Sending no query parameters returns a 400 status code", async () => {
        const response = await requestTester(app).get("/anime");

        expect(response.statusCode).toEqual(400);
    });

    test("Sending just spaces for query parameter 'q' returns a 400 status code", async () => {
        const response = await requestTester(app).get("/anime?q=       ");

        expect(response.statusCode).toEqual(400);
    });

    test("Sending a string for query parameter 'page' returns the first page of results", async () => {
        const response = await requestTester(app).get("/anime?q=haikyuu&page=pain");
        const searchResults = response.body.data;

        expect(response.statusCode).toEqual(200);
        expect(searchResults.nextPage).toEqual(
            `http://${process.env.HOST}:${process.env.PORT}/anime?q=haikyuu&page=2`
        );
        expect(searchResults.previousPage).toBe(null);
    });

    test("Searching for Haikyuu returns correct search results", async () => {
        const response = await requestTester(app).get("/anime?q=haikyuu");
        const searchResults = response.body.data;

        expect(response.statusCode).toEqual(200);
        expect(searchResults.nextPage).toEqual(
            `http://${process.env.HOST}:${process.env.PORT}/anime?q=haikyuu&page=2`
        );
        expect(searchResults.previousPage).toBe(null);
    });

    test("Searching for Haikyuu on page 2 returns correct search results", async () => {
        const response = await requestTester(app).get("/anime?q=haikyuu&page=2");
        const searchResults = response.body.data;

        expect(response.statusCode).toEqual(200);
        expect(searchResults.nextPage).toEqual(
            `http://${process.env.HOST}:${process.env.PORT}/anime?q=haikyuu&page=3`
        );
        expect(searchResults.previousPage).toBe(
            `http://${process.env.HOST}:${process.env.PORT}/anime?q=haikyuu&page=1`
        );
    });
});

describe("POST /anime", () => {
    test("Should return a 404 status code", async () => {
        const response = await requestTester(app).post("/anime");

        expect(response.statusCode).toEqual(404);
    });
});
