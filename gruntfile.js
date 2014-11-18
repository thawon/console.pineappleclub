module.exports = function (grunt) {
    grunt.initConfig({
        express: {
            options: {
                // Override defaults here
            },
            development: {
                options: {
                    script: "server.js",
                    node_env: undefined,
                    debug: true
                }
            },
            test: {
                options: {
                    script: "server.js",
                    node_env: undefined
                }
            }
        },
        watch: {
            frontend: {
                options: {
                    livereload: true
                },
                files: "./app/lesses/*.less",
                tasks: ["less"]
            },
            server: {
                files: ["./server/**/*"],
                tasks: ["express:development"],
                options: {
                    //Without this option specified express won't be reloaded
                    nospawn: true,
                    atBegin: true
                }
            }
        },
        "node-inspector": {
            dev: {
                options: {
                    "web-port": 8082,
                    "no-preload": true
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["./less"],
                    yuicompress: true
                },
                files: {
                    "./app/styles/custom-bootstrap.css": "./app/lesses/styles.less"
                }
            }
        },
        karma: {
            unit: {
                configFile: "test/karma.conf.js",
                browsers: ["PhantomJS"],
                singleRun: true
            }
        },
        protractor_webdriver: {
            options: {
                // Task-specific options go here.
            },
            your_target: {
                options: {
                    command: "webdriver-manager start",
                    keepAlive: true
                }
            }
        },
        protractor: {
            options: {
                configFile: "test/protractor.conf.js",
                keepAlive: true
            },
            run: {}
        },
        requirejs: {
            production: {
                options: {
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
                    }
                }
            }
        },
        parallel: {
            dev: {
                options: {
                    stream: true
                },
                tasks: [{
                    grunt: true,
                    args: ["watch:frontend"]
                }, {
                    grunt: true,
                    args: ["watch:server"]
                }, {
                    grunt: true,
                    args: ["node-inspector:dev"]
                }]
            },
            test: {
                option: {
                    stream: true
                },
                tasks: [{
                    grunt: true,
                    args: ["karma:unit"]
                }, {
                    grunt: true,
                    // e2e test always run on minified file
                    args: ["requirejs:production", "express:test", "protractor_webdriver", "protractor"]
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-express-server");
    grunt.loadNpmTasks("grunt-env");
    grunt.loadNpmTasks("grunt-node-inspector");
    grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks("grunt-protractor-webdriver");
    grunt.loadNpmTasks("grunt-protractor-runner");
    grunt.loadNpmTasks("grunt-parallel");

    // test
    grunt.registerTask("test", "run specs and scenarios", 
    ["parallel:test"]);

    grunt.registerTask("specs", "run specs", 
    ["karma:unit"]);

//    grunt.registerTask("scenarios", "run scenarios", 
//    ["express:test", "protractor_webdriver", "protractor"]);

    // development
    grunt.registerTask("dev", "launch webserver and watch task", 
    ["parallel:dev"]);
    
    // production
    grunt.registerTask("production", "minifies js files",
    ["requirejs:production"]);
};