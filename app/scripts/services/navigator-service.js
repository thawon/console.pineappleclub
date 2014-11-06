define(
    ["app"],
    function (app) {
        app.factory("NavigatorService", [
            function () {
                var navigator = {},
                    items = {
                        home: { name: "home", display: "Home", path: "/" },
                        tracker: { name: "tracker", display: "Tracker", path: "/tracker" },
                        helpdesk: { name: "helpdesk", display: "Help desk", path: "/helpdesk" },
                        contact: { name: "contact", display: "Contact us", path: "/contactus" },
                        profile: { name: "profile", display: "Profile", path: "/profile" }
                    };

                navigator.pages = {
                    main: {
                        name: "main",
                        display: "Menu",
                        items: [
                            items.home,
                            items.tracker,
                            items.helpdesk,
                            items.profile
                        ]
                    },
                    footer: {
                        about: {
                            name: "support",
                            display: "Support",
                            items: [
                                items.helpdesk
                            ]
                        },
                        social: {
                            name: "about",
                            display: "About",
                            items: [
                                items.contact
                            ]
                        }
                    }
                };
                
                return navigator;
            }
        ]);
    });