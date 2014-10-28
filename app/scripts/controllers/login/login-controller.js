define(
    ["app", "constants/auth-events"],
    function (app) {
        app.controller("LoginController", ["$scope", "$rootScope", "AUTH_EVENTS",
            function ($scope, $rootScope, AUTH_EVENTS) {
                $scope.credentials = {
                    username: "",
                    password: ""
                };

                $scope.login = function (credentials) {
                    var x;
                    x = "";
                };
            }
        ]);
    });