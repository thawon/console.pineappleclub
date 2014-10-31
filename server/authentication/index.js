module.exports = function (app) {
    var AccountFactory = require("./server/auth/account-factory"),        
        passport = require("passport"),
        passportLocal = require("passport-local"),
        LocalStrategy = passportLocal.Strategy,
        account = factory.create();

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
    },
    function (email, password, done) {
        return account.authenticate(email, password, done);
    }));

    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {
        account.getUserById(id, done);
    });
}