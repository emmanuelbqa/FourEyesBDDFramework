Feature: Log In And Log Out Process Validation

    Log a user in and out on the Four Eyes Insight Portal and validate with a few DOM components.

    Scenario: : Log User In, Make Assertions and Log out
        Given I navigate to the FourEyesinsight "/login" Page
        When I Enter email as "quality.assurance.challenge@foureyesinsight.com"
        And I enter password as "k[h7Jy7_.v$#Gq9T"
        And I intercept the "**/access/login" api call
        And click on Log In button causing the item "user" to be present thereafter
        Then the status code for the intercepted api call is 200 with a sites array and id of 30
        And the user is redirected to "/home" by checking the URL
        And the title of the page contains "Analytics Dashboard - Four Eyes Insight"
        When I Click on Account section
        And I intercept the "**/access/logout" and click on Sign out
        Then the status code for the intercepted api call is 204