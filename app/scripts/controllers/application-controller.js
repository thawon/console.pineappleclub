define(
    ["app", "constants/user-role", "services/auth-service"],
    function (app) {
        "use strict";

        app.controller("ApplicationController",
            ["$scope", "USER_ROLES", "AuthService",
            function ($scope, USER_ROLES, AuthService) {
                $scope.currentUser = null;
                $scope.userRoles = USER_ROLES;
                $scope.isAuthorized = AuthService.isAuthorized;

                $scope.currentUser = function (user) {
                    $scope.currentUser = user;
                }
            }
        ]);
    });