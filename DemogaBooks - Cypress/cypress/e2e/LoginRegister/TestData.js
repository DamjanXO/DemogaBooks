// test-data.js
const testData = [
  {
    // Test Case: Login with valid user
	LoginUrl: "https://demoqa.com/login",
    testName: "Login Valid User",
    username: "DamjanMinovski",
    password: "P@ssw0rd1",
    expectedURL: "profile",
    expectedUsername: "DamjanMinovski",
  },
  {
    // Test Case: Login with invalid user
	LoginUrl: "https://demoqa.com/login",
    testName: "Login Invalid User",
    username: "invalidUsername",
    password: "invalidPassword",
    expectedErrorMessage: "Invalid username or password!",
  },
  {
    // Test Case: Login with empty fields
	LoginUrl: "https://demoqa.com/login",
    testName: "Login Empty Fields",
    expectedInvalidFields: ["userName", "password"],
    expectedURL: "register",
  },
  {
    // Test Case: Register a new user (with reCaptcha)
	RegisterUrl: "https://demoqa.com/register",
    testName: "Register a New User",
    firstname: "New",
    lastname: "User",
    username: "newUser",
    password: "P@ssw0rd1",
    expectedErrorMessage: "Please verify reCaptcha to register!",
  },

];

module.exports = testData;
