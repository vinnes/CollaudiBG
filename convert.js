const csvFile = "./data/svc_TD_copia.csv";
const csv = require('csvtojson');

csv()
    .fromFile(csvFile)
    .then((jsonObj) => {
        console.log(jsonObj);
    });

