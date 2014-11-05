define(
    ["express"],
    function (express) {
        return function (passport) {
            var router = express.Router();

            router.post("/signup", passport.authenticate("local-signup"), function (req, res) {
                var user = (req.user) ? req.user : null,
                    result = {
                        status: status.OK,
                        isAuthenticated: false
                    };

                if (user) {
                    result.isAuthenticated = true;

                    result.userId = user._id;
                    result.username = user.username;
                }

                res.write(JSON.stringify(result));
                res.end();
            });

            return router;
        }
    });