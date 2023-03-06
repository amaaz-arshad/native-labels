const fs = require("fs");
const imgToPDF = require("image-to-pdf");
const { PDFDocument } = require("pdf-lib");

module.exports.pngToPdf = async () => {
  const pages = [
    fs.readFileSync("images/dpd-label.png"),
    "images/dpd-label.png"
  ];

  imgToPDF(pages, [288, 432]).pipe(
    fs.createWriteStream("output/converted-pdf.pdf")
  );

  //   const pdfDoc = await PDFDocument.create();
  //   const page = pdfDoc.addPage([288, 432]);
  //   const labelImg = fs.readFileSync("images/dpd-label.png");
  //   const pngImage = await pdfDoc.embedPng(labelImg);

  //   page.drawImage(pngImage, {
  //     x: 0,
  //     y: 0,
  //     width: 288,
  //     height: 432
  //   });
  //   const pdfBytes = await pdfDoc.save();
  //   fs.writeFileSync("output/converted-pdf2.pdf", pdfBytes);
};
