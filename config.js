const request = require("supertest")(
  "localhost:8088/mockNumberConversionSoapBinding"
);
const expect = require("chai").expect;

module.exports = {
  request,
  expect,
};
