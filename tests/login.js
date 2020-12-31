module.exports = {
    "@tags": ["login"],

    "Verify the login module": (browser) => {
        browser
            .windowMaximize()
            .url("https://testapp.xcoobee.net/auth/login")
            .waitForElementVisible("body")
            .setValue('input[name="email"]', "vir1@mailinator.com")
            .pause(2000)
            .setValue('input[name="password"]', "testing")
            .pause(2000)
            .click(".form-generator__submit-button")
            .pause(2000)
            .assert.urlEquals("https://testapp.xcoobee.net/user")
            .click("#navbarUserDropdown")
            .click(".settings-tour>ul>li:nth-child(2)")
            .pause(2000)
            .click(".nav.nav-tabs>li:nth-child(7)")
            .pause(2000)
            .waitForElementVisible('.react-toggle')
            .pause(2000)
            .click(".react-toggle-thumb")
            
            // .waitForElementPresent(".modal-content")
            .assert.elementPresent("div.modal-dialog", "Verify the alert box")
            .assert.containsText("h4.modal-title", "Please confirm")
            .assert.containsText("button.btn.btn-lg.btn-primary", "OK")
            .click("button.btn.btn-lg.btn-primary")
            .pause(2000)

            // Verify the access code
            .assert.containsText("#fileDropSettings.access_code", "mkyl-gmM3F_yln5BTA9zD")
            // Click on Access Code "Reset" button
            .click("button.btn.btn-link.btn.btn-default")
            // Verify the URL
            .assert.containsText("div.well", "https://testfiledrop.xcoobee.net?xid=~test_vir1")
            .pause(2000)
            // Click on "Embaded Form"
            .click("button.width-100.btn.btn-default")
            .assert.containsText(".modal-title", "Embedded Form")
            .click(".react-toggle-thumb")
            .end();
    },
};