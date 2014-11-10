define(
    ["angular", "angularAMD", "constantsx/user-roles", "ngResource", "ngCookies", "ngProgress", "uiRouterExtras", "uiRouter"],
    function (angular, angularAMD, USER_ROLES) {
        "use strict";

        var app = angular.module("console.pineappleclub",
            ["ngResource", "ngProgress", "ngCookies", "ct.ui.router.extras"]);

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

            var loadAndRegisterFutureStates = function ($http) {
                return $http.get("futureStates.json").then(function (resp) {
                    angular.forEach(resp.data, function (fstate) {
                        // Register each state returned from $http.get() with $futureStateProvider
                        $futureStateProvider.futureState(fstate);
                    });
                });
            }

            // Register state factory that registers controller via eval.
            $futureStateProvider.stateFactory("requireCtrl", requireCtrlStateFactory);

            $futureStateProvider.addResolve(loadAndRegisterFutureStates);

            function requireCtrlStateFactory($q, futureState) {
                var d = $q.defer(); // make a deferred

                // Tell RequireJS to load lazyController 
                // (leave off the .js)
                require([futureState.controllerPath], function (loginController) {
                    // RequireJS asynchronousely gives us the result of 
                    // lazyController.js as the 'lazyController' parameter

                    // Define the full UI-Router state using the 
                    // lazyController and the injected futureState 
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
            }

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });

        } ]);

        return app;
    }
);
