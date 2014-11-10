define(
    ["underscore", "sharedLib/fix-variables"],
    function (_, fix) {
        var USER_ROLES = _.extend(fix);

        USER_ROLES.set("enums.authEvents",
        {
            loginSuccess: "auth-login-success",
            loginFailed: "auth-login-failed",
            logoutSuccess: "auth-logout-success",
            logoutFailed: "auth-logout-failed",
            sessionTimeout: "auth-session-timeout",
            notAuthenticated: "auth-not-authenticated",
            notAuthorized: "auth-not-authorized",
            NOT_SET: -1
        });

        return USER_ROLES.get("enums.userRoles");
    });