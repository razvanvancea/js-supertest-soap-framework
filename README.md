# JS API Automation Framework for SOAP Endpoints.

Stack: Chai, Mocha, SuperTest.


## Local SOAP Mock Server - The repository includes soapui-mocksrv.xml file. Feel free to import the project file into SoapUI IDE in order to be able to start the SOAP mock server. It exposes 2 SOAP endpoints on localhost:8088 so you can practice with. One of these endpoints will be used in the test example of the automation framework.



## Framework - Installation steps
1. Clone the repository
2. npm install

## Running the tests
CLI: npm run test

### Note: freel free to set the default timeout period directly in the 'package.json' file, in the scripts section (mocha -t 20000). Currently, the default value is set to 20 seconds.
