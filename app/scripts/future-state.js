define(
    ["app"],
    function (app) {
        app.config([
        "$futureStateProvider",
        function ($futureStateProvider) {
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
                require(["controllers/login/login-controller"], function (loginController) {
                    // RequireJS asynchronousely gives us the result of 
                    // lazyController.js as the 'lazyController' parameter

                    // Define the full UI-Router state using the 
                    // lazyController and the injected futureState 
                    var fullstate = { controller: "LoginController",
                        name: futureState.stateName,
                        url: futureState.urlPrefix,
                        templateUrl: futureState.templateUrl
                    };

                    // Resolve the promise with the full UI-Router state.
                    d.resolve(fullstate);
                });

                // The state factory returns the promise
                return d.promise;
            }
        } ]);
    });