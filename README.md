# JS API Automation Framework for SOAP Endpoints

## Stack: Chai, Mocha, SuperTest

This JavaScript project has been designed to handle API automated tests for SOAP endpoints. It can be easily integrated with any CI/CD tools.

## Local SOAP Mock Server - only for example purpose
The repository includes soapui-mocksrv.xml file. In order to successfully run the existing test scenario, feel free to import the project file into SoapUI IDE in and start the SOAP mock server. It exposes 2 SOAP endpoints on localhost:8088 so you can practice with. One of these endpoints has been used in the test example of the project.

## Framework - Installation steps
1. Clone the repository
2. npm install

## Running the tests
CLI: npm run test

### Note - URL
You can pass the URL via CLI as --env flag.

E.g. npx mocha -t 10000 tests/*  **--env='localhost:8088/myService'**

### Note - Default Timeout Period
Mocha Default timeout value is 2 seconds (2000ms).

You can overwrite the default timeout period(ms) via CLI as -t flag.

E.g. npx mocha **-t 10000** tests/* --env='localhost:8088/myService'
