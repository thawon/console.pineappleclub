define(
    ["app", "services/auth-service", "services/app-configuration-service"],
    function (app) {
        "use strict";

        app.controller("ApplicationController",
            ["$scope", "AuthService", "ngProgress", "AppConfigurationService",
            function ($scope, AuthService, ngProgress, AppConfigurationService) {
                var user = AuthService.getCurrentUser();

                // setting progress bar color
                ngProgress.color(AppConfigurationService.progress.color);

                $scope.setCurrentUser = function (user) {
                    $scope.currentUser = user;
                }

                $scope.setCurrentUser(user);
            }
        ]);
    });