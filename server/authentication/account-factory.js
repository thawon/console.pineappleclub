define(
    ["authentication/account", "util"],
    function (Account, util) {
        var Factory = function () { };

        util.inherits(Factory, Object);

        Factory.create = function () {
            return new Account();
        }

        return Factory;
    });