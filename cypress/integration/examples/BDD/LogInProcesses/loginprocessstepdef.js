import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import LogInPage from '../../../../support/pageObjects/LogInPage';
import HomePage from '../../../../support/pageObjects/HomePage';

const logInPage = new LogInPage()
const homePage = new HomePage()

Given('I navigate to the FourEyesinsight {string} Page', (extpage) => {

    logInPage.launchSite(extpage)

})

When('I Enter email as {string}', (email) => {

    logInPage.enterUsernamebox(email)
})

And('I enter password as {string}', (password) => {

    logInPage.enterPasswordbox(password)
})

And('I intercept the {string} api call', (apiext) => {
    cy.intercept('POST', apiext).as('logInCall')
})

And('click on Log In button causing the item {string} to be present thereafter', (localStorageKey) => {

    logInPage.clickLogInbtn().should(() => { expect(localStorage.getItem(localStorageKey)).to.exist })

})


Then('the status code for the intercepted api call is 200 with a sites array and id of 30', () => {

    cy.wait('@logInCall').should(({ response }) => {
        expect(response.statusCode).to.equal(200)
        expect(response.body.sites).to.be.a('array').to.exist
        expect(response.body.sites).to.have.property('0')
        expect(response.body.sites[0]).to.have.property('id', 30)

    })
})

And('the user is redirected to {string} by checking the URL', (urlext) => {
    cy.url().should('include', urlext)
})

And('the title of the page contains {string}', (pageTitle) => {
    homePage.getPageTitle().should('contain', pageTitle)
})

When('I Click on Account section', () => {
    homePage.clickAccountbtn()
})

And('I intercept the {string} and click on Sign out', (apiextalt) => {

    cy.intercept('POST', apiextalt).as('logOutCall')
    homePage.clickSignOutbtn()
})

Then('the status code for the intercepted api call is 204', () => {
    cy.wait('@logOutCall').its('response.statusCode').should('eq', 204)

})