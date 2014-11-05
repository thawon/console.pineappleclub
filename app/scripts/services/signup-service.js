define(
    ["app", "angular", "services/session-service"],
    function (app, angular) {
        app.factory("SignupService", ["$http", "Session",
            function ($http, Session) {
                var signupService = {};

                signupService.signup = function (credentials) {
                    return $http
                          .post("/signup", credentials).then(function (res) {
                              Session.create(res.data.id, res.data.user.id,
                                           res.data.user.role);

                              return res.data.user;
                          });
                };

                return signupService;
            }
        ]);
    });