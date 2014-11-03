define(
    ["express", "passport", "authentication/account-factory"],
    function (express, passport, AccountFactory) {
        var account = AccountFactory.create(),
            router = express.Router();

        router.post("/login", passport.authenticate("local"), account.login);

        return router;
    });