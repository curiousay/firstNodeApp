const fs = require('fs');
const notes = require('./notes');
const validator = require("validator");
const { getMaxListeners } = require('process');
/**
 1.If file is created the content will be replaced.
 2. If file is not there file will be created.
 **/
fs.writeFileSync("notes.txt","This file was created by Node js");
fs.writeFileSync("notes.txt","My name is Sayali Nazare");

console.log(notes.getNotes());

//#region Validator
console.log(validator.isEmail("sayali.nazare@gmail.com"))
console.log(validator.isURL("www.google.com"))
//#endregion