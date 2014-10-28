var express = require("express"),
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    app = express(),
    config = require("./config"),
    routes = require("./routes/index");

app.engine(config.express.view.engine.type, config.express.view.engine.driver);
app.set("view engine", config.express.view.engine.type);
app.set("views", config.express.view.path);

app.use(express.static(config.express.staticPath));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use("/", routes);

app.listen(config.express.port, function (req, res) {
    console.log("express is listening on http://" +
              config.express.ip + ":" + config.express.port);
});