define(
    ["underscore", "app", "future-states"],
    function (_, app, futureStates) {
        app.factory("FutureStateService", ["$location",
            function ($location) {
                var FutureStateService = {};

                FutureStateService.changeState = function (stateName) {
                    var target = _.first(_.where(futureStates, { stateName: stateName }));

                    $location.path(target.urlPrefix)
                }

                return FutureStateService;
            }
        ]);
    });