export default class superAge {

  constructor(age, expectedAge) {
    this.age = age;
    this.expectedAge = expectedAge;
  };

  planetAge(planet) {
    let mercury;
    let venus;
    let mars;
    let jupiter;
    switch(planet) {
      case "mercury":
        mercury = parseFloat((this.age/0.24).toFixed(1));
        return mercury;
      case "venus":
        venus = parseFloat((this.age/0.62).toFixed(1));
        return venus;
      case "mars":
        mars = parseFloat((this.age/1.88).toFixed(1));
        return mars;
      case "jupiter":
        jupiter = parseFloat((this.age/11.86).toFixed(1));
        return jupiter
    };
  };

  expectedLife(planet) {
    let expectedMercury;
    let expectedVenus;
    let expectedMars;
    switch(planet) {
      case "mercury":
        expectedMercury = parseFloat((this.expectedAge/0.24).toFixed(1));
        return expectedMercury;
      case "venus":
        expectedVenus = parseFloat((this.expectedAge/0.62).toFixed(1));
        return expectedVenus;
      case "mars":
        expectedMars = parseFloat((this.expectedAge/1.88).toFixed(1));
        return expectedMars;
    };
  };
}