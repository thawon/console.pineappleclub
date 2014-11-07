define(
    ["angular", "route", "angularAMD", "ngResource", "ngProgress", "uiRouterExtras", "uiRouter", "dependencyResolver"],
    function (angular, config, angularAMD) {
        "use strict";

        var app = angular.module("console.pineappleclub", ["ngResource", "ngProgress", "ct.ui.router.extras"]);

        app.config([
            "$locationProvider",
            "$controllerProvider",
            "$compileProvider",
            "$filterProvider",
            "$provide",
        function ($locationProvider, $controllerProvider,
                    $compileProvider, $filterProvider, $provide) {

            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;
            app.constant = $provide.constant;

            //            if (config.routes !== undefined) {
            //                angular.forEach(config.routes, function (route, path) {
            //                    $routeProvider.when(
            //                        path,
            //                        {
            //                            templateUrl: route.templateUrl,
            //                            data: route.data,
            //                            resolve: dependencyResolver(route.dependencies)
            //                        });
            //                });
            //            }

            //            if (config.defaultRoutePaths !== undefined) {
            //                $routeProvider.otherwise(
            //                    { redirectTo: config.defaultRoutePaths });
            //            }

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });

        } ]);

        angularAMD.bootstrap(app);

        return app;
    }
);
