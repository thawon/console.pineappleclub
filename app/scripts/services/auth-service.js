define(
    ["app", "angular"],
    function (app, angular) {
        app.factory("AuthService", 
            ["$injector", "$cookieStore",
            function ($injector, $cookieStore) {
                var $http = $injector.get("$http"),
                    authService = {};

                authService.login = function (credentials, whenError) {
                    return $http.post("/login", credentials).
                        success(function (data, status, headers, config) {
                            if (data.success) {
                                var user = data.user.local;
                                user.userRole = "admin";

                                $cookieStore.put("user", user);
                            }

                            return data;
                        }).
                        error(function (data, status, headers, config) {
                            whenError();
                        });
                };

                authService.logout = function (whenError) {
                    return $http.post("/logout").
                        success(function (data, status, headers, config) {
                            if (data.success) {
                                $cookieStore.remove("user");
                            }

                            return data;
                        }).
                        error(function (data, status, headers, config) {
                            whenError();
                        });
                };

                authService.isAuthenticated = function () {
                    return !!authService.getCurrentUser();
                };

                authService.isAuthorized = function (authorizedRoles) {
                    var currentUser = authService.getCurrentUser()

                    if (!angular.isArray(authorizedRoles)) {
                        authorizedRoles = [authorizedRoles];
                    }

                    return (authService.isAuthenticated()
                            && authorizedRoles.indexOf(currentUser.userRole) !== -1);
                };

                authService.getCurrentUser = function () {
                    var user = $cookieStore.get("user");

                    return (user) ? user : null;
                }

                return authService;
            }
        ]);
    });