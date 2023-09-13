// Import test data and locators from external files
const testData = require("./TestData");
const locators = require("./Locators");


describe("Add Book Functionality", () => {
  // Loop through the test data
  testData.forEach((data, index) => {
    // Create a test case for adding a book
    it(`Test Case ${index + 1}: Add Book`, () => {
      // Visit the login page
      cy.visit(data.url);
      
      // Fill in the username and password
      cy.get(locators.userNameInput).type(data.username);
      cy.get(locators.passwordInput).type(data.password);
      
      // Click the login button
      cy.get(locators.loginButton).click();
      
      // Verify that the URL includes the expected profile URL
      cy.url().should("include", data.profileURL);
      
      // Verify that the username is displayed on the page
      cy.get(locators.userNameValue).should("contain.text", data.username);
      
      // Navigate to the store
      cy.get(locators.gotoStoreButton).click();
      
      // Click on a specific book
      cy.contains('a', 'Designing Evolvable Web APIs with ASP.NET').click({ force: true });
      
      // Click the "Add To Your Collection" button
      cy.get(locators.addBookButton).click();
	  cy.wait(500)
    });
  });
});


describe("Remove Book Functionality", () => {
  // Loop through the test data
  testData.forEach((data, index) => {
    // Create a test case for removing a book
    it(`Test Case ${index + 1}: Remove Book`, () => {
      // Visit the login page
      cy.visit(data.url);
      
      // Fill in the username and password
      cy.get(locators.userNameInput).type(data.username);
      cy.get(locators.passwordInput).type(data.password);
      
      // Click the login button
      cy.get(locators.loginButton).click();
      
      // Click the "Delete" button to remove the book
      cy.get(locators.deleteButton).click();
      
      // Click the "OK" button in the confirmation modal
      cy.get(locators.okButton).click();
    });
  });
});
