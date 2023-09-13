// Import test data and locators from external files
const testData = require("./TestData");
const locators = require("./Locators");


describe("Login/Register Testing", () => {
	
  // Test: Login Valid User
  it("Login Valid User", () => {
    const data = testData[0];
    cy.visit(data.LoginUrl);

    // Fill in valid username and password
    cy.get(locators.userNameInput).type(data.username);
    cy.get(locators.passwordInput).type(data.password);

    // Click the login button
    cy.get(locators.loginButton).click();

    // Verify that the URL includes the expected profile URL
    cy.url().should("include", data.expectedURL);

    // Verify that the username is displayed on the page
    cy.get(locators.userNameValue).should("contain.text", data.expectedUsername);
  });

  // Test: Login Invalid User
  it("Login Invalid User", () => {
    const data = testData[1];
    cy.visit(data.LoginUrl);

    // Fill in invalid username and password
    cy.get(locators.userNameInput).type(data.username);
    cy.get(locators.passwordInput).type(data.password);

    // Click the login button
    cy.get(locators.loginButton).click();

    // Verify that the error message is visible and contains the expected text
    cy.get(locators.InvalidUserMessage).should('be.visible');
    cy.get(locators.InvalidUserMessage).should('contain.text', data.expectedErrorMessage);
  });

  // Test: Login Empty Fields
  it("Login Empty Fields", () => {
    const data = testData[2];
    cy.visit(data.LoginUrl);

    // Click the login button without entering any credentials
    cy.get(locators.loginButton).click();

    // Verify that username and password fields are marked as invalid
    data.expectedInvalidFields.forEach((expectedInvalidFields) => {
      cy.get(`#${expectedInvalidFields}.is-invalid`).should('be.visible');
    });

    // Click the "New User" button to navigate to the registration page
    cy.get(locators.newUserButton).click();

    // Verify that the URL includes "register" after clicking "New User"
    cy.url().should("include", data.expectedURL);
  });

  // Test: Register a New User (Note: ReCaptcha is a blocker for this test)
  it("Register a New User", () => {
    const data = testData[3];
    cy.visit(data.RegisterUrl);

    // Fill in registration details
    cy.get(locators.firstnameInput).type(data.firstname);
    cy.get(locators.lastnameInput).type(data.lastname);
    cy.get(locators.userNameInput).type(data.username);
    cy.get(locators.passwordInput).type(data.password);

    // Click the registration button
    cy.get(locators.registerButton).click();

    // Verify that the error message indicates the need to verify reCaptcha
    cy.get(locators.InvalidUserMessage).should('contain.text', 'Please verify reCaptcha to register!');
    
    // Note: ReCaptcha is a blocker for this test, so it ends here
  });

});
