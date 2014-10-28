define(
    ["underscore", "app", "utility"],
    function (_, app, utility) {
        var factory = {};

        factory.create = function (params) {
            var Controller = function () {
                this.init.apply(this, arguments);
            },
            keys = ["name", "controller", "dependencies", "elements", "configs"],
            elements, configs, controller;

            function getExtendedKeys(obj) {
                var result = {};

                _.chain(_.keys(obj))
                    .reject(function (key) { return (_.contains(keys, key)); })
                    .each(function (key) { result[key] = obj[key] });

                return result;
            }

            Controller.prototype.include = function (includes) {
                $.extend(this, includes);
            };

            Controller.prototype.init = function (params) {
                var name = params.name,
                    dependencies = params.dependencies,
                    extend = getExtendedKeys(params);

                elements = params.elements;
                configs = params.configs;
                controller = params.controller;

                this.include(extend);

                controller.prototype = Object.create(this);

                dependencies.push(controller);
                app.controller(name, dependencies);
            };

            Controller.prototype.initialise = function (arguments) {
                this.registerDependencies(arguments);
                this.registerConfigs();
                this.registerElements();
            }

            Controller.prototype.registerDependencies = function (arguments) {
                var params = utility.getParamNames(controller),
                    length = params.length;

                for (var i = 0; i < length; i++) {
                    this[params[i]] = arguments[i];
                }
            }

            Controller.prototype.registerConfigs = function () {
                for (var key in configs) {
                    this[key] = configs[key];
                }
            }

            Controller.prototype.registerElements = function () {
                for (var key in elements) {
                    this[key] = $(elements[key]);
                }
            }

            Controller.prototype.apply = function () {
                if (!this.$scope.$$phase) {
                    this.$scope.$apply();
                }
            }

            return new Controller(params);
        }

        return factory;
    });