define(
    ["app", "services/signup-service", "constants/auth-events"],
    function (app) {
        "use strict";

        app.controller("SignupController", 
            ["$scope", "$rootScope", "SignupService", "AUTH_EVENTS",
            function ($scope, $rootScope, SignupService, AUTH_EVENTS) {
                $scope.credentials = {
                    email: "",
                    password: ""
                };

                $scope.signup = function (credentials) {
                    SignupService.signup(credentials)
                     .then(function (user) {
                         $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                         $scope.setCurrentUser(user);
                     }, function () {
                         $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                     });
                }
            }
        ]);
    });