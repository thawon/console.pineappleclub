define(
    [],
    function () {
        var Account = function () { };

        Account.prototype.login = function (req, res) {
            var user = (req.user) ? req.user : null,
                result = {
                    userId: "1",
                    username: "admin",
                    //status: status.OK,
                    isAuthenticated: true
                };

            res.write(JSON.stringify(result));
            res.end();
        }

        Account.prototype.authenticate = function (email, password, done) {
            return done(null, false);
        }

        return Account;
    });