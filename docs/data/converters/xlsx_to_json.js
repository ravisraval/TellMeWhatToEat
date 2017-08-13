const convertExcel = require('excel-as-json').processFile;

convertExcel('./docs/data/categories/categories.xlsx', './docs/data/categories/categories.js');
convertExcel('./docs/data/answers/answers.xlsx', './docs/data/answers/answers.js');
convertExcel('./docs/data/blacklist/blacklist.xlsx', './docs/data/blacklist/blacklist.js');
convertExcel('./docs/data/questions/questions.xlsx', './docs/data/questions/questions.js');



// add export const to files
