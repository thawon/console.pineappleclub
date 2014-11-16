exports.build = function(funcs) {
	var funcStr = "angular.module('httpBackEndMock', ['ngMockE2E'])";

    if (Array.isArray(funcs)) {
    	for (var i = 0; i === funcs.length; i++) {
    		funcStr += "\r.run(" + funcs[i] + ")"
    	};
    } else {
  		funcStr += "\r.run(" + funcs + ")"
    }

    //funcStr += "\r.run(" + passThrough + ")";

    var funcTyped = Function(funcStr);

    return funcTyped;
}

exports.w7Restaurants = function ($httpBackend) {

    var restaurants = { success: true, user: { local: { email: "X MAN"}} };

    $httpBackend.whenPOST('/login').respond(restaurants);
};