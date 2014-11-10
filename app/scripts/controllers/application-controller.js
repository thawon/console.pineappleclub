define(
    ["app", "services/auth-service"],
    function (app) {
        "use strict";

        app.controller("ApplicationController",
            ["$scope", "AuthService",
            function ($scope, AuthService) {
                var user = AuthService.getCurrentUser();

                $scope.setCurrentUser = function (user) {
                    $scope.currentUser = user;
                }

                $scope.setCurrentUser(user);
            }
        ]);
    });