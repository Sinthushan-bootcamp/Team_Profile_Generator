const Employee = require('../lib/employee');

describe('Employee', () => {
  describe('Initialization', () => {
    // Positive test
    it("Should create an instance of an employee", () => {
      // Arrange
      const name = 'Sinthushan';
      const id = '123';
      const email = 'sinthushan@gmail.com';
      const role = 'Employee';
      // Act
      const obj = new Employee(name, id, email);
      const result = obj.getRole();
      // Assert
      expect(result).toEqual(role);
    });
  });
  describe('getName', () => {
    // Positive test
    it("When I create an employee instance and call getname it should return the name used to create the instance", () => {
      // Arrange
      const name = 'Sinthushan';
      const id = '123';
      const email = 'sinthushan@gmail.com';
      // Act
      const obj = new Employee(name, id, email);
      const result = obj.getName()
      // Assert
      expect(result).toEqual(name);
    });
  });
  describe('getId', () => {
    // Positive test
    it("When I create an employee instance and call getId it should return the ID used to create the instance", () => {
      // Arrange
      const name = 'Sinthushan';
      const id = '123';
      const email = 'sinthushan@gmail.com';
      // Act
      const obj = new Employee(name, id, email);
      const result = obj.getId()
      // Assert
      expect(result).toEqual(id);
    });
  });
  describe('getEmail', () => {
    // Positive test
    it("When I create an employee instance and call getEmail it should return the Email used to create the instance", () => {
      // Arrange
      const name = 'Sinthushan';
      const id = '123';
      const email = 'sinthushan@gmail.com';
      // Act
      const obj = new Employee(name, id, email);
      const result = obj.getEmail()
      // Assert
      expect(result).toEqual(email);
    });
  });
});