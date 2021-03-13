# JS API Automation Framework for SOAP Endpoints.

Stack: Chai, Mocha, SuperTest.

This JavaScript automation framework project can be used to create API automated tests for SOAP endpoints. It can be easily integrated with any CI/CD tools.

## Local SOAP Mock Server - only for example purpose
The repository includes soapui-mocksrv.xml file. In order to successfuly run the existing test scenario, feel free to import the project file into SoapUI IDE in and start the SOAP mock server. It exposes 2 SOAP endpoints on localhost:8088 so you can practice with. One of these endpoints will be used in the test example of the automation framework.



## Framework - Installation steps
1. Clone the repository
2. npm install

## Running the tests
CLI: npm run test

### Note: freel free to set the default timeout period directly in the 'package.json' file, in the scripts section (mocha -t 20000). Currently, the default value is set to 20 seconds.

### Note2: the URL is set in the 'config.js' file.

### Note3: the XML payload will be stored in the 'data' folder.
