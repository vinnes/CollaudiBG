const csvFile = "./public/data/Report_Tutti.csv";
const csv = require('csvtojson');

csv()
    .fromFile(csvFile)
    .then((jsonObj) => {
        console.log(jsonObj);
    });

