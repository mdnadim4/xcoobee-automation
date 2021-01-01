module.exports = {
    "@tags": ["filedrop"],

    "Test Case 1: Verify the login page": (browser) => {
        let page = browser.page.filedropObject()

        page.navigate()
            .verifyLoginElement()
            .saveScreenshot("./screenshots/" + "login-page.png")
    },

    "Test Case 2: Verify the login page": (browser) => {
        let page = browser.page.filedropObject()

        page
            .verifyLogin()
            .saveScreenshot("./screenshots/" + "Profile.png")
    },

    "Test Case 3: Go to File Drop tab section": (browser) => {
        let page = browser.page.filedropObject()

        page
            .verifyFileDropTab()
            .saveScreenshot("./screenshots/" + "Filedroptab.png")
    },

    "Test Case 4: Verify File Drop options": (browser) => {
        let page = browser.page.filedropObject()

        page
            .verifyFileDropOptions()
            .saveScreenshot("./screenshots/" + "Filedropopton.png")
    },

};