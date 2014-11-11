define(
    ["app","constants/device-sizes"],
    function (app, DEVICE_SIZES) {
        app.factory("UtilService", [
            function ($injector, $cookieStore) {
                var utilityService = {};

                utilityService.isBreakpoint = function (alias) {
                    return $(".device-" + alias).is(":visible");
                };

                utilityService.getDeviceSize = function () {
                    var result;

                    result = _.chain(_.keys(DEVICE_SIZES))
                                .filter(function (size) { return (utilityService.isBreakpoint(sizes[size])); })
                                .value();

                    return DEVICE_SIZES[result[0]];
                };

                return utilityService;
            }
        ]);
    });