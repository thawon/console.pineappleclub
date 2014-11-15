define(
    ["app", "angular"],
    function (app, angular) {
        app.factory("AuthService",
            ["$cookieStore", "$http",
            function ($cookieStore, $http) {
                var authService = {};

                authService.login = function (credentials) {
                    return $http.post("/login", credentials)
                        .then(function (res) {
                            var data = res.data;

                            if (data.success) {
                                var user = data.user.local;

                                $cookieStore.put("user", user);
                            }

                            return data;
                        });
                };

                authService.logout = function () {
                    return $http.post("/logout")
                        .then(function (res) {
                            var data = res.data;

                            if (data.success) {
                                $cookieStore.remove("user");
                            }

                            return data;
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