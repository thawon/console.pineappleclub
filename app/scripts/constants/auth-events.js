define(
    ["app"],
    function (app) {
        app.constant("AUTH_EVENTS", {
            loginSuccess: "auth-login-success",
            loginFailed: "auth-login-failed",
            logoutSuccess: "auth-logout-success",
            logoutFailed: "auth-logout-failed",
            sessionTimeout: "auth-session-timeout",
            notAuthenticated: "auth-not-authenticated",
            notAuthorized: "auth-not-authorized"
        });
    });