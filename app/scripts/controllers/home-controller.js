define(
    ["app", "constants/auth-events", "services/auth-service"],
    function (app, AUTH_EVENTS) {
        "use strict";

        app.controller("HomeController",
            ["$scope", "$rootScope", "AuthService",
            function ($scope, $rootScope, AuthService) {
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