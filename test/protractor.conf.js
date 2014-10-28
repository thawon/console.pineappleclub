exports.config = {
    // This allows you provide a URL to the Selenium Server that Protractor will use to execute tests. 
    // In this case Selenium Server must be previously started to be able to run tests on Protractor.
    seleniumAddress: "http://localhost:4444/wd/hub",
    
    capabilities: {
        "browserName": "chrome"
    },
    // A default URL may be passed to Protractor through the baseURL parameter. 
    // That way all calls by Protractor to the browser will use that URL.
    baseUrl: "http://127.0.0.1:3000",

    // An array of test files can be sent through the specs parameter for Protractor to execute. 
    // The path of the test files must be relative to the config file.
    specs: ["e2e/*Spec.js"],

    singleRun: false
}