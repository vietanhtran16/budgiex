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
      res.send(detections);
    })
    .catch(err => {
      res.send(`Error: ${err}`);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
