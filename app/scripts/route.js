﻿define(
    [],
    function () {
        return {
            defaultRoutePath: "/",
            routes: {
                "/": {                    
                    templateUrl: "views/home/home.html"
                },
                "/login": {
                    templateUrl: "views/login/login.html",
                    dependencies: [
                        "controllers/login/login-controller"
                    ]
                },
                "/signup": {
                    templateUrl: "views/signup/signup.html",
                    dependencies: [
                        "controllers/signup/signup-controller"
                    ]
                }
            }
        };
    });