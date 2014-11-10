define(
    ["constants/user-roles"],
    function (USER_ROLES) {
        return [
            {
                stateName: "Home",
                urlPrefix: "/",
                templateUrl: "views/home.html",
                type: "requireCtrl",
                controllerPath: "controllers/home-controller",
                controllerName: "HomeController",
                data: {
                    authorizedRoles: ["*"]
                }
            },
            {
                stateName: "Login",
                urlPrefix: "/login",
                templateUrl: "views/login.html",
                type: "requireCtrl",
                controllerPath: "controllers/auth/login-controller",
                controllerName: "LoginController",
                data: {
                    authorizedRoles: ["*"]
                }
            },
            {
                stateName: "Profile",
                urlPrefix: "/profile",
                templateUrl: "views/profile.html",
                type: "requireCtrl",
                data: {
                    authorizedRoles: [USER_ROLES.admin]
                }
            }
        ];
    });