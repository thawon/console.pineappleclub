var mongoose = require("mongoose"),
    config = require("./server/config"),
    database = {
        mongoose: mongoose
    },
    uri = "mongodb://" + config.mongodb.host + "/" + config.mongodb.database;

mongoose.connect(uri);

mongoose.connection.on("error", function (err) {
    throw new Error(err);
});

module.exports = database;