define(
    ["app", "constants/auth-events", "constants/user-roles", "services/future-state-service"],
    function (app, AUTH_EVENTS, USER_ROLES) {
        app.factory("StateChangeService",
            ["$rootScope", "FutureStateService", "AuthService", "ngProgress",
            function ($rootScope, FutureStateService, AuthService, ngProgress) {
                var stateChangeService = {
                    change: function (authorizedRoles) {

                        if (authorizedRoles[0] === USER_ROLES.all
                            || AuthService.isAuthorized(authorizedRoles)) {

                            ngProgress.start();

                        } else {

                            FutureStateService.changeState("login");

                            if (AuthService.isAuthenticated()) {
                                // user is not allowed
                                $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                            } else {
                                // user is not logged in
                                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                            }
                        }
                        
                    }
                };

                return stateChangeService;
            }
        ]);
    });