define(
    ["config", "express", "body-parser", "method-override", "routes/authentication", "routes/index"],
    function (config, express, bodyParser, methodOverride, authRoute, indexRoute) {
        var app = express();
        
        app.engine(config.express.view.engine.type, config.express.view.engine.driver);
        app.set("view engine", config.express.view.engine.type);
        app.set("views", config.express.view.path);

        app.use(express.static(config.express.staticPath));

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(methodOverride());

        //require("authentication/index")(app);

        app.use("/", indexRoute);
        app.use("/api/auth", authRoute);

        app.listen(config.express.port, function (req, res) {
            console.log("express is listening on http://" +
              config.express.ip + ":" + config.express.port);
        });
    });
