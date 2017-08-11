const convertExcel = require('excel-as-json').processFile;


convertExcel('../data_breakdown.xlsx', './data.json');

convertExcel('../categories/categories.xlsx', './categories/categories.json');
convertExcel('../answers/answers.xlsx', './answers/answers.json');
convertExcel('../questions/questions.xlsx', './questions/questions.json');
