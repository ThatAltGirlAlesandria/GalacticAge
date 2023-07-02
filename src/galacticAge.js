export default class superAge {

  constructor(age, priorAge, expectedAge) {
    this.age = age;
    this.priorAge = priorAge;
    this.priorYears = age - priorAge;
    this.expectedAge = expectedAge;
    this.expectedExpiration = expectedAge - age;
  }

  planetAge(planet) {
    let mercury;
    let venus;
    let mars;
    let jupiter;
    switch(planet) {
    case "mercury":
      mercury = parseFloat((this.age/.24).toFixed(1));
      return mercury;
    case "venus":
      venus = parseFloat((this.age/.62).toFixed(1));
      return venus;
    case "mars":
      mars = parseFloat((this.age/1.88).toFixed(1));
      return mars;
    case "jupiter":
      jupiter = parseFloat((this.age/11.86).toFixed(1));
      return jupiter;
    default:
      return null;
    }
  }

  yearsPast(planet) {
    let mercuryPast;
    let venusPast;
    let marsPast;
    switch(planet) {
    case "mercury":
      mercuryPast = parseFloat((this.priorYears/.24).toFixed(1));
      return mercuryPast;
    case "venus":
      venusPast = parseFloat((this.priorYears/.62).toFixed(1));
      return venusPast;
    case "mars":
      marsPast = parseFloat((this.priorYears/1.88).toFixed(1));
      return marsPast;
    }
  }

  expectedLife(planet) {
    let expectedMercury;
    let expectedVenus;
    let expectedMars;
    let expectedJupiter;
    switch(planet) {
    case "mercury":
      expectedMercury = parseFloat((this.expectedAge/.24).toFixed(1));
      return expectedMercury;
    case "venus":
      expectedVenus = parseFloat((this.expectedAge/.62).toFixed(1));
      return expectedVenus;
    case "mars":
      expectedMars = parseFloat((this.expectedAge/1.88).toFixed(1));
      return expectedMars;
    case "jupiter":
      expectedJupiter = parseFloat((this.expectedAge/11.86).toFixed(1));     
      return expectedJupiter;
    default:
      return null;
    }
  }

  remainingLife(planet) {
    let remainingMercury;
    let remainingVenus;
    let remainingMars;
    let remainingJupiter;
    switch(planet) {
    case "mercury":
      remainingMercury = parseFloat((this.expectedExpiration/.24).toFixed(1));
      return remainingMercury;
    case "venus":
      remainingVenus = parseFloat((this.expectedExpiration/.62).toFixed(1));
      return remainingVenus;
    case "mars":
      remainingMars = parseFloat((this.expectedExpiration/1.88).toFixed(1));
      return remainingMars;
    case "jupiter":
      remainingJupiter = parseFloat((this.expectedExpiration/11.86).toFixed(1));
      return remainingJupiter;
    default:
      return null;
    }
  }
}