const fs = require("fs");
const { rgbaToZ64, rgbaToACS } = require("zpl-image");
const PNG = require("pngjs").PNG;

module.exports.pngToZpl = () => {
  const buf = fs.readFileSync("files/dpd-label2.jpg");
  const png = PNG.sync.read(buf);
  const res = rgbaToACS(png.data, png.width, { black: 53, notrim: true });
  // const res = rgbaToZ64(png.data, png.width, { black: 60, notrim: true });

  // res.length is the uncompressed GRF length.
  // res.rowlen is the GRF row length.
  // res.z64 is the Z64 encoded string.
  const zpl = `^XA\n^FO0,0^GFA,${res.length},${res.length},${res.rowlen},${res.acs}\n^XZ`;
  fs.writeFileSync("output/png-zpl-label.zpl", zpl);

  const base64Zpl = Buffer.from(zpl).toString("base64");
  fs.writeFileSync("output/zpl.png", base64Zpl, "base64");
  fs.writeFileSync("output/png-zpl-label-base64.txt", base64Zpl);
};
