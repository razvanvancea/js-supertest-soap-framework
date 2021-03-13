const {expect, request} = require('../config');
const {requestXmlData} =  require("../data/requestData");
const convert = require('xml-js');

describe("SOAP Endpoints", () => {

  it("POST SOAP request", async () => {
    const res = await request
    .post('/')
    .set('Content-Type', 'application/xml')
    .send(requestXmlData);

    expect(res.status).eql(200);

    const jsonFromResponse = convert.xml2json(res.text, {compact: true, spaces: 4});

    const parsed = JSON.parse(jsonFromResponse);

    const actualTextMessage = parsed["soapenv:Envelope"]["soapenv:Body"]["web:NumberToDollarsResponse"]["web:NumberToDollarsResult"]["_text"];
    const expectedTextMessage = "RV";
    
    expect(actualTextMessage).to.be.equal(expectedTextMessage);
  }  )
});
