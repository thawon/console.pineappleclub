var path = require("path"),
    consolidate = require("consolidate"),
    config = {},
    dirname = path.normalize(path.dirname(module.uri));

config.basePath = path.normalize(dirname);

config.express = {
    port: process.env.port || 3000,
    ip: "127.0.0.1",
    key: "connect.sid",
    secret: "pineappleclub_secret",
    view: {
        path: path.normalize(dirname + "\\app"),
        engine: {
            type: "jade",
            driver: consolidate.jade
        }
    },    
    staticPath: config.basePath + "/app"
};

config.mongodb = {
    port: process.env.MONGODB_PORT || 27017,
    host: process.env.MONGODB_HOST || "localhost",
    database: "console",
    url: "mongodb://MongoLab-bx:31lxdAi0BeqlQ_5m5hkJ6PjgQDerZhYV8HpR4QeUAlU-@ds030827.mongolab.com:30827/MongoLab-bx"
};

module.exports = config;