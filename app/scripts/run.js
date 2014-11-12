define(
    ["app", "constants/auth-events", "services/future-state-service"],
    function (app, AUTH_EVENTS) {
        app.run([
        "$rootScope", "FutureStateService", "AuthService", "ngProgress",
        function ($rootScope, FutureStateService, AuthService, ngProgress) {
            $rootScope.$on("$stateChangeStart", function (event, next) {
                var authorizedRoles = next.data.authorizedRoles;

                if (authorizedRoles[0] === "*") {
                    return;
                }

                if (!AuthService.isAuthorized(authorizedRoles)) {

                    FutureStateService.goto("login");

                    if (AuthService.isAuthenticated()) {
                        // user is not allowed
                        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                    } else {
                        // user is not logged in
                        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                    }
                } else {
                    ngProgress.start();
                }
            });

            $rootScope.$on("$stateChangeSuccess", function (event, next) {
                ngProgress.complete();
            });

        } ]);
    });