const xlsx = require('node-xlsx').default;
const fs = require('fs');
const workSheetsFromFile = xlsx.parse(`${__dirname}/tkb.xls`);
let a = workSheetsFromFile[0].data.filter((e, i) => e[0] && (!!parseInt(e[0]) || e[0].toLowerCase() == "thứ"))/* .forEach(e => console.log(e.join('|'))); */
// fs.writeFileSync('1.json',JSON.stringify(workSheetsFromFile[0].data.filter((e, i) => i > 9)));
console.table(a.filter((e, i) => i > 0).map(value => {
    let temp = new Object()
    a[0].forEach((key, item) => { temp[`${key}`] = value[`${item}`] || ''})
    return temp;
}))