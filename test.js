var LP = require('./index.js');
var expect = require('chai').expect;

// check that the ns() function exists
expect(LP).to.have.property('ns');
expect(typeof LP.ns).to.equal('function')

var testNamespace = 'my.custom.namespace';
var testObj = {};
LP.ns(testNamespace, testObj);

expect(testObj).to.have.deep.property(testNamespace);

