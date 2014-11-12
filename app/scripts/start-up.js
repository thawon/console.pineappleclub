define(
    ["app",
     "angularAMD",
     "controllers/application-controller",
     "controllers/navigator-controller",
     "controllers/header-controller",
     "controllers/side-bar-controller",
     "controllers/footer-controller",
     "run",
     "services/auth-interceptor"],
    function (app, angularAMD) {
        angularAMD.bootstrap(app);
    });