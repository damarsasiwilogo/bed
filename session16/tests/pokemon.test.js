const request = require("supertest");
const app = require("../app");
const nock = require("nock");

describe("GET /api/pokemons", () => {
  it("should return array of pokemon data", async () => {
    const mockResponse = {
      results: [
        {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        },
        {
          name: "ivysaur",
          url: "https://pokeapi.co/api/v2/pokemon/2/",
        },
      ],
    };

    nock("https://pokeapi.co").get("/api/v2/pokemon").reply(200, mockResponse);

    const response = await request(app).get("/api/pokemons");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockResponse.results);
  });

  it("should return errors when pokemon api is error", async () => {
    nock("https://pokeapi.co").get("/api/v2/pokemon").reply(403, []);

    const response = await request(app).get("/api/pokemons");
    expect(response.status).toBe(500);
    expect(response.text).toEqual("An error occurred when fetching Pokemons");
  });
});
