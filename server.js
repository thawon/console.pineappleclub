var express = require("express"),
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    app = express(),
    config = require("./server/config"),
    routes = require("./server/routes/index"),
    authRoutes = require("./server/routes/authentication");

app.engine(config.express.view.engine.type, config.express.view.engine.driver);
app.set("view engine", config.express.view.engine.type);
app.set("views", config.express.view.path);

app.use(express.static(config.express.staticPath));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

require("./server/auth/index")(app, express);

app.use("/", routes);
app.use("/api/auth", authRoutes);

app.listen(config.express.port, function (req, res) {
    console.log("express is listening on http://" +
              config.express.ip + ":" + config.express.port);
});