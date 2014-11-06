require.config({
    paths: {
        /* vendors */
        angular: "vendors/angular.min",
        ngResource: "vendors/angular-resource.min",
        ngProgress: "vendors/ngProgress.min",
        ngRoute: "vendors/angular-route.min",
        uiRouter: "vendors/angular-ui-router.min",
        jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
        underscore: "vendors/underscore-min",
        bootstrap: "vendors/bootstrap.min",
        async: "vendors/async",

        /* services */
        dependencyResolver: "services/dependency-resolver-service",

        /* infrastructures */
        controllerFactory: "infrastructures/controller-factory",
        utility: "infrastructures/utility"
    },
    shim: {        
        ngResource: {
            deps: ["angular"]
        },
        ngProgress: {
            deps: ["angular"]
        },
        ngRoute: {
            deps: ["angular"]
        },
        uiRouter: {
            deps: ["angular"]
        },
        angular: {
            deps: ["jquery"],
            exports: "angular"
        },
        bootstrap: {
            deps: ["jquery"]
        },
        underscore: {
            exports: "_"
        }
    }
});

require(
    [
        "angular",
        "app",
        "start-up"
    ],
    function (angular, app) {
        angular.bootstrap(document, ["console.pineappleclub"]); 
    }
);
