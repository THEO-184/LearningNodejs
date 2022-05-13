// modules
const names = require("./4-names");
const sayHi = require("./4-utils");
const data = require("./alternative-exports");

require("./6-function-exports");

sayHi(names.john);
sayHi(names.peter);
