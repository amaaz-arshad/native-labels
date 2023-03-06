module.exports.htmlContent = `<html>
<head>
  <style>
    body {
      width: 1200px;
      height: 1800px;
      // border: 2px solid black;
      font-family: Arial, Helvetica, sans-serif;
    }
    .para1 {
      font-size: 30px;
    }
    .terms {
      font-size: 40px;
      margin-right: 100px;
    }
    .top-section {
      padding: 10px 20px;
    }
    .middle-section {
      border-top: 2px solid black;
      border-bottom: 2px solid black;
      height: 740px;
    }
    .consign-details {
      padding: 20px;
      width: 60%;
    }
    .consign-details div {
      font-size: 30px;
      margin-bottom: 15px;
    }
    .right-border-content {
      border-left: 2px solid black;
      width: 40%;
      display: flex;
    }
    .box1 {
      border-right: 2px solid black;
      width: 50%;
    }
    .box2 {
      width: 50%;
    }
    .above-section {
      display: flex;
      border-bottom: 2px solid black;
      height: 380;
    }
    .below-section {
      display: flex;
      height: 360px;
    }
    .flipped {
      transform: rotate(90deg);
      font-size: 25px;
      position: relative;
      top: 80px;
      right: 30px;
      width: 320px;
    }
    .flipped div {
      margin-bottom: 5px;
    }
    .left-side {
      width: 60%;
    }
    .right-side {
      border-left: 2px solid black;
      width: 40%;
    }
    .aztec-div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .left-upper {
      display: flex;
      height: 180px;
      border-bottom: 2px solid black;
    }
    .empty {
      width: 75%;
    }
    .weight-details {
      width: 25%;
      border-left: 2px solid black;
      font-size: 30px;
      text-align: center;
      padding: 5px;
    }
    .left-lower {
      font-size: 35px;
      padding: 10px 20px;
    }
    .bottom-section {
      padding: 10px 30px;
    }
  </style>
</head>

<body>
  <div class="top-section">
    <p class="para1">KN Ref:</p>
    <p class="para1">Client Ref:</p>
    <p class="para1">KN SSCC</p>
    <div style="display: flex; margin-top: 40px">
      <div class="terms">Terms & Conditions of service on www.dpd.com</div>
      <div><img src="{{dpdLogo}}" width="160px" /></div>
    </div>
  </div>

  <div class="middle-section">
    <div class="above-section">
      <div class="consign-details">
        <div>Consignee:</div>
        <div>âG?a</div>
        <div>âa</div>
        <div>Weaidenallee 3â</div>
        <div>Haâmburg 20357</div>
        <div>Deutschland 3â</div>
        <div>DâE6</div>
      </div>

      <div class="right-border-content">
        <div class="box1">
          <div class="flipped">
            <div style="margin-bottom: 25px">Sender:</div>
            <div>LEGO Shop</div>
            <div>Klaus-Michael Kuehnelaan 8</div>
            <div>BE-2440 Geel</div>
            <div>Telephone</div>
          </div>
        </div>
        <div class="box2">
          <div class="flipped">
            <div>0530</div>
            <div>DPD (Belgium) NV</div>
            <div>Egide Walschaertsstraat 20</div>
            <div>2800 Mechelen</div>
            <div>Tel: +32-(0) 15-40-60 00</div>
            <div>Fax: +32-(0) 15-40-60 00</div>
          </div>
        </div>
      </div>
    </div>
    <div class="below-section">
      <div class="left-side">
        <div class="left-upper">
          <div class="empty"></div>
          <div class="weight-details">
            <div style="margin-bottom: 5px">Shipment:</div>
            <div
              style="margin-bottom: 5px; font-size: 35px; font-weight: bold"
            >
              1/5
            </div>
            <div style="margin-bottom: 5px">Weight:</div>
            <div style="font-size: 35px; font-weight: bold">0.47 kg</div>
          </div>
        </div>
        <div class="left-lower">
          <div style="margin-bottom: 80px">Nachnahme / C.O.D.</div>
          <div>KN SSCC</div>
        </div>
      </div>
      <div class="right-side">
        <div class="aztec-div">
          <img src="{{aztecBarcodeImage}}" width="60%" />
        </div>
      </div>
    </div>
  </div>

  <div class="bottom-section">
    <div style="display: flex; line-height: 100px">
      <div style="width: 22%">
        <div style="font-size: 90px">0530</div>
        <div style="font-size: 25px; margin-left: 30px; margin-top: -40px">
          Track
        </div>
      </div>
      <div style="width: 43%; font-size: 55px">8080 2384 23 c</div>
      <div style="width: 35%">
        <div style="font-size: 60px; font-weight: bold">D-COD-B2C</div>
        <div style="font-size: 25px; margin-left: 210px; margin-top: -50px">
          Service
        </div>
      </div>
    </div>

    <div style="display: flex">
      <div style="width: 30%">
        <div style="height: 80px; width: 80px; border: 2px solid black"></div>
      </div>

      <div style="width: 70%; font-size: 130px; margin-top: -30px">
        DE-0120
      </div>
    </div>

    <div style="text-align: center; margin-top: 15px">
      <div style="font-size: 30px; padding-bottom: 15px">
        330 - DE - 20357
      </div>
      <div style="font-size: 25px">12.04.21 14:29 20180108 2.21.10.29584</div>
      <div style="font-size: 100px; margin-left: 750px; margin-top: -95px">
        K204
      </div>
    </div>

    <div style="text-align: center;">
      <img src="{{barcodeImage}}" width="75%" />
    </div>
  </div>
</body>
</html>
`;
