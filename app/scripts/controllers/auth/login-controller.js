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

                $scope.errorMessage = null;

                $scope.login = function (credentials) {
                    AuthService.login(credentials)
                    .then(function (res) {
                        var user = AuthService.getCurrentUser();

                        $scope.setCurrentUser(user);

                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);

                        goHome();
                    });
                }

                $scope.$on(AUTH_EVENTS.notAuthenticated, function () {
                    $scope.errorMessage = "The email or password you entered is incorrect.";
                });

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