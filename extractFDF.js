var pdfFiller = require('pdffiller');
const fs = require('fs');

var sourcePDF = "./models/Scheda_Collaudo_TD.pdf";

// Override the default field name regex. Default: /FieldName: ([^\n]*)/
var nameRegex = null;

var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
  if (err) throw err;

  console.log(fdfData);

  // stringify JSON Object
  var jsonContent = JSON.stringify(fdfData);
  console.log(jsonContent);

  fs.writeFile("./models/Scheda_Collaudo_TD_FDF.json", jsonContent, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });

});

