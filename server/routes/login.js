define(
    ["express"],
    function (express) {
        return function (passport) {
            var router = express.Router();

            router.post("/login", passport.authenticate("local-login"), function (req, res) {
                return res.send({ success: true, user: req.user });
            });

            router.post("/logout", function (req, res) {
                req.logout();

                return res.send({ success: true });
            })

            return router;
        }
    });