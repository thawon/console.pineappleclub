define(
    ["app", "bootstrap", "directives/expandable-container/directive", "directives/views-directive", "directives/view-directive"],
    function (app, bootstrap) {
        "use strict";

        app.controller("ProfileController",
            ["$scope",
            function ($scope) {

                $scope.showed = true;

                $scope.cancel = function () {
                    this.$views.$switchTo("show");
                    this.showed = true;
                }

                $scope.edit = function () {
                    this.$views.$switchTo("edit");
                    this.showed = false;
                }

                $scope.savexx = function () {
                    var x;
                    x = 1;
                }
            }
        ]);
    });