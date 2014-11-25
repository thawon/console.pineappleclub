define(
    ["app"],
    function (app) {
        "use strict";

        app.directive("pcdView", [
            function () {
                return {
                    restrict: 'E',
                    require: ['pcdView', '^pcdViews'],
                    controller: function ($element, $attrs) {
                        this.$name = $attrs.name;
                        this.$show = function () { $element.show(); };
                        this.$hide = function () { $element.hide(); };
                    },
                    link: function (scope, el, attrs, ctrls) {
                        var viewCtrl = ctrls[0];
                        var viewsCtrl = ctrls[1];

                        viewsCtrl.$registerView(viewCtrl);

                        if (attrs.initial !== undefined) {
                            viewCtrl.$show();
                        } else {
                            viewCtrl.$hide();
                        }
                    }
                };
            }
        ]);
    });