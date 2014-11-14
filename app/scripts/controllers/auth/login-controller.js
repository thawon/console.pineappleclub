define(
    ["underscore", "app", "constants/auth-events", "constants/string", "services/future-state-service"],
    function (_, app, AUTH_EVENTS, STRING) {
        "use strict";

        app.controller("LoginController",
            ["$scope", "$rootScope", "$cookieStore", "FutureStateService", "AuthService",
            function ($scope, $rootScope, $cookieStore, FutureStateService, AuthService) {
                $scope.credentials = {
                    email: STRING.empty,
                    password: STRING.empty
                };

                $scope.login = function (credentials) {
                    AuthService.login(credentials, function () {
                        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    })
                    .then(function (res) {
                        var user = AuthService.getCurrentUser();

                        $scope.setCurrentUser(user);

                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);

                        goHome();
                    });
                }

                function goHome() {
                    FutureStateService.changeState("home");
                }

                if (AuthService.isAuthenticated()) {
                    // use has signed in, redirect to home page
                    goHome();
                }
            }
        ]);
    });