define(
    ["controllerFactory", "services/app-configuration-service", "services/navigator-service"],
    function (factory) {
        "use strict";

        factory.create({
            name: "NavigatorController",
            configs: {
                ELE_SIDEBAR: ".row-offcanvas",
                CONS_ACTIVE: "active"
            },
            dependencies: [
                    "$scope",
                    "AppConfigurationService",
                    "NavigatorService"
                ],
            controller: function ($scope, appConfigurationService, navigatorService) {
                this.initialise(arguments);

                $scope.project = appConfigurationService.project;
                $scope.menu = navigatorService.pages.main;

                $scope.toggleSideBar = $.proxy(this.toggleSideBar, this);
            },
            toggleSideBar: function () {
                $(this.ELE_SIDEBAR).toggleClass(this.CONS_ACTIVE);
            }
        });
    });