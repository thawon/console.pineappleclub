define(
    ["app", "bootstrap", "directives/expandable-container/directive", "directives/views-directive", "directives/view-directive"],
    function (app, bootstrap) {
        "use strict";

        app.controller("ProfileController",
            ["$scope",
            function ($scope) {

                $scope.change = function () {
                    $scope.showed = false;
                }

                $scope.changex = function () {
                    $scope.showed = true;
                }

                $scope.showed = true;

                $scope.cancel = function () {
                    this.$views.$switchTo("show");
                    this.changex();
                }

                $scope.edit = function () {
                    this.$views.$switchTo("edit");
                    this.change();
                }

                $scope.savexx = function () {
                    var x;
                    x = 1;
                }
            }
        ]);
    });