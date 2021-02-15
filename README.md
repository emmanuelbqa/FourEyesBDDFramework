# FourEyesBDDFramework



FourEyesInsight consisting of one gherkin scenario With reporting tools integrated. README file should be preferrably opened in an editor.

USEFUL INFORMATION

Download the Project. Node modules are included.

Type <-- npm install --> into the terminal to ensure that all modules/dependencies are present in the project.

To execute the tests please use the shortcut scripts below: //to open cypress <-- npm run opencypress -->

//to run all tests in headless mode. <-- npm run test -->

//to run all tests in headed mode. <-- npm run headedtest -->

REPORTING This framework was built with two reporting methods: Cucumber HTML Reports and Cypress Dashboard.

Cucumber HTML Reports. This can be used to generate test reports after a test run. Note* Test run must be done seperately (npm run test <---- for test run). Any details concerning test report can be configured in the cucumber-htmlreports.js file.

//to generate test report, type the shortcut script below into the terminal. <-- node cucumber-htmlreports.js -->

A path will be generated in the terminal, copy the path and open it in Chrome Browser -preferred.

Cypress Dashboard //to run cypress dashboard, type the shortcut script below into the terminal. <-- npm run dashboard -->. At the end of the headless run, a link will be present which will can be opened in the browser for Test Report in Cypress Dash Board.
