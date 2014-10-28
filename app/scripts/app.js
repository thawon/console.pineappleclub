define(
    ["angular", "ngResource", "ngProgress", "route", "dependencyResolver"],
    function (angular, ngResource, ngProgress, config, dependencyResolver) {
        "use strict";

        var app = angular.module("console.pineappleclub", ["ngResource", "ngProgress"]);

        app.config([
            "$routeProvider",
            "$locationProvider",
            "$controllerProvider",
            "$compileProvider",
            "$filterProvider",
            "$provide",
        function ($routeProvider, $locationProvider, $controllerProvider,
                    $compileProvider, $filterProvider, $provide) {

            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;
            app.constant = $provide.constant;

            if (config.routes !== undefined) {
                angular.forEach(config.routes, function (route, path) {
                    $routeProvider.when(
                        path,
                        {
                            templateUrl: route.templateUrl,
                            resolve: dependencyResolver(route.dependencies)
                        });
                });
            }

            if (config.defaultRoutePaths !== undefined) {
                $routeProvider.otherwise(
                    { redirectTo: config.defaultRoutePaths });
            }

            $locationProvider.html5Mode(true);
        } ]);

        return app;
    }
);
