define(
    ["app", "angular", "services/session-service"],
    function (app, angular) {
        app.factory("AuthService", ["$http", "Session",
            function ($http, Session) {
                var authService = {};

                authService.login = function (credentials) {
                    return $http.post("/login", credentials).then(function (res) {
                            var data = res.data,
                                user;

                              if (data.success) {
                                  user = data.user;
                                  Session.create(user.id, user.id, "admin");
                              }

                              return data;
                          });
                };

                authService.isAuthenticated = function () {
                    return !!Session.userId;
                };

                authService.isAuthorized = function (authorizedRoles) {
                    if (!angular.isArray(authorizedRoles)) {
                        authorizedRoles = [authorizedRoles];
                    }

                    return (authService.isAuthenticated()
                            && authorizedRoles.indexOf(Session.userRole) !== -1);
                };

                return authService;
            }
        ]);
    });