define(
    ["app",
     "angularAMD",
     "angularMocks",
     "controllers/application-controller",
     "controllers/navigator-controller",
     "controllers/header-controller",
     "controllers/side-bar-controller",
     "controllers/footer-controller",
     "run",
     "services/auth-interceptor"],
    function (app, angularAMD, angularMocks) {
        angularAMD.bootstrap(app);
    });