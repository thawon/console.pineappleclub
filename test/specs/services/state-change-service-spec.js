define(["angularMocks", "services/state-change-service", "constants/user-roles"],
    function (angularMocks, target, USER_ROLES) {
        "use strict";

        describe("Unit: StateChangeService", function () {

            var service, $rootScope, ngProgress, futureStateServiceMock, authServiceMock;

            beforeEach(module("console.pineappleclub", function ($provide) {
                futureStateServiceMock = {
                    changeState: function (stateName) { }
                }

                authServiceMock = {
                    isAuthenticated: function () { },
                    isAuthorized: function (authorizedRoles) { }
                }

                $provide.value("FutureStateService", futureStateServiceMock);
                $provide.value("AuthService", authServiceMock);
            }));

            beforeEach(inject(function (StateChangeService, _$rootScope_, _ngProgress_) {
                service = StateChangeService;

                $rootScope = _$rootScope_;
                ngProgress = _ngProgress_;

                spyOn(futureStateServiceMock, "changeState");
            }));

            it("page does not require authorisation",
            function () {
                var authorizedRoles = [USER_ROLES.all];

                spyOn(ngProgress, "start");

                service.change(authorizedRoles);

                expect(ngProgress.start).toHaveBeenCalled();

                expect(futureStateServiceMock.changeState).not.toHaveBeenCalledWith("login");
            });

            it("user is authorised for page",
            function () {
                var authorizedRoles = [USER_ROLES.admin];

                spyOn(ngProgress, "start");

                spyOn(authServiceMock, "isAuthorized").andCallFake(function () {
                    return true;
                });

                service.change(authorizedRoles);

                expect(ngProgress.start).toHaveBeenCalled();

                expect(futureStateServiceMock.changeState).not.toHaveBeenCalledWith("login");
            });

            it("user is not authorised for page",
            function () {
                var authorizedRoles = [USER_ROLES.admin];

                spyOn(authServiceMock, "isAuthorized").andCallFake(function () {
                    return false;
                });

                service.change(authorizedRoles);

                expect(futureStateServiceMock.changeState).toHaveBeenCalledWith("login");
            });
        });
    });