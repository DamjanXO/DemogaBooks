module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    viewportWidth: 1280,  // Set your desired width in pixels
    viewportHeight: 720,  // Set your desired height in pixels
	
	// Add chromeWebSecurity and chromeArgs options
    chromeWebSecurity: false,  // Disable Chrome web security
  },
};
