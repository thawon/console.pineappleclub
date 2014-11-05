define(
    ["controllerFactory", "services/signup-service", "constants/auth-events"],
    function (factory) {
        "use strict";

        factory.create({
            name: "SignupController",
            dependencies: [
                    "$scope",
                    "$rootScope",
                    "SignupService",
                    "AUTH_EVENTS"
                ],
            controller: function ($scope, $rootScope, SignupService, AUTH_EVENTS) {
                var that = this;

                this.initialise(arguments);

                $scope.credentials = {
                    email: "",
                    password: ""
                };

                $scope.signup = $.proxy(that.signup, that);
            },
            signup: function (credentials) {
                this.SignupService.signup(credentials)
                .then(function (user) {
                    this.$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                    this.$scope.setCurrentUser(user);
                }, function () {
                    this.$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                });
            }
        });
    });