define(
    ["app", "bootstrap"],
    function (app) {
        "use strict";

        app.directive("pcdExpandableContainer", [
            function () {
                return {
                    restrict: "E",
                    transclude: true,
                    scope: {},
                    link: function (scope, element, attrs) {

                        scope.expandable = "/images/expand.png";
                        element.find(".exp-header").html(attrs.header);

                        scope.toggle = function () {
                            var $this = $(element);
                            var $collapse = $this.find(".collapse-group").find(".collapse");

                            scope.expandable = $collapse.hasClass("collapse in") 
                                                ? "/images/expand.png" 
                                                : "/images/collapse.png";

                            $collapse.collapse("toggle");
                        }
                    },
                    templateUrl: "scripts/directives/expandable-container/template.html"
                }
            }
        ]);
    });