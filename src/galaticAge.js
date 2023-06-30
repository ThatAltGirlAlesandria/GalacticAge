export default class superAge {

  constructor(age) {
    this.age = age;
  }

  planetAge(planet) {
    let mercury;
    let venus;
    switch(planet) {
      case "mercury":
        mercury = parseFloat((this.age/0.24).toFixed(1));
        return mercury;
      case "venus":
        venus = parseFloat((this.age/0.62).toFixed(1));
        return venus;
    }
  }
}