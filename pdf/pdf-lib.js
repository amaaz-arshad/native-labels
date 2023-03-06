const { PDFDocument, StandardFonts, degrees, rgb } = require("pdf-lib");
const fs = require("fs");
var JsBarcode = require("jsbarcode");
var { createCanvas } = require("canvas");

module.exports.createFromPdfLib = async () => {
  // Create a new PDFDocument
  const pdfDoc = await PDFDocument.create();

  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesRomanBoldFont = await pdfDoc.embedFont(
    StandardFonts.TimesRomanBold
  );

  const page = pdfDoc.addPage([288, 432]); // 4X6 size

  const { width, height } = page.getSize();

  page.setFont(timesRomanBoldFont);
  page.setFontSize(6);

  page.drawText("www.fulfilledmerchant.com", {
    x: 5,
    y: height - 12
  });

  page.setFontSize(12);

  page.drawText("25 LBS", {
    x: width / 2 - 20,
    y: height - 15
  });

  page.drawText("1 OF 1", {
    x: width - 40,
    y: height - 15
  });

  page.setFont(timesRomanFont);
  page.setFontSize(9);

  page.drawText("DWT: 25,18,9", {
    x: width / 1.6,
    y: height - 30
  });

  page.setFont(timesRomanBoldFont);
  page.setFontSize(12);

  page.drawText("SHIP TO:", {
    x: 5,
    y: height - 47.5
  });

  page.drawText("Do Not Ship", {
    x: 10,
    y: height - 65
  });

  page.drawText("4418 Sample Dr", {
    x: 10,
    y: height - 82.5
  });

  page.drawText("Sampleton TX", {
    x: 10,
    y: height - 100
  });

  page.drawLine({
    start: { x: 0, y: height - 130 },
    end: { x: width, y: height - 130 },
    thickness: 0.1
  });

  page.drawLine({
    start: { x: width / 3 - 5, y: height - 130 },
    end: { x: width / 3 - 5, y: height - 220 },
    thickness: 0.05
  });

  page.drawLine({
    start: { x: 0, y: height - 220 },
    end: { x: width, y: height - 220 },
    thickness: 3
  });

  const qrcode = fs.readFileSync("images/qrcode.jpg");
  const pngImage = await pdfDoc.embedJpg(qrcode);

  page.drawImage(pngImage, {
    x: 10,
    y: height - 210,
    width: 70,
    height: 70
  });

  var canvas = createCanvas();
  JsBarcode(canvas, "MD 787 1-71");
  const barcodeImage = await pdfDoc.embedPng(canvas.toBuffer());
  const barcodeDims = barcodeImage.scale(0.5);

  page.drawImage(barcodeImage, {
    x: width / 3 + 10,
    y: height - 210,
    width: barcodeDims.width,
    height: barcodeDims.height
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("output/pdf-lib.pdf", pdfBytes);

  // const pdfBytes = await pdfDoc.saveAsBase64();
  // fs.writeFileSync("output/pdf-lib.pdf", pdfBytes, { encoding: "base64" });
};
