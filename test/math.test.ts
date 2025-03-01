import { sum } from "../src/math";

test("Must add 2 + 2", () => {
  const result = sum(2, 2);
  expect(result).toBe(4);
});
