//exports.httpBackendMock = function () {
//    console.log("Test platform bootstrapping");
//    angular.module("httpBackendMock", ["console.pineappleclub", "ngMockE2E"])
//    .run(function ($httpBackend) {
//        

//        $httpBackend.whenPOST("/login").respond(function (method, url, data, headers) {
//            return [401, {}, {}];
//        });
//    });
//}

module.exports.w7Restaurants = function ($httpBackend) {

    var restaurants = { success: false };

    $httpBackend.whenPOST('/login').respond(401);
};