const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email); // call constructor of employee class and pass in name, id and email
        this.school = school;
    }
    // getter methods to return properties of the class instance
    getSchool() { 
        return this.school;
    }
    getRole() {
        // override getRole method to return Intern
        return 'Intern';
    }
}

module.exports = Intern;