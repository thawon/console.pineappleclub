define(
    ["app"],
    function (app) {
        "use strict";

        app.directive("pcdViews", [
            function () {
                return {
                    restrict: 'E',
                    controller: function () {
                        var registeredViews = {};

                        this.$registerView = function (ctrl) {
                            registeredViews[ctrl.$name] = ctrl;
                        };

                        // viewName matches the `name` attribute on view;
                        this.$switchTo = function (viewName) {
                            for (var k in registeredViews) {
                                if (k == viewName) {
                                    registeredViews[k].$show();
                                } else {
                                    registeredViews[k].$hide();
                                }
                            }
                        };
                    },
                    link: function (scope, element, attrs, viewsCtrl) {
                        element.on('click', '[view-target]', function () {
                            var viewName = angular.element(this).attr('view-target');
                            viewsCtrl.$switchTo(viewName);
                        });

                        // Make the view controls available on the scope
                        scope.$views = viewsCtrl;
                    }
                };
            }
        ]);
    });