define(
    ["app", "services/signup-service", "constants/auth-events"],
    function (app) {
        "use strict";

        app.controller("LoginController",
            ["$scope", "$rootScope", "$cookieStore", "AuthService", "AUTH_EVENTS",
            function ($scope, $rootScope, $cookieStore, AuthService, AUTH_EVENTS) {
                $scope.credentials = {
                    email: "",
                    password: ""
                };

                $scope.login = function (credentials) {
                    AuthService.login(credentials, function () {
                        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    })
                    .then(function (res) {
                        var user = AuthService.getCurrentUser();
                        $scope.setCurrentUser(user);

                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                    });
                }
            }
        ]);
    });