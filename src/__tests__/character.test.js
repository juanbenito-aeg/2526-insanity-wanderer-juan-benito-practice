const request = require("supertest");
const app = require("../config/server");

describe("PATCH /characters/:id", () => {
  it("should update character with specified id", async () => {
    const response = await request(app)
      .patch("/characters/697dc8e96572883c1d8f0764")
      .send({ occupation: "warrior" });

    expect(response.statusCode).toBe(200);
    expect(response.body.data.occupation).toBe("warrior");
  });
});

describe("DELETE /characters/:id", () => {
  it("should delete character with specified id", async () => {
    const response = await request(app).delete(
      "/characters/697dc8e96572883c1d8f0764",
    );

    expect(response.statusCode).toBe(200);
    expect(response.body.data.name).toBe("Eryndor the Valiant");
  });
});
