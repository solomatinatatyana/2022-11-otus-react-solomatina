import {mul, div, add, minus, square, pow, fact} from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });

  it("6 ** to equal 36", () => {
    expect(square(6)).toBe(36);
  });

  it("7 ^ 3 to equal 343", () => {
    expect(pow(7, 3)).toBe(343);
  });

  it("3 ! to equal 6", () => {
    expect(fact(3)).toBe(6);
  });

});
