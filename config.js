const args = require('minimist')(process.argv.slice(2));
const URL = args.env;
const request = require("supertest")(URL);
const expect = require("chai").expect;

module.exports = {
  request,
  expect,
};
