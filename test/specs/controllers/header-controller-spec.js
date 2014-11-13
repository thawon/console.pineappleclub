﻿define(["angularMocks", "controllers/header-controller", "constants/auth-events"],
    function (angularMocks, target, AUTH_EVENTS) {
        "use strict";

        describe("Unit: HeaderController", function () {

            beforeEach(module("console.pineappleclub"));

            var ctrl, scope, rootScope, $q, FutureStateServiceMock, AuthServiceMock;

            beforeEach(inject(function ($controller, $rootScope, _$q_) {
                $q = _$q_;

                scope = $rootScope.$new();
                rootScope = $rootScope.$new();

                scope.setCurrentUser = function (user) { }

                FutureStateServiceMock = {
                    goto: function (stateName) { }
                };

                AuthServiceMock = {
                    logout: function (whenError) { }
                };

                spyOn(scope, "setCurrentUser");
                spyOn(rootScope, "$broadcast");
                spyOn(FutureStateServiceMock, "goto");

                ctrl = $controller("HeaderController", {
                    $scope: scope,
                    $rootScope: rootScope,
                    FutureStateService: FutureStateServiceMock,
                    AuthService: AuthServiceMock
                });
            }));

            it("current user is cleared after a successful logout",
            function () {
                spyOn(AuthServiceMock, "logout").andCallFake(function (whenError) {
                    var deferred = $q.defer();

                    deferred.resolve({ success: true });

                    return deferred.promise;
                });

                scope.logout();

                // Propagate promise to 'then' functions using $apply().
                scope.$apply();

                expect(scope.setCurrentUser).toHaveBeenCalledWith(null);
                expect(rootScope.$broadcast).toHaveBeenCalledWith(AUTH_EVENTS.logoutSuccess);

                expect(FutureStateServiceMock.goto).toHaveBeenCalledWith("signout");
            });

            it("current user is unable to logout",
            function () {
                spyOn(AuthServiceMock, "logout").andCallFake(function (whenError) {
                    var deferred = $q.defer();

                    deferred.resolve({ success: false });

                    whenError();

                    return deferred.promise;
                });

                scope.logout();

                expect(rootScope.$broadcast).toHaveBeenCalledWith(AUTH_EVENTS.logoutFailed);
            });
        });
    });