module.exports = {
    
    "@tags": ["payment"],

    "Test Case 1: Verify the login page": (browser) => {
        let page = browser.page.paymentObject()

        page.navigate()
            .verifyLoginElement()
            .saveScreenshot("./screenshots/" + "login-page.png")
    },

    "Test Case 2: Verify the login page": (browser) => {
        let page = browser.page.paymentObject()

        page
            .verifyLogin()
            .saveScreenshot("./screenshots/" + "Profile.png")
    },

    "Test Case 3: Go to Payment Tab Section": (browser) => {
        let page = browser.page.paymentObject()

        page
            .verifyPaymentTab()
            .saveScreenshot("./screenshots/" + "Payment-Tab.png")
    },

    "Test Case 4: Verify the Payment History": (browser) => {
        let page = browser.page.paymentObject()

        page
            .verifyPaymentHistory()
            .saveScreenshot("./screenshots/" + "Payment-History.png")
    },

    "Test Case 4: Verify the Payment History": (browser) => {
        let page = browser.page.paymentObject()

        page
            .verifyPaymentHistory()
            .saveScreenshot("./screenshots/" + "Payment-History.png")
    },

    "Test Case 5: Verify Subscription Tab Option": (browser) => {
        let page = browser.page.paymentObject()

        page
            .verifySubscription()
            .saveScreenshot("./screenshots/" + "Subscription.png")
    },

    "Test Case 6: Verify Currency Option List": (browser) => {
        let page = browser.page.paymentObject()

        page
            .verifyCurrency()
            .saveScreenshot("./screenshots/" + "Currency.png")
    },

    "Test Case 7: Verify Auto Reload Point": (browser) => {
        let page = browser.page.paymentObject()

        page
            .verifyAutoReload()
            .saveScreenshot("./screenshots/" + "Auto-Reload.png")
    },

    "Test Case 8: Verify Update Payment Method": (browser) => {
        let page = browser.page.paymentObject()

        page
            .verifyUpdatePaymentMethod()
            .saveScreenshot("./screenshots/" + "Update-payment.png")
            .end()
    },

};