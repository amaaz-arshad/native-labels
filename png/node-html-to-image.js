const nodeHtmlToImage = require("node-html-to-image");
const fs = require("fs");
const { htmlContent } = require("./html-content");
const BwipJs = require("bwip-js");
const crypto = require("crypto");

module.exports.HTMLtoImage = async () => {
  let dpdLogo = fs.readFileSync("files/dpd-logo.jpg", { encoding: "base64" });
  dpdLogo = "data:image/jpeg;base64," + dpdLogo;

  const aztecBarcodeImage = await createBarcode({
    bcid: "azteccode",
    text: crypto.getRandomValues(new Uint8Array(64)).join("")
  });

  const barcodeImage = await createBarcode({
    bcid: "code128",
    text: "002035705308080238423330276B",
    includetext: true,
    textyoffset: 3,
    height: 20
  });

  const base64Image = await nodeHtmlToImage({
    // output: "output/dpd-label2.png",
    type: "png",
    encoding: "base64",
    html: htmlContent,
    content: { aztecBarcodeImage, barcodeImage, dpdLogo }
  });

  fs.writeFileSync("output/dpd-label2.png", base64Image, "base64");
};

const createBarcode = async (options) => {
  const png = await BwipJs.toBuffer(options);
  const pngBase64 = "data:image/png;base64," + png.toString("base64");
  return pngBase64;
};
