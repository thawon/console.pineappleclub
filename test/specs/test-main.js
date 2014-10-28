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
        ngProgress: "app/scripts/vendors/ngProgress.min",
        underscore: "app/scripts/vendors/underscore-min",
        jquery: "app/scripts/vendors/jquery",
        domReady: "app/scripts/vendors/domReady",
        app: "app/scripts/app",
        controllers: "app/scripts/controllers",

        /* infrastructures */
        infrastructures: "app/scripts/infrastructures",
        controllerFactory: "app/scripts/infrastructures/controller-factory",
        constants: "app/scripts/infrastructures/constants",
        utility: "app/scripts/infrastructures/utility"
    },

    shim: {
        ngResource: {
            deps: ["angular"],
            exports: "angular"
        },
        ngProgress: {
            deps: ["angular"]
        },
        angularMocks:
        {
            deps: ["angular"]
        },
        angular: {
            deps: ["jquery"],
            exports: "angular"
        },
        underscore: {
            exports: "_"
        }
    },

    map: {
        app: {
            route: "routeMock",
            dependencyResolver: "dependencyResolverMock"
        },
        controllers: {
            "services/device-service": "DeviceServiceMock",
            "services/export-service": "ExportServiceMock"
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});