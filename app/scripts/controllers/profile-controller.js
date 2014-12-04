define(
    ["app",
        "directives/expandable-container/directive", "directives/entity-detail-container/directive"],
    function (app) {
        "use strict";

        app.controller("ProfileController",
            ["$scope",
            function ($scope) {
                $scope.updateFn = function () {
                    console.log("A save here.");
                };

                $scope.updateFnB = function () {
                    console.log("B save here.");
                };

                $scope.saveXX = function () {
                    console.log("save here.");
                };
            }
        ]);
    });