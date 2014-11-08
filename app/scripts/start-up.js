define(
    ["app",
     "angularAMD",
     "controllers/application-controller",
     "controllers/navigator-controller",
     "controllers/footer-controller",
     "controllers/progress-controller",
     "run",
     "services/auth-interceptor"],
    function (app, angularAMD) {
        angularAMD.bootstrap(app);
    });