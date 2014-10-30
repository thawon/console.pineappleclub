define(
    ["controllerFactory", "constants/user-role", "services/auth-service"],
    function (factory) {
        "use strict";

        factory.create({
            name: "ApplicationController",
            dependencies: [
                    "$scope",
                    "USER_ROLES",
                    "AuthService"
                ],
            controller: function ($scope, USER_ROLES, AuthService) {
                this.initialise(arguments);

                $scope.currentUser = null;
                $scope.userRoles = USER_ROLES;
                $scope.isAuthorized = AuthService.isAuthorized;
            },
            setCurrentUser: function (user) {
                $scope.currentUser = user;
            }
        });
    });