define(
    ["app", "constants/view-modes", "bootstrap"],
    function (app, VIEW_MODES) {
        "use strict";

        app.directive("pcdEntityDetailContainer", [
            function () {
                return {
                    restrict: "E",
                    transclude: true,
                    scope: {
                        updateFn: "&"
                    },
                    link: function (scope, element, attrs) {
                        var getViews = function () {
                            var $this = $(element),
                                views = $this.find(".view-detail").find("[data-mode]");

                            return views;
                        },
                        changeMode = function (mode) {
                            return function () {
                                var $this = $(element),
                                    views = getViews(),
                                    view = $this.find(".view-detail").find("[data-mode='" + mode + "']");

                                $(views).hide();
                                $(view).show();

                                scope.mode = mode;
                            }
                        },
                        showDefaultView = function () {
                            var $this = $(element),
                                views = getViews(),
                                view = $this.find(".view-detail").find("[default]");

                            views.hide();
                            view.show();

                            scope.mode = $(view).attr("data-mode");
                        };

                        scope.edit = changeMode(VIEW_MODES.edit);
                        scope.cancel = changeMode(VIEW_MODES.show);

                        showDefaultView();

                        scope.updateFn();
                    },
                    templateUrl: "scripts/directives/entity-detail-container/template.html"
                }
            }
        ]);
    });