const request = require("supertest");
const express = require("express");
const radarsRoutes = require("../../src/routes/radarsRoutes");

const app = express();
app.use(express.json());
app.use("/api", radarsRoutes);

describe("GET /api/radars", () => {
  it("devrait retourner une liste de radars avec un statut 200", async () => {
    const response = await request(app).get("/api/radars");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("type");
    expect(response.body[0]).toHaveProperty("localisation");
  });
});