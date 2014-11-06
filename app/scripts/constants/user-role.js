define(
    ["app"],
    function (app) {
        app.constant("USER_ROLES", {
            all: "*",
            admin: "admin",
            client: "client"
        });
    });