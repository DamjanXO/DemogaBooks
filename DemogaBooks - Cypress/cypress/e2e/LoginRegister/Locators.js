const locators = {
  // Login Page
  userNameInput: "#userName",
  passwordInput: "#password",
  loginButton: "#login",
  InvalidUserMessage: "#name",
  EmptyFields: "`#${expectedInvalidFields}.is-invalid`",
  
  // Profile Page
  userNameValue: "#userName-value",
  
  // Registration Page
  newUserButton: "#newUser",
  firstnameInput: "#firstname",
  lastnameInput: "#lastname",
  registerButton: "#register",
};

module.exports = locators;
