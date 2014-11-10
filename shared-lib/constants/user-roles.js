define(
    ["underscore", "sharedLib/fix-variables"],
    function (_, fix) {
        var USER_ROLES = _.extend(fix);

        USER_ROLES.set("enums.userRoles", 
        {
            ADMIN: 0,
            NOT_SET: -1
        });

        return USER_ROLES.get("enums.userRoles");
    });