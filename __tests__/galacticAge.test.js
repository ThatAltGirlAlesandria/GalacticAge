import superAge from "../src/galacticAge";

describe ('superAge', () => {
  let calculate;
  beforeEach(() => {
    calculate = new superAge(30, 80)
  });

  test(`Should be able to calculate the users current Earth age`,() => {
    expect(calculate.age).toBe(30);
    expect(calculate.expectedAge).toBe(80)
  });

  test(`Should be able to calculate the users current age on Mercury`, () => {
    expect(calculate.planetAge("mercury")).toBe(125);
  });

  test(`Should be able to calculate the users current age on Venus`, () => {
    expect(calculate.planetAge("venus")).toBe(48.4);
  });

  test(`Should be able to calculate the users current age on Mars`, () => {
    expect(calculate.planetAge("mars")).toBe(16);
  });

  test(`Should be able to calculate the users current age on Jupiter`, () => {
    expect(calculate.planetAge("jupiter")).toBe(2.5);
  });

  test(`Should be able to calculate the users remaining age on Mercury`, () => {
    expect(calculate.expectedLife("mercury")).toBe(333.3);
  });

  test(`Should be able to calculate the users remaining age on Venus`, () => {
    expect(calculate.expectedLife("venus")).toBe(129)
  })
});