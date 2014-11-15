define(
    ["app", "constants/auth-events", "services/future-state-service"],
    function (app, AUTH_EVENTS) {
        "use strict";

        app.controller("HeaderController",
            ["$scope", "$rootScope", "FutureStateService", "AuthService", 
            function ($scope, $rootScope, FutureStateService, AuthService) {
                $scope.logout = function () {
                    AuthService.logout()
                    .then(function (res) {
                        $scope.setCurrentUser(null);

                        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);

                        FutureStateService.changeState("signout");
                    });
                }
            }
        ]);
    });