module.exports = {

    url: function() {
        return "https://testapp.xcoobee.net/auth/login";
    },

    elements: {
        email: "input[name='email']",
        password: "input[name='password']",
        loginButton: ".form-generator__submit-button",
        profileDropdown: "#navbarUserDropdown",
        settingNav: ".settings-tour>ul>li:nth-child(2)",
        paymentTab: ".nav.nav-tabs>li:nth-child(3)",
        dateCheckbox: ".checkbox-column>input",
        lastInvoice: "#payment-history-tabs-pane-history > button:nth-child(1) > span",
        viewHistory: "button.btn.btn-link:nth-child(2)",
        downloadCSV: ".lazyload-wrapper>img[alt='Download CSV']",
        backButton: "button.inline.margin-right-10>span",
        viewInvoice: "#payment-history-tabs-pane-history > button:nth-child(3) > span",
        subscription: "#payment-history-tabs-tab-subscriptions > span",
        subscriptionContent: "#payment-history-tabs-pane-subscriptions",
        paymentHistory: "#payment-history-tabs-tab-history",
        currencyTitle: ".d-flex.align-items-center>div>h4>span",
        currencySelectOption: "#user-settings-pane-payments > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div.xb-select__value-container.xb-select__value-container--has-value.css-1hwfws3 > div.xb-select__single-value.css-1uccc91-singleValue",
        currencyDropList: "#user-settings-pane-payments > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div.xb-select__value-container.xb-select__value-container--has-value.css-1hwfws3 > div.xb-select__single-value.css-1uccc91-singleValue",
        autoReloadPoint: ".d-flex>h4>b>span",
        enableButton: "button.btn.btn-primary:nth-child(2)",
        disableButton: "button.btn.btn-default:nth-child(2)",
        alertBox: ".modal-content",
        alertBoxTitle: ".modal-header>h4.modal-title>span",
        alertBoxBodyContent: ".modal-body>div>h4>span",
        alertCloseButton: "button.close",
        alertCancelButton: ".modal-footer>button:nth-child(1)>span",
        alertConfirmButton: ".modal-footer>button:nth-child(2)>span",
        disableButtonText: ".d-flex>button.btn.btn-default:nth-child(2)>span",
        saveButton: ".d-flex>.btn.btn-default:disabled>span",
        saveDisableAttribute: ".d-flex>.btn.btn-default:disabled",
        autoReloadDropList: "#user-settings-pane-payments > div > div:nth-child(5) > div > div > div > div > div.row > div > div > div > div.xb-select__indicators.css-1wy0on6",
        pointValue: "input[inputmode='numeric']",
        paymentMethodTitle: ".payment-method>div>div>h4",
        editIcon: ".glyphicon.glyphicon-pencil.edit-icon",
        firstName: "input[name='firstName']",
        lastName: "input[name='lastName']",
        street: "input[name='street']",
        city: "input[name='city']",
        postalCode: "input[name='postalcode']",
        provinceCloseIcon: ".xb-select__indicator.xb-select__clear-indicator.css-tlfecz-indicatorContainer",

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
            Test Case-3: Go to Payment tab section
        */
        verifyPaymentTab: function() {
            return this
                .assert.elementPresent("@profileDropdown")
                .click("@profileDropdown")
                .pause(2000)
                .assert.elementPresent("@settingNav")
                .click("@settingNav")
                .pause(2000)
                .assert.elementPresent("@paymentTab")
                .click("@paymentTab")
                .pause(2000)
        },

        /*
            Test Case-4: Verify the Payment History
        */
        verifyPaymentHistory: function() {
            return this
                // Payment History
                .click("@dateCheckbox")
                .pause(2000)
    
                // "Last Invoice" Tab
                .assert.containsText("@lastInvoice", "Last Invoice", "Last Invoice link text visible")
                .pause(2000)
    
                //"View History" Tab
                .assert.containsText("@viewHistory", "View History", "View History link text visible")
                .click("@viewHistory")
                .pause(3000)
                .assert.urlEquals("https://testapp.xcoobee.net/user/balances/active")
                .assert.elementPresent("@downloadCSV")
                .click("@backButton")
                .pause(2000)
                // "View Invoice" Tab
                .assert.containsText("@viewInvoice", "View Invoice", "View Invoice link text visible")
        },

        /*
            Test Case-5: Verify the Subscription Tab Option
        */
       verifySubscription: function() {
            return this
                .assert.elementPresent("@subscription")
                .assert.containsText("@subscription", "Subscriptions", "Subscription tab is visible")
                .click("@subscription")
                .pause(2000)
                .assert.containsText("@subscriptionContent", "No results found")
                .click("@paymentHistory")
                .click("@dateCheckbox")
                .pause(2000)
       },

        /*
            Test Case-6: Verify the Currency Option List
        */
       verifyCurrency: function() {
           return this
                .assert.elementPresent("@currencyTitle")
                .assert.containsText("@currencyTitle", "Currency", "Title is match with expected result")
                .click("@currencySelectOption")
                .pause(2000)
                .click("@currencySelectOption")
                .assert.containsText("@currencyDropList", "EUR", "EUR Currency selected successfully")
                .pause(2000)
       },

        /*
            Test Case-7: Verify the Auto Reload Points
        */
       verifyAutoReload: function(){
           return this
                // "Auto Reload Points" title
                .assert.elementPresent("@autoReloadPoint")
                .assert.containsText("@autoReloadPoint", "Auto Reload Points", "Title Auto Reload Points is matched")
                
                // "Enable" button
                .assert.elementPresent("@enableButton")
                .assert.containsText("@enableButton", "Enable", "Button is enabled now")
                .click("@enableButton")
                .pause(2000)
            
                // Pop-up Alert Box
                .assert.elementPresent("@alertBox", "Modal popup box is visible")
                .assert.elementPresent("@alertBoxTitle", "Popup header title element is present")
                .assert.containsText("@alertBoxTitle", "Auto Reload Points", "Popup header title is matched")
                .assert.elementPresent("@alertBoxBodyContent", "Popup body content element is present")
                .assert.containsText("@alertBoxBodyContent", "We will automatically load the number of points needed to complete the operations that you have selected. At minimum we will load 500 points, when your balance falls below 25. Please confirm that this is OK.", "Popup box body content is matched")
                // .click("@alertCloseButton")
                // .click("@alertCancelButton")
                .click("@alertConfirmButton")
                .pause(5000)

                // "Disable" button
                .assert.containsText("@disableButtonText", "Disable", "Button is disable now")
                .assert.elementPresent("@saveButton")
                .assert.attributeContains("@saveDisableAttribute", "disabled", "true")
                .click("@disableButton")
                .pause(2000)

                .click("@autoReloadDropList")
                .pause(2000)
                // .keys(browser.Keys.TAB)
                // .pause(2000)
                // .sendKeys('.checkbox-column>input[type="checkbox"]', browser.Keys.ENTER)
                // .setValue(".xb-select__control.css-yk16xz-control", "1000")
                // .keys(browser.Keys.TAB)
                .clearValue("@pointValue")
                .pause(2000)
                .setValue("@pointValue", "50")
                .pause(2000)
       },

        /*
            Test Case-8: Verify Udpate Payment Method
        */
       verifyUpdatePaymentMethod: function() {
           return this
                .assert.containsText("@paymentMethodTitle", "Payment Method")
                .click("@editIcon")
                .pause(2000)
                
                .assert.visible("@firstName", "First Name input field is visible")
                .clearValue("@firstName")
                .setValue("@firstName", "Nadim")
                .pause(2000)

                .assert.visible("@lastName", "Last Name input field is visible")
                .clearValue("@lastName")
                .setValue("@lastName", "Mahmud")
                .pause(2000)

                .assert.visible("@street", "Street input field is visible")
                .clearValue("@street")
                .setValue("@street", "Marshville Road")
                .pause(2000)

                .assert.visible("@city", "City input field is visible")
                .clearValue("@city")
                .setValue("@city", "Dhaka")
                .pause(2000)

                .assert.visible("@postalCode", "Postal code input field is visible")
                .clearValue("@postalCode")
                .setValue("@postalCode", "1216")
                .pause(2000)

                .click("@provinceCloseIcon")
                .pause(2000)
       }

    }]

}