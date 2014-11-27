define(
    ["underscore", "sharedLib/fix-variables"],
    function (_, fix) {
        var VIEW_MODES = _.extend(fix);

        VIEW_MODES.set("constants.viewModes",
        {
            show: "show",
            edit: "edit"
        });

        return VIEW_MODES.get("constants.viewModes");
    });