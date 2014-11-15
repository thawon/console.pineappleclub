define(
    ["app", "constants/auth-events", "services/auth-service"],
    function (app, AUTH_EVENTS) {
        app.factory("AuthInterceptor",
            ["$rootScope", "$q",
            function ($rootScope, $q) {
                return {
                    responseError: function (res) {
                        $rootScope.$broadcast({
                            401: AUTH_EVENTS.notAuthenticated,
                            403: AUTH_EVENTS.notAuthorized,
                            419: AUTH_EVENTS.sessionTimeout,
                            440: AUTH_EVENTS.sessionTimeout
                        }[res.status], res);
                        return $q.reject(res);
                    }
                };
            }
        ]);

        app.config(["$httpProvider", function ($httpProvider) {
            $httpProvider.interceptors.push("AuthInterceptor");
        }]);
    });