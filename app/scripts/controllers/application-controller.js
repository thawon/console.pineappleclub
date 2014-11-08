define(
    ["app", "constants/user-role", "services/auth-service"],
    function (app) {
        "use strict";

        app.controller("ApplicationController",
            ["$scope", "USER_ROLES", "AuthService",
            function ($scope, USER_ROLES, AuthService) {
                var user = AuthService.getCurrentUser();

                $scope.setCurrentUser = function (user) {
                    $scope.currentUser = user;
                }

                $scope.setCurrentUser(user);
            }
        ]);
    });