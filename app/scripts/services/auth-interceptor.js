define(
    ["app", "constants/auth-events", "services/auth-service"],
    function (app) {
        app.factory("AuthInterceptor",
            ["$rootScope", "$q", "AUTH_EVENTS",
            function ($rootScope, $q, AUTH_EVENTS) {
                return {
                    responseError: function (res) {
                        $rootScope.$broadcast({
                            401: AUTH_EVENTS.notAuthenticated,
                            403: AUTH_EVENTS.notAuthorized,
                            419: AUTH_EVENTS.sessionTimeout,
                            440: AUTH_EVENTS.sessionTimeout
                        }[response.status], res);
                        return $q.reject(res);
                    }
                };
            }
        ]);

        app.config(["$httpProvider", function ($httpProvider) {
            $httpProvider.interceptors.push("AuthInterceptor");
        }]);
    });