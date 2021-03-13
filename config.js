const URL = 'localhost:8088/mockNumberConversionSoapBinding';
const request = require("supertest")(URL);
const expect = require("chai").expect;

module.exports = {
  request,
  expect,
};
