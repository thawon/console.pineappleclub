define(
    ["app", "constants/auth-events"],
    function (app, AUTH_EVENTS) {
        app.run([
        "$rootScope", "AuthService",
        function ($rootScope, AuthService) {
            $rootScope.$on("$stateChangeStart", function (event, next) {
                var authorizedRoles = next.data.authorizedRoles;

                if (authorizedRoles[0] === "*") {
                    return;
                }

                if (!AuthService.isAuthorized(authorizedRoles)) {

                    event.preventDefault();

                    if (AuthService.isAuthenticated()) {
                        // user is not allowed
                        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                    } else {
                        // user is not logged in
                        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                    }
                }

            });
        } ]);
    });