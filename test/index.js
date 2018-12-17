const kmaSchedule = require("../index");
const fs = require('fs');
const buffer = fs.readFileSync(`${__dirname}/testcase.xls`)
console.log(kmaSchedule(buffer));