# JS API Automation Framework for SOAP Endpoints

Stack: Chai, Mocha, SuperTest.

This JavaScript automation framework project can be used to create API automated tests for SOAP endpoints. It can be easily integrated with any CI/CD tools.

## Local SOAP Mock Server - only for example purpose
The repository includes soapui-mocksrv.xml file. In order to successfuly run the existing test scenario, feel free to import the project file into SoapUI IDE in and start the SOAP mock server. It exposes 2 SOAP endpoints on localhost:8088 so you can practice with. One of these endpoints will be used in the test example of the automation framework.



## Framework - Installation steps
1. Clone the repository
2. npm install

## Running the tests
CLI: npm run test

### Note - URL
You can pass the URL as CLI command --env flag. 
E.g. npx mocha -t 20000 tests/* --env='localhost:8088/myService'
Feel free to check out the current one displayed in the package.json file.

### Note - Default Timeout Period
Feel free to set the default timeout period directly in the 'package.json' file, in the scripts section (mocha -t 20000). Currently, the default value is set to 20 seconds.

### Note3: 
The XML payload will be stored in the 'data' folder.
