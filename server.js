var requirejs = require("requirejs");

requirejs.config({

    nodeRequire: require,

    baseUrl: "./",

    paths: {
        app: "server/app",
        config: "server/config",

        routes: "server/routes",

        authentication: "server/authentication"
    }
});

requirejs(["app"],
    function (app) { }
);