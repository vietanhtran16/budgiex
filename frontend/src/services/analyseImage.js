import vision from "@google-cloud/vision";

const client = new vision.ImageAnnotatorClient();

export const analyseImage = () => {
  client
    .labelDetection("../testImages/receipt.jpg")
    .then(results => {
      const labels = results[0].labelAnnotations;
      console.log("Labels:");
      labels.forEach(label => console.log(label.description));
    })
    .catch(err => {
      console.error("ERROR:", err);
    });
};
