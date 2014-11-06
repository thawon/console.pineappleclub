define(
    [],
    function () {
        return {
            defaultRoutePath: "/",
            routes: {
                "/": {    
                    name: "home",                
                    templateUrl: "views/home/home.html",
                    dependencies: [
                        "controllers/login/login-controller"
                    ],
                    data: {
                      authorizedRoles: ["admin"]
                    }
                },
                "/login": {
                    name: "login",
                    templateUrl: "views/login/login.html",
                    dependencies: [
                        "controllers/login/login-controller"
                    ],
                    data: {
                      authorizedRoles: ["admin"]
                    }
                },
                "/signup": {
                    name: "signup",
                    templateUrl: "views/signup/signup.html",
                    dependencies: [
                        "controllers/signup/signup-controller"
                    ],
                    data: {
                      authorizedRoles: ["admin"]
                    }
                },
                "/profile": {  
                    name: "profile",                  
                    templateUrl: "views/profile.html",
                    data: {
                      authorizedRoles: ["admin"]
                    }
                },
            }
        };
    });