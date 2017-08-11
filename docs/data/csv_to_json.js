let csvToJson = require('convert-csv-to-json');

let answersInput = './answers/answers.csv';
let answersOutput = './answers/answers.json';

let questionsInput = './questions/questions.csv';
let questionsOutput = './questions/questions.json';

let categoriesInput = './categories/categories.csv';
let categoriesOutput = './categories/categories.json';


csvToJson.generateJsonFileFromCsv(answersInput, answersOutput);
csvToJson.generateJsonFileFromCsv(questionsInput, questionsOutput);
csvToJson.generateJsonFileFromCsv(categoriesInput, categoriesOutput);
