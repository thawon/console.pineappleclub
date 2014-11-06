define(
    ["app", "constants/auth-events", "services/auth-service", "services/session-service"],
    function (app) {
        app.factory("AuthInterceptor",
            ["$rootScope", "$q", "AuthService", "Session", "AUTH_EVENTS",
            function ($rootScope, $q, AuthService, Session, AUTH_EVENTS) {
                return {
                    /* Set Authentication.isAuthenticated to true if 200 received */
                    response: function (res) {
                        if (response != null
                            && response.status == 200
                            && !authService.isAuthenticated()) {

                            // set session here
                            var x;
                            x = 1;
                        }
                        return response || $q.when(response);
                    },
                    responseError: function (response) {
                        $rootScope.$broadcast({
                            401: AUTH_EVENTS.notAuthenticated,
                            403: AUTH_EVENTS.notAuthorized,
                            419: AUTH_EVENTS.sessionTimeout,
                            440: AUTH_EVENTS.sessionTimeout
                        }[response.status], response);
                        return $q.reject(response);
                    }
                };
            }
        ]);

        app.config(["$httpProvider", function ($httpProvider) {
            $httpProvider.interceptors.push("AuthInterceptor");
        }]);
    });