module.exports = function (grunt) {
    grunt.initConfig({
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
        watch: {
            files: "./app/lesses/*.less",
            tasks: ["less"]
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
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-requirejs");

    //grunt.registerTask("default", ["watch"]);

    grunt.registerTask("development", ["watch"]);

    grunt.registerTask("production", ["requirejs:production"]);
};