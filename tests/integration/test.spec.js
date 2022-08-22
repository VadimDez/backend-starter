/**
 * Created by Vadym Yatsyuk on 11.08.18
 */
const app = require("../../index");
const request = require("supertest");

describe("sample integration tests", () => {
  it("should pass", async () => {
    const res = await request(app).get("/api/v1/health").expect(200);

    expect(res.body).toEqual({
      status: "ok",
    });
  });

  it("should return 200 when accessing protected route with no auth header (only for test env)", async () => {
    await request(app).get("/api/v1/protected").expect(200);
  });

  describe("Validation", () => {
    it("should return validation error", async () => {
      await request(app).post("/api/v1/objects").expect(400);
    });

    it("should return succes on passing all required body params", async () => {
      const response = await request(app)
        .post("/api/v1/objects")
        .send({
          name: "Obj name",
        })
        .expect(201);

      expect(response.body).toEqual({
        status: "ok",
      });
    });
  });
});
