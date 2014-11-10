define(
    ["angular", "angularAMD", "future-states", "ngResource", "ngCookies", "ngProgress", "uiRouterExtras", "uiRouter"],
    function (angular, angularAMD, futureStates) {
        "use strict";

        var app = angular.module("console.pineappleclub", ["ngResource", "ngProgress", "ngCookies", "ct.ui.router.extras"]);

        app.config([
            "$futureStateProvider", "$locationProvider", "$controllerProvider",
            "$compileProvider", "$filterProvider", "$provide",
        function ($futureStateProvider, $locationProvider, $controllerProvider,
                    $compileProvider, $filterProvider, $provide) {

            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;
            app.constant = $provide.constant;

            function requireCtrlStateFactory($q, futureState) {
                var d = $q.defer();

                // Tell RequireJS to lazy load
                require([futureState.controllerPath], function (controller) {
                    var fullstate = { controller: futureState.controllerName,
                        name: futureState.stateName,
                        url: futureState.urlPrefix,
                        templateUrl: futureState.templateUrl,
                        data: futureState.data
                    };

                    // Resolve the promise with the full UI-Router state.
                    d.resolve(fullstate);
                });

                // The state factory returns the promise
                return d.promise;
            };

            var loadAndRegisterFutureStates = function () {
                angular.forEach(futureStates, function (futureState) {
                    $futureStateProvider.futureState(futureState);
                });
            };

            // Register state factory that registers controller via eval.
            $futureStateProvider.stateFactory("requireCtrl", requireCtrlStateFactory);

            $futureStateProvider.addResolve(loadAndRegisterFutureStates);

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });

        } ]);

        return app;
    }
);
