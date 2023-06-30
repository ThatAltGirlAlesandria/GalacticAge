import superAge from "../src/galaticAge";

describe ('superAge', () => {
  let calculate;
  beforeEach(() => {
    calculate = new superAge(30)
  });

  test(`Should be able to calculate the users current Earth age`,() => {
    expect(calculate.age).toBe(30);
  });

  test(`Should be able to calculate the users current age on Mercury`, () => {
    expect(calculate.planetAge("mercury")).toBe(125);
  });

  test(`Should be able to calculate the users current age on Venus`, () => {
    expect(calculate.planetAge("venus")).toBe(48.4);
  });

});