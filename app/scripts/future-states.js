define(
    ["constants/user-roles"],
    function (USER_ROLES) {
        return [
            {
                stateName: "home",
                urlPrefix: "/",
                templateUrl: "views/home.html",
                type: "requireCtrl",
                controllerPath: "controllers/home-controller",
                controllerName: "HomeController",
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.parent]
                }
            },
            {
                stateName: "login",
                urlPrefix: "/login",
                templateUrl: "views/auth/login.html",
                type: "requireCtrl",
                controllerPath: "controllers/auth/login-controller",
                controllerName: "LoginController",
                data: {
                    authorizedRoles: ["*"]
                }
            },
            {
                stateName: "signout",
                urlPrefix: "/signout",
                templateUrl: "views/auth/signout.html",
                type: "requireCtrl",
                data: {
                    authorizedRoles: ["*"]
                }
            },
            {
                stateName: "profile",
                urlPrefix: "/profile",
                templateUrl: "views/profile.html",
                type: "requireCtrl",
                data: {
                    authorizedRoles: [USER_ROLES.admin]
                }
            },
            {
                stateName: "signup",
                urlPrefix: "/signup",
                templateUrl: "views/signup/signup.html",
                type: "requireCtrl",
                controllerPath: "controllers/signup/signup-controller",
                controllerName: "SignupController",
                data: {
                    authorizedRoles: ["*"]
                }
            }
        ];
    });