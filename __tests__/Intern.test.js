const Intern = require('../lib/intern');

describe('Intern', () => {
  describe('Initialization', () => {
    // Positive test
    it("Should create an instance of a Intern object", () => {
      // Arrange
      const name = 'Sinthushan';
      const id = '123';
      const email = 'sinthushan@gmail.com';
      const school = 'UofT'
      const role = 'Intern';
      // Act
      const obj = new Intern(name, id, email, school);
      const result = obj.getRole();
      // Assert
      expect(result).toEqual(role);
    });
  });
  describe('getSchool', () => {
    // Positive test
    it("Should return the school of the employee", () => {
      // Arrange
      const name = 'Sinthushan';
      const id = '123';
      const email = 'sinthushan@gmail.com';
      const school = 'UofT'
      // Act
      const obj = new Intern(name, id, email, school);
      const result = obj.getSchool();
      // Assert
      expect(result).toEqual(school);
    });
  });
});