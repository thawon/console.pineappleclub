define(
    ["app", "services/auth-service", "services/app-configuration-service"],
    function (app) {
        "use strict";

        app.controller("ApplicationController",
            ["$scope", "AuthService", "ngProgress", "AppConfigurationService",
            function ($scope, AuthService, ngProgress, AppConfigurationService) {
                $scope.setCurrentUser = function (user) {
                    $scope.currentUser = user;
                }

                // setting progress bar color
                ngProgress.color(AppConfigurationService.progress.color);

                // check if the user are still logged in from last session.
                AuthService.authenticated()
                .then(function (data) {
                    if (data.success) {
                        $scope.setCurrentUser(AuthService.getCurrentUser());
                    }
                });
            }
        ]);
    });