define(
    ["express", "passport", "authentication/account-factory"],
    function (express, passport, AccountFactory) {
        var account = AccountFactory.create(),
            router = express.Router();

        router.post("/login", account.login);

        return router;
    });