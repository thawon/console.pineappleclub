var util = require("util"),
    //Account = require("./server/auth/account"),
    Factory = function () { };

util.inherits(Factory, Object);

Factory.prototype.create = function () {
    return new Account();
}

module.exports = Factory;