define(
    ["underscore", "sharedLib/fix-variables"],
    function (_, fix) {
        var DEVICE_SIZES = _.extend(fix);

        DEVICE_SIZES.set("constants.deviceSizes",
        {
            XS: "xs",
            S: "sm",
            M: "md",
            L: "lg"
        });

        return DEVICE_SIZES.get("constants.deviceSizes");
    });