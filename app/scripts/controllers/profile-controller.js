define(
    ["app", "constants/view-modes",
        "directives/expandable-container/directive", "directives/views-directive", "directives/view-directive"],
    function (app, VIEW_MODES) {
        "use strict";

        app.controller("ProfileController",
            ["$scope",
            function ($scope) {
                var ViewCommand, personalViewCommand, loginViewCommand;

                ViewCommand = function (viewName) {
                    return {
                        cancel: function () {
                            this.$views.$switchTo(VIEW_MODES.show);
                            this.changeViewMode(viewName, VIEW_MODES.show);
                        },
                        edit: function () {
                            this.$views.$switchTo(VIEW_MODES.edit);
                            this.changeViewMode(viewName, VIEW_MODES.edit);
                        }
                    }
                };

                $scope.changeViewMode = function (viewName, mode) {
                    if (viewName === "person") {
                        $scope.showedPersonal = mode;
                    } else if (viewName === "login") {
                        $scope.showedLogin = mode;
                    } else {
                        throw new Error("unexpected view is found. " + viewName);
                    }
                }

                personalViewCommand = new ViewCommand("person");
                $scope.cancelPersonal = personalViewCommand.cancel;
                $scope.editPersonal = personalViewCommand.edit;

                loginViewCommand = new ViewCommand("login");
                $scope.cancelLogin = loginViewCommand.cancel;
                $scope.editLogin = loginViewCommand.edit;

                $scope.showedPersonal = VIEW_MODES.show;
                $scope.showedLogin = VIEW_MODES.show;

                $scope.savePersonal = function () {
                    // do save here

                    // change view mode
                    this.$views.$switchTo(VIEW_MODES.show);
                    this.changeViewMode(CON_PERSONAL_VIEW_NAME, VIEW_MODES.show);
                }
            }
        ]);
    });