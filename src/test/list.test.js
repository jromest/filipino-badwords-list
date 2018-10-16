const list = require("../../lib/index");

describe("Should contain correct property", () => {
  it("Should contain property array", () => {
    expect(list.hasOwnProperty("array")).toBe(true);
  });

  it("Should contain property object", () => {
    expect(list.hasOwnProperty("object")).toBe(true);
  });

  it("Should contain property regex", () => {
    expect(list.hasOwnProperty("regex")).toBe(true);
  });
});

describe("Should contain correct type", () => {
  it("Should contain array type", () => {
    expect(list.array instanceof Array).toBe(true);
  });

  it("Should contain object type", () => {
    expect(list.object instanceof Object).toBe(true);
  });

  it("Should contain regexp type", () => {
    expect(list.regex instanceof RegExp).toBe(true);
  });
});
