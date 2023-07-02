import superAge from "../src/galacticAge";

describe ('superAge', () => {
  let calculate;
  beforeEach(() => {
    calculate = new superAge(20, 13, 97.3)
  });

  test(`Should be able to calculate the users current Earth age`,() => {
    expect(calculate.age).toBe(20);
    expect(calculate.expectedAge).toBe(97.3)
  });

  test(`Should be able to calculate the users current age on Mercury`, () => {
    expect(calculate.planetAge("mercury")).toBe(83.3);
  });

  test(`Should be able to calculate the users current age on Venus`, () => {
    expect(calculate.planetAge("venus")).toBe(32.3);
  });

  test(`Should be able to calculate the users current age on Mars`, () => {
    expect(calculate.planetAge("mars")).toBe(10.6);
  });

  test(`Should be able to calculate the users current age on Jupiter`, () => {
    expect(calculate.planetAge("jupiter")).toBe(1.7);
  });

  test(`Should be able to calculate the users remaining age on Mercury`, () => {
    expect(calculate.expectedLife("mercury")).toBe(405.4);
  });

  test(`Should be able to calculate the users remaining age on Venus`, () => {
    expect(calculate.expectedLife("venus")).toBe(156.9)
  });

  test(`Should be able to calculate the users remaining age on Mars`, () => {
    expect(calculate.expectedLife("mars")).toBe(51.8)
  });

  test(`Should be able to calculate the users remaining age on Jupiter`, () => {
    expect(calculate.expectedLife("jupiter")).toBe(8.2)
  });

  test(`Should be able to calculate the users remaining time on Mercury`, () => {
    expect(calculate.remainingLife("mercury")).toBe(322.1)
  });

  test(`Should be able to calculate the users remaining time on Venus`, () => {
    expect(calculate.remainingLife("venus")).toBe(124.7)
  });

  test(`Should be able to calculate the users remaining time on Mars`, () => {
    expect(calculate.remainingLife("mars")).toBe(41.1)
  });

  test(`Should be able to calculate the users remaining time on Jupiter`, () => {
    expect(calculate.remainingLife("jupiter")).toBe(6.5)
  });

  test(`If the user does not input a number it will return null`, () => {
    expect(calculate.planetAge()).toBe(null)
  })
  
  test(`If the user does not input a number it will return null`, () => {
    expect(calculate.expectedLife()).toBe(null)
  })

  test(`If the user does not input a number it will return null`, () => {
    expect(calculate.remainingLife()).toBe(null)
  })

  test(`Should calculate how many years have passed from current age to a prior age`, () => {
    expect(calculate.yearsPast("mercury")).toBe(29.2)
  })
});