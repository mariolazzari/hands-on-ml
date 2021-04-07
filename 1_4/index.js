const SLR = require("ml-regression").SLR;
let inputs = [80, 60, 10, 20, 30];
let outputs = [20, 40, 30, 50, 60];

let regression = new SLR(inputs, outputs);
//regression.toString(3) === "f(x) = - 0.265 * x + 50.6";

console.log(regression.predict(80));
