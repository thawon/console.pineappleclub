define(
    function () {
        var utility = {};

        utility.isBreakpoint = function (alias) {
            return $(".device-" + alias).is(":visible");
        };        

        utility.getParamNames = function (func) {
            var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
                        ARGUMENT_NAMES = /([^\s,]+)/g,
                        fnStr = func.toString().replace(STRIP_COMMENTS, ""),
                        result = fnStr.slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")")).match(ARGUMENT_NAMES);

            if (result === null) {
                result = []
            }

            return result
        }

        return utility;
    });