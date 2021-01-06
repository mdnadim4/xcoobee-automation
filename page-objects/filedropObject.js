module.exports = {
    url: function() {
        return "https://testapp.xcoobee.net/auth/login";
    },

    elements: {
        email: "input[name='email']",
        password: "input[name='password']",
        loginButton: ".form-generator__submit-button",
        profileDropdown: "#navbarUserDropdown",
        setting: ".settings-tour>ul>li:nth-child(2)",
        fileDropTab: ".nav.nav-tabs>li:nth-child(7)",
        reactToggle: ".react-toggle-thumb",
        modalDialog: "div.modal-dialog",
        modalHeader: "h4.modal-title",
        modalButton: "button.btn.btn-lg.btn-primary",
        accessCode: "input[name=access_code]",
        resetButton: "button.btn.btn-link.btn.btn-default",
        yourUrl: "div.well",
        embeddedForm: "button.width-100.btn.btn-default",
        modalTitle: ".modal-title",
        options: ".accordion-toggle",
        width: "input[name=width]",
        height: "input[name=height]",
        closeButton: "div.modal-footer > button:nth-child(2) > span",
        fileDropDisable: ".react-toggle-track-check"
    },

    commands: [{
        /*
            Test Case-1: Verify the login element visibility
        */
       verifyLoginElement: function() {
        return this
            .assert.visible("@email", "Email input field is visible")
            .assert.visible("@password", "Password input field is visible")
            .assert.visible("@loginButton", "Login button is visible")
        },

        /*
            Test Case-2: Verify the login page
        */
        verifyLogin: function() {
            return this
                .setValue("@email", "vir1@mailinator.com")
                .pause(2000)
                .setValue("@password", "testing")
                .pause(2000)
                .click("@loginButton")
                .pause(10000)
                .assert.urlEquals("https://testapp.xcoobee.net/user")
        },

        /*
            Test Case-3: Go to File Drop tab section
        */
       verifyFileDropTab: function() {
            return this
                .click("@profileDropdown")
                .click("@setting")
                .pause(2000)
                .click("@fileDropTab")
                .pause(2000)
                .click("@reactToggle")
                .assert.urlEquals("https://testapp.xcoobee.net/user/settings/filedrop")
        },

        /*
            Test Case-4: Verify File Drop options
        */
       verifyFileDropOptions: function() {
        return this
                .click("@reactToggle")
                .waitForElementVisible("@modalDialog")
                .assert.elementPresent("@modalDialog", "Verify the alert box")
                .assert.containsText("@modalHeader", "Please confirm")
                .assert.containsText("@modalButton", "OK")
                .click("@modalButton")
                .pause(5000)
    
                // Access code
                .assert.elementPresent("@accessCode")
                .getValue("@accessCode", function(result){
                    code = result.value;
                    console.log(`Access code is: ${code}`)
                })
                .click("@resetButton")
                // .assert.not.value("@accessCode", code)

                // Verify the URL
                .assert.containsText("@yourUrl", "https://testfiledrop.xcoobee.net?xid=~test_vir1")
                .pause(2000)
    
                // "Embaded Form"
                .click("@embeddedForm")
                .pause(2000)
                .click("@options")
                .assert.valueContains("@width", "400px")
                .clearValue("@width")
                .setValue("@width", "500px")
                .assert.valueContains("@height", "600px")
                .clearValue("@height")
                .setValue("@height", "700px")
                .click("@closeButton")
                .pause(2000)
                .click("@fileDropDisable")
                .pause(5000)

        },

    }]
}