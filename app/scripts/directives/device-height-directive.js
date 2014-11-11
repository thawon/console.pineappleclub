define(
    ["app", "services/export-service"],
    function (app) {
        "use strict";

        app.directive("pcdDeviceHeight", ["ExportService",
            function (exports) {
                var directive = {                    
                        link: function (scope, element, attrs) {
                            $(element).height($(exports).height());
                    }
                }

                return {
                    restrict: "A",
                    link: function (scope, element, attrs) {
                        directive.link(scope, element, attrs);
                    }
                }
            }
        ]);
    });