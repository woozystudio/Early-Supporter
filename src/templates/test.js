const ascii = require('ascii-table');
let table = new ascii("Commands")
table.setHeading('Commands', 'Load');
require('colors');
table.addRow('loaded')
table.addRow('Error - Missing a help.name or it is not a string...');
console.log(table.toString().red);