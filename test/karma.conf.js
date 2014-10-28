// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-08-31 using
// generator-karma 0.8.3

module.exports = function(config) {
  "use strict";

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: "../",

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ["jasmine", "requirejs"],

    // list of files / patterns to load in the browser
    files: [
        { pattern: "app/scripts/**/*.js", included: false },
        { pattern: "test/specs/**/*spec.js", included: false },

        { pattern: "test/specs/mocks/*.js", included: true },

        "test/specs/test-main.js"
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8082,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
        "PhantomJS"
        //"Chrome"
    ],

    // Which plugins to enable
    plugins: [
        "karma-phantomjs-launcher",
        "karma-chrome-launcher",
        "karma-jasmine",
        "karma-requirejs",
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO
  });
};
