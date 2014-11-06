define(
    ["express"],
    function (express) {
        return function (passport) {
            var router = express.Router();

            router.post("/login", function (req, res, next) {
                passport.authenticate("local-login", function (err, user, info) {
                    if (err) {
                        // will generate a 500 error
                        return next(err);
                    }

                    // Generate a JSON response reflecting authentication status
                    if (!user) {
                        return res.send({ success: false, message: "The email or password you entered is incorrect.", user: null });
                    }

                    return res.send({ success: true, user: user });
                })(req, res, next);
            });

            return router;
        }
    });