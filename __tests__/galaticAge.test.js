import superAge from "../src/superage";

describe ('superAge'), () => {
  test('should be able to calculate the users current earth age',() => {
    let earthAge = new superAge(30);
    earthAge.age(30)

    expect(earthAge.age(30)).toBe(30);
  });
};