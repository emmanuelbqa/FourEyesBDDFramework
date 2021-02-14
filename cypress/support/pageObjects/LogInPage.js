class LogInPage {

    launchSite(extpage){
        return cy.visit(extpage)
    }
    
    enterUsernamebox(email) {
        return cy.get('#__BVID__9').type(email)
    }

    enterPasswordbox(password) {
        return cy.get('#__BVID__11').type(password)
    }

    clickLogInbtn() {
        return cy.contains('Login').click()
    }

}

export default LogInPage;