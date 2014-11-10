({
    baseUrl: "./app/scripts",
    mainConfigFile: "./app/scripts/main.js",
    name: "main",
    include: [
        "controllers/home-controller",
        "controllers/auth/login-controller"
    ],
    out: "./app/scripts/optimized.js",
    uglify: {
        except: [
                "futureState",
                "$q"
            ]
        //,beautify: true
    }
})