const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); // call constructor of employee class and pass in name, id and email
        this.officeNumber = officeNumber;
    }
    // getter methods to return properties of the class instance
    getRole() {
        // override getRole method to return Manager
        return 'Manager';
    }
}

module.exports = Manager;