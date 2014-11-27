define(
    ["app", "constants/view-modes",
        "directives/expandable-container/directive", "directives/views-directive", "directives/view-directive"],
    function (app, VIEW_MODES) {
        "use strict";

        app.controller("ProfileController",
            ["$scope",
            function ($scope) {
                var ViewCommand, personalViewCommand, loginViewCommand;

                $scope.viewManager = {
                    changeViewMode: function (viewName, mode) {
                        $scope.views[viewName].mode = mode;
                    },
                    views: {
                        personal: {
                            mode: VIEW_MODES.show
                        },
                        login: {
                            mode: VIEW_MODES.show
                        }
                    }
                };

                $scope.changeViewMode = function (viewName, mode) {
                    $scope.viewManager.views[viewName].mode = mode;
                }

                $scope.showedPersonal = VIEW_MODES.show;
                $scope.showedLogin = VIEW_MODES.show;

                var edit = function (viewName) {
                    this.$views.$switchTo(VIEW_MODES.edit);
                    this.changeViewMode(viewName, VIEW_MODES.edit);
                };

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

                personalViewCommand = new ViewCommand("personal");
                //$scope.cancel = cancel; // = personalViewCommand.cancel;
                $scope.edit = edit;

                //                $scope.loginViewCommand = new ViewCommand("login");
                //                $scope.cancelLogin = loginViewCommand.cancel;
                //                $scope.editLogin = loginViewCommand.edit;



                $scope.savePersonal = function () {
                    // do save here

                    // change view mode
                    this.$views.$switchTo(VIEW_MODES.show);
                    this.changeViewMode("personal", VIEW_MODES.show);
                }
            }
        ]);
    });