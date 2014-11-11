define(
    ["app", "directives/device-height-directive"],
    function (app) {
        "use strict";

        app.controller("SideBarController",
            ["$scope", "NavigatorService", "AppConfigurationService",
            function ($scope, NavigatorService, AppConfigurationService) {

                $scope.project = AppConfigurationService.project;
                $scope.menu = NavigatorService.pages.main;

                $scope.toggleSideBar = function () {
                    $(".row-offcanvas").toggleClass("active");
                }
            }
        ]);
    });