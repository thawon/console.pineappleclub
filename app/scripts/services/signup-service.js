define(
    ["app", "angular"],
    function (app, angular) {
        app.factory("SignupService", ["$http",
            function ($http) {
                var signupService = {};

                signupService.signup = function (credentials) {
//                    return $http.post("/signup", credentials)
//                                .success(function (data, status, headers, config) {
//                                    Session.create(res.data.id, res.data.user.id,
//                                                       res.data.user.role);

//                                    return res.data.user;
//                                })
//                                .error(function (data, status, headers, config) {
//                                    var x;
//                                    x = 1;
//                                });
                };

                return signupService;
            }
        ]);
    });