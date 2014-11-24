define(
    ["app", "bootstrap"],
    function (app, bootstrap) {
        "use strict";

        app.controller("ProfileController",
            ["$scope",
            function ($scope) {
                $scope.showPersonalDetail = function () {
                    var $this = $("#toggle_personal_img");
                    var $collapse = $this.closest('.collapse-group').find('.collapse');
                    $collapse.collapse('toggle');
                }
            }
        ]);
    });