import superAge from "../src/galaticAge";

describe ('superAge', () => {
  test('should be able to calculate the users current earth age',() => {
    let earthAge = new superAge(30);
    earthAge.age

    expect(earthAge.age).toBe(30);
  });
});