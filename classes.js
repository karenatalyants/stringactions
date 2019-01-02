var userCount = 0;

class profile {
  constructor(fName, lName, age, descr) {
    this.id = userCount + 1;
    this.firstName = fName;
    this.lastName = lName;
    this.fullName = fName + " " + lName;
    this.age = age;
    this.description = descr;
  }
  static duplProf
}

const myProfile = new profile("Karen", "Atalyants", 27, "I'm a product manager");

console.log(myProfile);