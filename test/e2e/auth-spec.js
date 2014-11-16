var webdriver = require("selenium-webdriver");

describe("authentication", function () {
    var ptor;

    beforeEach(function () {
        ptor = protractor.getInstance();
    });

    it("user logins successfully", function () {
        ptor.get("http://127.0.0.1:3000/login");
        ptor.sleep(2000);

        var backEndMocks = require("./backend-mock");

        ptor.addMockModule('httpBackEndMock', backEndMocks.build([backEndMocks.w7Restaurants]));

        element(by.id("email")).sendKeys("a@comxxx");
        element(by.id("password")).sendKeys("b");
        element(by.id("lg_login_button")).click();

        ptor.sleep(10000);
    });

});

