var Account = function () { };

Account.prototype.login = function (req, res) {
    var user = (req.user) ? req.user : null,
                result = {
                    userId: user._id,
                    username: user.username,
                    status: status.OK,
                    isAuthenticated: true
                };

    res.write(JSON.stringify(result));
    res.end();
}

Account.prototype.authenticate = function (email, password, done) {
    return done(null, false);
}

module.exports = Account;