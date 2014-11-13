var tests = Object.keys(window.__karma__.files).filter(function (file) {
    // run tests - only files ending with "Spec.js"
    return /spec\.js$/.test(file);
});

requirejs.config({
    // Karma serves files from "/base"
    baseUrl: "/base",

    paths: {
        angular: "app/scripts/vendors/angular.min",
        angularMocks: "app/scripts/vendors/angular-mocks",
        ngResource: "app/scripts/vendors/angular-resource.min",        
        ngCookies: "app/scripts/vendors/angular-cookies.min",
        ngProgress: "app/scripts/vendors/ngProgress.min",
        angularAMD: "app/scripts/vendors/angularAMD",
        uiRouter: "app/scripts/vendors/angular-ui-router.min",
        uiRouterExtras: "app/scripts/vendors/ct-ui-router-extras.min",
        underscore: "app/scripts/vendors/underscore-min",
        jquery: "app/scripts/vendors/jquery",
        domReady: "app/scripts/vendors/domReady",
        app: "app/scripts/app",
        controllers: "app/scripts/controllers",

        services: "app/scripts/services",
        sharedLib: "shared-lib",
        constants: "shared-lib/constants",

        "future-states": "app/scripts/future-states"
    },

    shim: {
        angular: {
            deps: ["jquery"],
            exports: "angular"
        },
        angularMocks:
        {
            deps: ["angular"]
        },
        ngResource: {
            deps: ["angular"]
        },
        ngCookies: {
            deps: ["angular"]
        },
        ngProgress: {
            deps: ["angular"]
        },
        angularAMD: {
            deps: ["angular"]
        },
        uiRouter: {
            deps: ["angular"]
        },
        uiRouterExtras: {
            deps: ["angular"]
        },
        bootstrap: {
            deps: ["jquery"]
        },
        underscore: {
            exports: "_"
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});