const fs = require("fs");
var JsBarcode = require("jsbarcode");
var { createCanvas } = require("canvas");
const PDFDocument = require("pdfkit");
const { Base64Encode } = require("base64-stream");

module.exports.createFromPdfKit = () => {
  // Create a document
  const doc = new PDFDocument({ size: [288, 432] }); // 4X6 size
  // doc.pipe(fs.createWriteStream("pdf-kit.pdf"));

  doc.font("Helvetica-Bold");
  doc.fontSize(6).text("www.fulfilledmerchant.com", 5, 5);
  doc.fontSize(11).text("25 LBS", 125, 5, {});
  doc.fontSize(11).text("1 OF 1", 250, 5);
  doc.font("Helvetica");
  doc.fontSize(9).text("DWT: 25,18,9", 180, 20, { width: 100 });
  doc.rect(0, 50, 90, 90).stroke();
  doc.rect(90, 50, 288, 90).stroke();
  doc.image("images/qrcode.jpg", 5, 55, { width: 80 });

  var canvas = createCanvas();
  JsBarcode(canvas, "MD 787 1-71");
  doc.image(canvas.toBuffer(), 95, 55, { width: 185 });

  // Finalize PDF file
  doc.end();

  // convert doc to base64 string
  var stream = doc.pipe(new Base64Encode());
  let base64String = "";
  stream.on("data", function (chunk) {
    base64String += chunk;
  });
  stream.on("end", function () {
    fs.writeFileSync("output/pdf-kit.pdf", base64String, "base64");
  });
};
