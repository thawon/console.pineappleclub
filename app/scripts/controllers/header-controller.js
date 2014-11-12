define(
    ["app", "constants/user-roles"],
    function (app, USER_ROLES) {
        "use strict";

        app.controller("HeaderController",
            ["$scope",
            function ($scope) {
                $scope.USER_ROLES = USER_ROLES;
            }
        ]);
    });