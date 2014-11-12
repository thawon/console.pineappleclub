define(
    ["express"],
    function (express) {
        var router = express.Router();

        // catch all route for history
        router.get("*", function (req, res) {
            var page = { environmentScript: "scripts/optimized" };

            if (process.env.PORT) {
                page.environmentScript = "scripts/optimized";
            }

            res.render("index", { page: page });
        });

        return router;
    });