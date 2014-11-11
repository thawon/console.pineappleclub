define(
    ["app"],
    function (app) {
        app.factory("NavigatorService", ["AppConfigurationService",
            function (appConfigurationService) {
                var navigator = {},
                    items = {
                        home: { name: "home", display: "Home", path: "/" },
                        tracker: { name: "tracker", display: "Tracker", path: "/tracker" },
                        helpdesk: { name: "helpdesk", display: "Help desk", path: "/helpdesk" },
                        about: { name: "about", display: "About", path: "/about" },
                        contact: { name: "contact", display: "Contact", path: "/contact" },
                        login: { name: "login", display: "Login", path: "/login" },
                        signup: { name: "signup", display: "Signup", path: "/signup" },
                        profile: { name: "profile", display: "Profile", path: "/profile" }
                    };

                navigator.pages = {
                    main: {
                        name: "main",
                        display: "Menu",
                        items: [
                            items.home,
                            items.login,
                            items.profile
                        ]
                    },
                    footer: {
                        name: "footer",
                        display: appConfigurationService.companyInfo.name,
                        items: [
                                items.about,
                                items.helpdesk,
                                items.contact
                        ]
                    }
                };
                
                return navigator;
            }
        ]);
    });