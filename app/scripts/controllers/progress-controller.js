define(
    ["app"],
    function (app) {
        app.controller("ProgressBarController", 
            ["$scope", "ngProgress", "AppConfigurationService",
            function ($scope, ngProgress, configuration) {
                ngProgress.color(configuration.progress.color);

                $scope.$on("$routeChangeStart", function () {
                    ngProgress.start();
                });

                $scope.$on("$routeChangeSuccess", function () {
                    ngProgress.complete();
                });
            }
        ]);
    });