define(
    ["module", "path", "consolidate"],
    function (module, path, consolidate) {
        var config = {},            
            dirname = path.normalize(path.dirname(module.uri));
        
        config.basePath = path.normalize(dirname + "/../..");

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

        config.db = {
            port: process.env.MONGODB_PORT || 27017,
            host: process.env.MONGODB_HOST || "localhost",
            database: "console",
            //url: "mongodb://MongoLab-bx:31lxdAi0BeqlQ_5m5hkJ6PjgQDerZhYV8HpR4QeUAlU-@ds030827.mongolab.com:30827/MongoLab-bx"
            url: "mongodb://localhost:27017/console"
        };

        return config;
    });