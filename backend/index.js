const express = require("express");
const vision = require("@google-cloud/vision");
const app = express();
const port = 8000;


app.get("/", (req, res) => res.send("Hello World!"));

app.get("/hello", (req, res) => {
  var helloWorldRequestProcessor = require("./request_handling/HelloWorldRequestProcess");
  helloWorldRequestProcessor.processRequest(req, res);
});

app.get("/analyseImage", (req, res) => {
  const client = new vision.ImageAnnotatorClient();
  client
    .documentTextDetection(`https://s3-ap-southeast-2.amazonaws.com/budgiex/${req.query["fileName"]}`)
    .then(results => {
      const detections = results[0].fullTextAnnotation;
      let text = detections.text;
      let list = text.split('\n');
      var total = 0;
      var seller = list[0];

      var responseDict = [];
      responseDict['seller'] = seller;

      var itemDict = [];
      for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var indexOfMoney = item.search(/\$\d+(\.\d+)$/);

          if (indexOfMoney == -1) continue;
          var indexOfDiscount = item.search("% off");
          if (indexOfDiscount > -1) continue;

          if (item.startsWith("TOTAL")) {
              total = item.substring(indexOfMoney + 1);
              // console.log("TOTAL: " + total);
              break;
          }

          if (item.search("SUBTOTAL") > -1) continue;
          if (item.search("GST.") > -1) continue;
          
          itemDict.push({'name': item.substring(0, indexOfMoney), 'cost': item.substring(indexOfMoney + 1)});
      }
      responseDict["items"] = itemDict;
      res.json(responseDict);
    })
    .catch(err => {
      res.josn({"error": err});
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
