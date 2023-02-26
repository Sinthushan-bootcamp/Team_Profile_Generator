const Manager = require('../lib/manager');

describe('Manager', () => {
  describe('Initialization', () => {
    // Positive test
    it("Should create an instance of a Manager object", () => {
      // Arrange
      const name = 'Sinthushan';
      const id = '123';
      const email = 'sinthushan@gmail.com';
      const officeNumber = '54321'
      const role = 'Manager';
      // Act
      const obj = new Manager(name, id, email, officeNumber);
      const result = obj.getRole();
      // Assert
      expect(result).toEqual(role);
    });
  });
});