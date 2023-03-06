const { PDFDocument, StandardFonts, degrees, rgb } = require("pdf-lib");
const fs = require("fs");
var JsBarcode = require("jsbarcode");
var { createCanvas } = require("canvas");
const BwipJs = require("bwip-js");
const { pdfToPng } = require("pdf-to-png-converter");

module.exports.createDPDLabel = async () => {
  // Create a new PDFDocument
  const pdfDoc = await PDFDocument.create();

  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const page = pdfDoc.addPage([288, 432]); // 4X6 size

  const { width, height } = page.getSize();

  page.setFont(helveticaFont);
  page.setFontSize(7);
  page.moveTo(7, height - 15);
  page.drawText("KN Ref:");
  page.moveDown(15);
  page.drawText("Client Ref:");
  page.moveDown(15);
  page.drawText("KN SSCC:");
  page.moveDown(20);
  page.setFontSize(9.5);
  page.drawText("Terms & Conditions of service on www.dpd.com");
  page.moveRight(225);
  page.moveDown(5);

  const dpdLogoBuffer = fs.readFileSync("images/dpd-logo.jpg");
  const dpdLogoImage = await pdfDoc.embedJpg(dpdLogoBuffer);
  const logoDim = dpdLogoImage.scale(0.2);

  page.drawImage(dpdLogoImage, {
    width: logoDim.width,
    height: logoDim.height
  });

  page.drawLine({
    start: { x: 7, y: height - 75 },
    end: { x: 288, y: height - 75 },
    thickness: 0.1
  });
  page.drawLine({
    start: { x: 7, y: height - 165 },
    end: { x: 288, y: height - 165 },
    thickness: 0.1
  });
  page.drawLine({
    start: { x: 7, y: height - 250 },
    end: { x: 288, y: height - 250 },
    thickness: 0.1
  });
  page.drawLine({
    start: { x: 175, y: height - 75 },
    end: { x: 175, y: height - 250 },
    thickness: 0.1
  });
  page.drawLine({
    start: { x: 230, y: height - 75 },
    end: { x: 230, y: height - 165 },
    thickness: 0.1
  });
  page.drawLine({
    start: { x: 7, y: height - 210 },
    end: { x: 175, y: height - 210 },
    thickness: 0.1
  });
  page.drawLine({
    start: { x: 125, y: height - 165 },
    end: { x: 125, y: height - 210 },
    thickness: 0.1
  });

  page.setFontSize(8);
  page.moveTo(7, height - 85);
  page.drawText("Consignee:");
  page.moveDown(12);
  page.drawText("âG?a");
  page.moveDown(12);
  page.drawText("âa");
  page.moveDown(12);
  page.drawText("Weaidenallee 3â");
  page.moveDown(12);
  page.drawText("Haâmburg 20357");
  page.moveDown(12);
  page.drawText("Deutschland 3â");
  page.moveDown(12);
  page.drawText("DâE6");

  page.setFontSize(6);
  page.moveTo(275, height - 77.5);
  page.drawText("0530", { rotate: degrees(-90) });
  page.moveLeft(8);
  page.drawText("DPD (Belgium) NV", { rotate: degrees(-90) });
  page.moveLeft(8);
  page.drawText("Egide Walschaertsstraat 20", { rotate: degrees(-90) });
  page.moveLeft(8);
  page.drawText("2800 Mechelen", { rotate: degrees(-90) });
  page.moveLeft(8);
  page.drawText("Tel: +32-(0) 15-40-60 00", { rotate: degrees(-90) });
  page.moveLeft(8);
  page.drawText("Fax: +32-(0) 15-40-60 00", { rotate: degrees(-90) });

  page.moveTo(220, height - 77.5);
  page.drawText("Sender:", { rotate: degrees(-90) });
  page.moveLeft(15);
  page.drawText("LEGO Shop", { rotate: degrees(-90) });
  page.moveLeft(8);
  page.drawText("Klaus-Michael Kuehnelaan 8", { rotate: degrees(-90) });
  page.moveLeft(8);
  page.drawText("BE-2440 Geel", { rotate: degrees(-90) });
  page.moveLeft(8);
  page.drawText("Telephone", { rotate: degrees(-90) });

  page.moveTo(135, height - 175); // x: 125, y: height - 165
  page.setFontSize(7);
  page.drawText("Shipment:");
  page.moveTo(139, height - 195);
  page.drawText("Weight:");
  page.moveTo(141, height - 185);
  page.setFontSize(9);
  page.setFont(helveticaBoldFont);
  page.drawText("1 / 5");
  page.moveTo(135, height - 205);
  page.drawText("0.47 kg");

  page.moveTo(7, height - 220);
  page.setFont(helveticaFont);
  page.setFontSize(8);
  page.drawText("Nachnahme / C.O.D.");
  page.moveDown(25);
  page.drawText("KN SSCC");

  page.moveTo(10, height - 267.5);
  page.drawText("0530", {
    size: 20
  });
  page.moveRight(60);
  page.drawText("8080 2384 23 c", {
    size: 14
  });
  page.moveRight(125);
  page.drawText("D-COD-B2C", {
    size: 14,
    font: helveticaBoldFont
  });

  page.moveTo(15, height - 275);
  page.setFont(helveticaFont);
  page.setFontSize(6);
  page.drawText("Track");
  page.moveRight(230);
  page.drawText("Service");

  page.moveTo(7, height - 300);
  page.drawSquare({
    size: 15,
    borderColor: rgb(0, 0, 0),
    borderWidth: 0.1
  });

  page.moveRight(75);
  page.drawText("DE-0120", {
    size: 30
  });

  page.moveTo(115, height - 315);
  page.drawText("330 - DE - 20357", {
    size: 7
  });
  page.moveTo(85, height - 325);
  page.drawText("12.04.21 14:29 20180108 2.21.10.29584", {
    size: 6
  });
  page.moveRight(115);
  page.drawText("K204", {
    size: 25
  });

  page.moveTo(15, height - 420);
  var canvas = createCanvas();
  JsBarcode(canvas, "002035705308080238423330276B", {
    font: "helvetica",
    height: 120
  });
  // canvas.createPNGStream().pipe(fs.createWriteStream("images/barcode.png"));
  const barcodeImage = await pdfDoc.embedPng(canvas.toBuffer());
  const barcodeDims = barcodeImage.scale(0.55);

  page.drawImage(barcodeImage, {
    width: barcodeDims.width,
    height: barcodeDims.height
  });

  const aztecBuffer = await createAztecBarcode();
  const aztecImg = await pdfDoc.embedPng(aztecBuffer);
  page.moveTo(190, height - 240);
  page.drawImage(aztecImg, {
    width: 65,
    height: 65
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("output/dpd-label.pdf", pdfBytes);

  // save pdf as png
  await pdfToPng(Buffer.from(pdfBytes), {
    disableFontFace: false,
    viewportScale: 5.0,
    outputFolder: "images",
    strictPagesToProcess: false,
    verbosityLevel: 0
  });
};

const createAztecBarcode = () => {
  return new Promise((resolve, reject) => {
    BwipJs.toBuffer({
      bcid: "azteccode", // Barcode type
      text: "pPd5NQ3R3n04kx6rvtxJ4sYGOv5x9TtdoRDFgWFKTUYL+hqVWdZP7+w3PiYDstKNwFgXLNvCvLdcCpKFyXlg9g==" // Text to encode
    })
      .then((png) => {
        resolve(png);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
