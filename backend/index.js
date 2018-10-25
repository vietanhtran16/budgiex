const express = require("express");
const vision = require("@google-cloud/vision");
const app = express();
const port = 8888;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/analyseImage", (req, res) => {
  const client = new vision.ImageAnnotatorClient();
  client
    .documentTextDetection("https://s3-ap-southeast-2.amazonaws.com/budgiex/d13da114-e39e-4967-a1ad-00b3a38e4b42.jpeg")
    .then(results => {
      const detections = results[0].fullTextAnnotation;
      res.send(detections);
    })
    .catch(err => {
      res.send(`Error: ${err}`);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
