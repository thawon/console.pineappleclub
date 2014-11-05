define(
    [],
    function () {
        return function (app, passport) {
            var home = requirejs("routes/home"),
                signup = requirejs("routes/signup")(passport);

            app.use("/", home);
            app.use("/", signup);
        }
    });