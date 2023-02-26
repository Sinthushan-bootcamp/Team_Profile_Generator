const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    // Positive test
    it("Should create an instance of a Engineer object", () => {
      // Arrange
      const name = 'Sinthushan';
      const id = '123';
      const email = 'sinthushan@gmail.com';
      const github = 'sinthushan'
      const role = 'Engineer';
      // Act
      const obj = new Engineer(name, id, email, github);
      const result = obj.getRole();
      // Assert
      expect(result).toEqual(role);
    });
  });
  describe('getGithub', () => {
    // Positive test
    it("Should return a url to the users github portfolio", () => {
      // Arrange
      const name = 'Sinthushan';
      const id = '123';
      const email = 'sinthushan@gmail.com';
      const github = 'sinthushan'
      const github_url = `https://github.com/${github}`;
      // Act
      const obj = new Engineer(name, id, email, github);
      const result = obj.getGithub();
      // Assert
      expect(result).toEqual(github_url);
    });
  });
});