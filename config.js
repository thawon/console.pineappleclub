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

module.exports = config;