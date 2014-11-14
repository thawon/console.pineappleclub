define(
    ["app", "constants/auth-events", "constants/user-roles", "services/future-state-service"],
    function (app, AUTH_EVENTS, USER_ROLES) {
        app.run([
        "$rootScope", "FutureStateService", "AuthService", "ngProgress",
        function ($rootScope, FutureStateService, AuthService, ngProgress) {
            $rootScope.$on("$stateChangeStart", function (event, next) {
                var authorizedRoles = next.data.authorizedRoles;

                if (authorizedRoles[0] === USER_ROLES.all) {
                    return;
                }

                if (!AuthService.isAuthorized(authorizedRoles)) {

                    FutureStateService.changeState("login");

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