define(
    ["app", "services/state-change-service"],
    function (app) {
        app.run([
        "$rootScope", "StateChangeService", "ngProgress",
        function ($rootScope, StateChangeService, ngProgress) {
            $rootScope.$on("$stateChangeStart", function (event, next) {
                StateChangeService.change(next.data.authorizedRoles);
            });

            $rootScope.$on("$stateChangeSuccess", function (event, next) {
                ngProgress.complete();
            });
        } ]);
    });