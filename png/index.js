const { HTMLtoImage } = require("./node-html-to-image");
const { convertPDFToPNG } = require("./pdf-to-png");

const start = Date.now();
HTMLtoImage();
// convertPDFToPNG();
const end = Date.now();
console.log("Time taken: %s ms", end - start);
