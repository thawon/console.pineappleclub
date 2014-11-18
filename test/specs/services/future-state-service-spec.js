define(["angularMocks", "services/future-state-service", "future-states"],
    function (angularMocks, target, futureStates) {
        "use strict";

        describe("Unit: FutureStateService", function () {

            var service, $location;

            function findFutureState(stateName) {
                var length = futureStates.length;

                for (var i = 0; i < length; i++) {
                    if (futureStates[i].stateName === stateName) {
                        return futureStates[i];
                    }
                };
            };

            beforeEach(module("console.pineappleclub"));

            beforeEach(inject(function (FutureStateService, _$location_) {
                service = FutureStateService;

                $location = _$location_;
            }));

            it("change state",
            function () {
                var homeState = findFutureState("home");

                spyOn($location, "path");

                service.changeState(homeState.stateName);

                expect($location.path).toHaveBeenCalledWith(homeState.urlPrefix);
            });

        });
    });