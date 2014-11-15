define(["angularMocks", "controllers/auth/login-controller", "constants/auth-events"],
    function (angularMocks, target, AUTH_EVENTS) {
        "use strict";

        describe("Unit: LoginController", function () {

            beforeEach(module("console.pineappleclub"));

            var createController, scope, rootScope, cookieStore, $rootScope, $q, FutureStateServiceMock, AuthServiceMock;

            beforeEach(inject(function ($controller, _$rootScope_, _$cookieStore_, _$q_) {
                $q = _$q_;
                $rootScope = _$rootScope_;

                scope = $rootScope.$new();
                cookieStore = _$cookieStore_;

                scope.setCurrentUser = function (user) { }

                FutureStateServiceMock = {
                    changeState: function (stateName) { }
                };

                AuthServiceMock = {
                    login: function (credentials) { },
                    getCurrentUser: function () { },
                    isAuthenticated: function () { }
                };

                spyOn(scope, "setCurrentUser");

                spyOn(FutureStateServiceMock, "changeState");

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
                rootScope = $rootScope.$new();

                spyOn(rootScope, "$broadcast");

                spyOn(AuthServiceMock, "login").andCallFake(function () {
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

                expect(FutureStateServiceMock.changeState).toHaveBeenCalledWith("home");
            });

            it("current user is unable to login",
            function () {
                spyOn(AuthServiceMock, "login").andCallFake(function (credentials) {
                    var deferred = $q.defer();

                    rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);

                    return deferred.promise;
                });

                rootScope = $rootScope;

                createController();

                scope.login();

                expect(scope.errorMessage).not.toBe(null);
            });

            it("user is authenticated",
            function () {
                spyOn(AuthServiceMock, "isAuthenticated").andCallFake(function () {
                    return true;
                });

                createController();

                expect(FutureStateServiceMock.changeState).toHaveBeenCalled();
            });               

            it("user is not authenticated",
            function () {
                spyOn(AuthServiceMock, "isAuthenticated").andCallFake(function () {
                    return false;
                });

                createController();

                expect(FutureStateServiceMock.changeState).not.toHaveBeenCalled();
            });                 
        });
    });