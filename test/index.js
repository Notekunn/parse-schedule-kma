const kmaSchedule = require("../index");
const fs = require('fs');
const buffer = fs.readFileSync(`${__dirname}/testcase.xls`);
const buffer2 = fs.readFileSync(`${__dirname}/testcase2.xls`);
// kmaSchedule(buffer).then(console.log);
kmaSchedule(buffer2).then(console.log).catch(e => console.log(e.message));