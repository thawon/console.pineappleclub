var webdriver = require("selenium-webdriver");

describe("authentication", function () {
    var ptor;

    beforeEach(function () {
        ptor = protractor.getInstance();
        ptor.driver.get("http://127.0.0.1:3000");
    });

    it("should load the home page", function () {
        ptor.sleep(2000);
        expect(browser.getTitle()).toEqual("Pineapple Club Console");
    });

});