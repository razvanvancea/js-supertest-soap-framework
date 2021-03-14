const {expect, request} = require('../config');
const {requestXmlData} =  require("../data/requestData");
const convert = require('xml-js');

describe("SOAP Endpoints Test Suite", () => {

  it("POST request", async () => {
    const res = await request
    .post('/')
    .set('Content-Type', 'application/xml')
    .send(requestXmlData);

    expect(res.status).eql(200);

    const jsonFromResponse = JSON.parse(convert.xml2json(res.text, {compact: true, spaces: 4}));

    const actualTextResult = jsonFromResponse["soapenv:Envelope"]["soapenv:Body"]["web:NumberToDollarsResponse"]["web:NumberToDollarsResult"]["_text"];
    const expectedTextResult = "RV";
    
    expect(actualTextResult).to.be.equal(expectedTextResult);
  }  )
});
