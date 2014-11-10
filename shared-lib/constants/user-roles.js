define(
    ["underscore", "sharedLib/fix-variables"],
    function (_, fix) {
        var USER_ROLES = _.extend(fix);

        USER_ROLES.set("constants.userRoles", 
        {
            admin: "admin",
            parent: "parent"
        });

        return USER_ROLES.get("constants.userRoles");
    });