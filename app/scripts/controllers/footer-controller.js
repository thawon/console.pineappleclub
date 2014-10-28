define(
    ["app", "services/navigator-service"],
    function (app) {
        app.controller("FooterController", ["$scope", "NavigatorService",
            function ($scope, navigatorService) {                
                $scope.menu = navigatorService.pages.footer;
            }
        ]);
    });