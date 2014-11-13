define(["angularMocks", "controllers/header-controller"],
    function (angularMocks, target) {
        "use strict";

        describe("Unit: HeaderController", function () {

            beforeEach(module("console.pineappleclub"));

            var ctrl, scope, rootScope, $q, FutureStateServiceMock, AuthServiceMock;

            beforeEach(inject(function ($controller, $rootScope, _$q_) {
                $q = _$q_;

                scope = $rootScope.$new();
                rootScope = $rootScope.$new();

                FutureStateServiceMock = {
                    goto: function (stateName) { }
                };

                AuthServiceMock = {
                    logout: function () {
                        return "abc";
                    }
                };

                spyOn(FutureStateServiceMock, "goto");
                spyOn(AuthServiceMock, "logout").andCallThrough();

                ctrl = $controller("HeaderController", {
                    $scope: scope,
                    $rootScope: rootScope,
                    FutureStateService: FutureStateServiceMock,
                    AuthService: AuthServiceMock
                });
            }));

            it("current user is cleared after a successful logout",
            function () {
                scope.logout();
            });

        });
    });