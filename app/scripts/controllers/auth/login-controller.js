define(
    ["app", "constants/auth-events"],
    function (app, AUTH_EVENTS) {
        "use strict";

        app.controller("LoginController",
            ["$scope", "$rootScope", "$cookieStore", "AuthService",
            function ($scope, $rootScope, $cookieStore, AuthService) {
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