const sum = require("./sum");

test("adds 1+2 and expects it to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
