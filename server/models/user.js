var modelBase = require("./server/models/model-base"),
    User = modelBase.createModel({
        name: "user",
        attr: {
            username: String,
            email: String,
            password: String
        }
    });

    User.extend({
        getUser: function (email, cb) {
            this.model.findOne({ email: email }).lean().exec(
                function (err, result) {
                    cb(err, result)
                });
        },
        createUser: function (username, email, password, cb) {
            var that = this;

            this.getUser(email, _.bind(function (err, user) {
                if (err)
                    return new Error(err.message);

                if (user)
                    return cb(null, { accountStatus: 1, user: user });

                that.save({
                    username: username,
                    email: email,
                    password: password
                }, function (err, result) {
                    if (err)
                        return new Error(err.message);

                    return cb(null, { accountStatus: 0, user: result });
                });
            }, this));
        }
    });

module.exports = User;