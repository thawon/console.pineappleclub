define(
    ["controllerFactory", "services/auth-service", "constants/auth-events"],
    function (factory) {
        "use strict";
        factory.create({
            name: "LoginController",
            dependencies: [
                    "$scope",
                    "$rootScope",
                    "AuthService",
                    "AUTH_EVENTS"
                ],
            controller: function ($scope, $rootScope, AuthService, AUTH_EVENTS) {
                var that = this;

                this.initialise(arguments);

                $scope.credentials = {
                    username: "",
                    password: ""
                };

                $scope.login = $.proxy(that.login, that);
            },
            login: function (credentials) {
                this.AuthService.login(credentials)
                .then(function (user) {
                    this.$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                    this.$scope.setCurrentUser(user);
                }, function () {
                    this.$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                });
            }
        });
    });