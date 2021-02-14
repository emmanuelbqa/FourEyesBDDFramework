const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
    reportPath: '.reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '88'
        },
        device: 'Local test machine',
        platform: {
            name: 'Mac',
            version: 'Big Sur 11.2'
        }
    },
    customData: {
        title: 'Test Report',
        data: [
            {label: 'Project', value: 'FourEyesInsight Log in'},
            {label: 'Release', value: '1.1.0'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Feb 14th 2021, 01:31 PM GMT'},
            {label: 'Execution End Time', value: 'Feb 14th 2021, 01:35 PM GMT'}
        ]
    }
});