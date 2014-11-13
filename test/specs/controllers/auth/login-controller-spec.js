define(["angularMocks", "controllers/auth/login-controller", "constants/auth-events"],
    function (angularMocks, target, AUTH_EVENTS) {
        "use strict";

        describe("Unit: LoginController", function () {

            beforeEach(module("console.pineappleclub"));

            var createController, scope, rootScope, cookieStore, $q, FutureStateServiceMock, AuthServiceMock;

            beforeEach(inject(function ($controller, $rootScope, _$cookieStore_, _$q_) {
                $q = _$q_;

                scope = $rootScope.$new();
                rootScope = $rootScope.$new();
                cookieStore = _$cookieStore_;

                scope.setCurrentUser = function (user) { }

                FutureStateServiceMock = {
                    goto: function (stateName) { }
                };

                AuthServiceMock = {
                    login: function (credentials, whenError) { },
                    getCurrentUser: function () { },
                    isAuthenticated: function () { }
                };

                spyOn(scope, "setCurrentUser");
                spyOn(rootScope, "$broadcast");
                spyOn(FutureStateServiceMock, "goto");

                createController = function () {
                    return $controller("LoginController", {
                        $scope: scope,
                        $rootScope: rootScope,
                        $cookieStore: cookieStore,
                        FutureStateService: FutureStateServiceMock,
                        AuthService: AuthServiceMock
                    });
                };
            }));

            it("user logins successfully",
            function () {
                var user = {};

                spyOn(AuthServiceMock, "login").andCallFake(function (whenError) {
                    var deferred = $q.defer();

                    deferred.resolve({ success: true });

                    return deferred.promise;
                });

                spyOn(AuthServiceMock, "getCurrentUser").andCallFake(function () {
                    return user;
                });

                createController();

                scope.login();

                scope.$apply();

                expect(scope.setCurrentUser).toHaveBeenCalledWith(user);
                expect(rootScope.$broadcast).toHaveBeenCalledWith(AUTH_EVENTS.loginSuccess);

                expect(FutureStateServiceMock.goto).toHaveBeenCalledWith("home");
            });

            it("current user is unable to login",
            function () {
                spyOn(AuthServiceMock, "login").andCallFake(function (credentials, whenError) {
                    var deferred = $q.defer();

                    deferred.resolve({ success: false });

                    whenError();

                    return deferred.promise;
                });

                createController();

                scope.login();

                expect(rootScope.$broadcast).toHaveBeenCalledWith(AUTH_EVENTS.loginFailed);
            });

            it("user is authenticated",
            function () {
                spyOn(AuthServiceMock, "isAuthenticated").andCallFake(function () {
                    return true;
                });

                createController();

                expect(FutureStateServiceMock.goto).toHaveBeenCalled();
            });

            it("user is not authenticated",
            function () {
                spyOn(AuthServiceMock, "isAuthenticated").andCallFake(function () {
                    return false;
                });

                createController();

                expect(FutureStateServiceMock.goto).not.toHaveBeenCalled();
            });
        });
    });