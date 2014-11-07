//define(
//    ["app"],
//    function (app) {
//        "use strict";
//        return 
//        ["$scope", "$rootScope", "AuthService", "AUTH_EVENTS",
//        function ($scope, $rootScope, AuthService, AUTH_EVENTS) {
//            $scope.credentials = {
//                email: "",
//                password: ""
//            };

//            $scope.login = function (credentials) {
//                AuthService.login(credentials)
//                    .then(function (data) {
//                        if (data.success) {
//                            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
//                            $scope.setCurrentUser(data.user);
//                        } else {
//                            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
//                        }
//                    });
//            }
//        } ]
//    });

define(
    ["app", "services/signup-service", "constants/auth-events"],
    function (app) {
        "use strict";

        app.controller("LoginController",
            ["$scope", "$rootScope", "AuthService", "AUTH_EVENTS",
            function ($scope, $rootScope, AuthService, AUTH_EVENTS) {
                $scope.credentials = {
                    email: "",
                    password: ""
                };

                $scope.login = function (credentials) {
                    AuthService.login(credentials)
                        .then(function (data) {
                            if (data.success) {
                                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                                $scope.setCurrentUser(data.user);
                            } else {
                                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                            }
                        });
                }
            }
        ]);
    });