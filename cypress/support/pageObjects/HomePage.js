class HomePage {

    clickAccountbtn() {
        return cy.get('#__BVID__27__BV_toggle_').click()
    }

    clickSignOutbtn() {
        return cy.contains('Sign Out').click()
    }

    getPageTitle() {
        return cy.get('title')
    }

}

export default HomePage;








