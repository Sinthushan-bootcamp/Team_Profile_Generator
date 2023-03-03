const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); // call constructor of employee class and pass in name, id and email
        this.github = github;
    }
    // getter methods to return properties of the class instance
    getGithub() { 
        return this.github;
    }
    getRole() {
        // override getRole method to return Intern
        return 'Engineer';
    }
}

module.exports = Engineer;