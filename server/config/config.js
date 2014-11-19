define(
    ["module", "path", "consolidate"],
    function (module, path, consolidate) {
        var config = {},
            dirname = path.normalize(path.dirname(module.uri));

        config.basePath = path.normalize(dirname + "/../..");

        console.log("env: " + process.env.NODE_ENV);

        config.express = {
            port: process.env.port || 3000,
            ip: "127.0.0.1",
            key: "connect.sid",
            secret: "console.pineappleclub_secret",
            view: {
                path: config.basePath + "/server/views",
                engine: {
                    type: "jade",
                    driver: consolidate.jade
                }
            },

            // base directory 
            staticPath: config.basePath + "/app",

            // shared libraries
            sharedLibPath: config.basePath + "/shared-lib"
        };

        var mongoUrl = (!process.env.NODE_ENV)
                        // development connection string
                        ? "mongodb://localhost:27017/console"
                        // production connection string
                        : "mongodb://console:zzKBugqlYUaCJRsRP9b.KzkxAxWuQJ_DyCClmRKoUmI-@ds041167.mongolab.com:41167/console";

        console.log("mongo url: " + mongoUrl);

        config.db = {
            database: "console",
            url: mongoUrl
        };

        return config;
    });