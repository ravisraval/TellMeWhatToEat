const convertExcel = require('excel-as-json').processFile;

console.log("hi");
convertExcel('./docs/data/data_breakdown.xlsx', './docs/data/data.json');

convertExcel('./docs/data/categories/categories.xlsx', './docs/data/categories/categories.json');
convertExcel('./docs/data/answers/answers.xlsx', './docs/data/answers/answers.json');
convertExcel('./docs/data/questions/questions.xlsx', './docs/data/questions/questions.json');
console.log("bye");
