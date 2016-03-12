var LP = require('./index.js');

// check that the ns() function exists
if (typeof LP.ns !== 'function') {
    console.error('ns() function not defined!');
    return;
}

var testObj = {};

LP.ns('my.custom.namespace', testObj);

if (typeof testObj['my'] === undefined 
    || typeof testObj['my.custom'] === undefined
    || typeof testObj['my.custom.namespace'] === undefined) {
    console.error('ns() function not defined!');
    return;
}

console.log('ns() function creates the namespace properly.');
