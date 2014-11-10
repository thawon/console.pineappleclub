define(
    ["app", "constants/auth-events", "services/signup-service"],
    function (app, AUTH_EVENTS) {
        "use strict";

        app.controller("SignupController", 
            ["$scope", "$rootScope", "SignupService",
            function ($scope, $rootScope, SignupService) {
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