var nconf = require ('nconf')

nconf.use('memory');
nconf.defaults({
    app : {
        local: {
            urlbasepath: "https://www.canzea.com",
            screenshots: true
        }
      }
});
nconf.env({ lowerCase: true, separator: '_', parseValues: true });

module.exports = {
    // this controls whether to abort the test execution when an assertion failed and skip the rest
    // it's being used in waitFor commands and expect assertions
    abortOnAssertionFailure : true,
  
    // this will overwrite the default polling interval (currently 500ms) for waitFor commands
    // and expect assertions that use retry
    waitForConditionPollInterval : 300,
  
    // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
    // expect assertions
    waitForConditionTimeout : 5000,
  
    // this will cause waitFor commands on elements to throw an error if multiple
    // elements are found using the given locate strategy and selector
    throwOnMultipleElementsReturned : false,
  
    // controls the timeout time for async hooks. Expects the done() callback to be invoked within this time
    // or an error is thrown
    asyncHookTimeout : 10000,

    after : function(browser) {
    },

    beforeEach : function(browser, done) {
      browser.config = browser.globals.app[process.env.ENV];
      done();
    },

    afterEach : function(browser, done) {
    },
  
  
    app : nconf.get('app')
  };
  