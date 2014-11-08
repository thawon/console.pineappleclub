define(
    ["app", "services/auth-service", "constants/auth-events"],
    function (app) {
        "use strict";

        app.controller("HomeController",
            ["$scope", "$rootScope", "AuthService", "AUTH_EVENTS",
            function ($scope, $rootScope, AuthService, AUTH_EVENTS) {
                $scope.logout = function () {
                    AuthService.logout(function () {
                        $rootScope.$broadcast(AUTH_EVENTS.logoutFailed);
                    })
                    .then(function (res) {
                        $scope.setCurrentUser(null);

                        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
                    });
                }
            }
        ]);
    });