define(["angularMocks", "controllers/application-controller", "constants/auth-events"],
    function (angularMocks, target, AUTH_EVENTS) {
        "use strict";

        describe("Unit: ApplicationController", function () {

            beforeEach(module("console.pineappleclub"));

            var createController, scope, $rootScope, $q, ngProgress, AuthServiceMock;

            beforeEach(inject(function ($controller, _$rootScope_, _$q_, _ngProgress_, AppConfigurationService) {
                $rootScope = _$rootScope_;
                $q = _$q_;
                ngProgress = _ngProgress_;

                scope = _$rootScope_.$new();

                scope.setCurrentUser = function (user) { }

                AuthServiceMock = {
                    authenticated: function () { },
                    getCurrentUser: function () { }
                };

                spyOn(scope, "setCurrentUser");

                createController = function () {
                    return $controller("ApplicationController", {
                        $scope: scope,
                        AuthService: AuthServiceMock,
                        ngProgress: _ngProgress_,
                        AppConfigurationService: AppConfigurationService
                    });
                };
            }));

            it("check authentication when application starts",
            function () {
                var user = {};

                spyOn(AuthServiceMock, "authenticated").andCallFake(function () {
                    var deferred = $q.defer();

                    deferred.resolve({ success: true });

                    return deferred.promise;
                });

                spyOn(AuthServiceMock, "getCurrentUser").andCallFake(function () {
                    return user;
                });

                createController();

                scope.$apply();

                expect(scope.currentUser).toBe(user);
            });

            it("check authentication when application starts, user is not authenticated",
            function () {
                spyOn(AuthServiceMock, "authenticated").andCallFake(function () {
                    var deferred = $q.defer();

                    deferred.resolve({ success: false });

                    return deferred.promise;
                });
                
                createController();

                scope.$apply();

                expect(scope.currentUser).toBe(undefined);
            });
        });
    });