const vision = require("@google-cloud/vision");

  const client = new vision.ImageAnnotatorClient();
  client
    .documentTextDetection(`./target-receipt.jpg`)
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
        // console.log(responseDict);
    })
    .catch(err => {
        console.log(err);
    });
