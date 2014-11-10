define(
    ["app", "angular"],
    function (app, angular) {
        app.factory("SignupService", ["$http",
            function ($http) {
                var signupService = {};

                signupService.signup = function (credentials) {
                    return $http.post("/signup", credentials)
                                .success(function (data, status, headers, config) {
                                    var x;
                                    x = 1;
                                })
                                .error(function (data, status, headers, config) {
                                    var x;
                                    x = 1;
                                });
                };

                return signupService;
            }
        ]);
    });