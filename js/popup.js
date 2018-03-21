const popupData ={
  title :[
    'Account Upgrade',
    'Tax Documents',
    'Payment Method',
    'Change Plan',
  ],

  body: [
    //0 elite customer
    `<img src='https://john00123.github.io/ntnx-xi-pricer/img/elite2.svg' style='padding:10px 0 20px 0'>
      <p style='color:#22272E'>Thanks you for choosing Nutanix. Based on your purschase amount, your account it’s now eligible for an elite customer upgrade.</p>

      <p style='color:#22272E'>As an Elite customer you have volume discounts, dedicated sales representative support and a higher purchase limit.</p>
    `,

    //1 tax data
    `<h1 class='initial-tax'>
    Nutanix is required to collect sales tax in some US states.</h1>

    <p style='margin-bottom:20px;'> If you're tax exempt in a particular state, please attach an electronic copy of your valid tax exemption certificate authorized by the appropriate taxing authority.</p>

    <label id='tax-label'for="tax">Tax Document number</label>
    <input type="text" id="tax" placeholder='000 000 0000' onkeypress="return event.charCode >= 48 && event.charCode <= 57" style='margin-bottom:20px'/>

    <input type="file" id='file' accept=".xml">
    <label for='path2'>Select file</label>
    <div class='upload-file'>
    <input class='path' readonly type='text' id='path2'></input>
    <label class='file-button' for='file'>Select File</label>
    </div>
    <p style='margin: 22px 0 -8px 0;' class='consult'>To learn if your cloud consumption is subject to sale taxes, consult your tax advisor.</p>
    `,

    // 2 payment method
    `
    <h4 style='align-self:left; margin-bottom:10px;'>
    <input type='checkbox' id='invoice-only'
    style='margin-right:5px;'></input>
    Use invoice billing</h4>

    <p style='align-self:left; margin-top:10px;'>This service is only available to our enterprise level clients, and it happens mostly offline.</p><br>
    <p>Once you saved we will send a request for a Sales Representative to contact you back.<a class='link' style='margin-left:10px;'>Learn more</a></p>

    <div class='separator'></div>
    <label for="other">Card Number</label>
    <input type="text"  id='old-pswd' ">

    <label for="other">Card Holder's Name</label>
    <input type="text" id='old-pswd'>

    <div class='upload-file' style='margin:0 0 30px 0; padding-bottom:30px; border-bottom:1px solid #F2F4F6;'>
      <div class='info-pair'>
        <label for='month'>Month</label>
        <select class='thirty' name="month" id="month">
        <option value="volvo">Jan</option>
        <option value="saab">Feb</option>
        <option value="fiat">Mar</option>
        <option value="audi">Apr</option>
        <option value="audi">Jun</option>
        <option value="audi">Jul</option>
        <option value="audi">Aug</option>
        <option value="audi">Sep</option>
        <option value="audi">Oct</option>
        <option value="audi">Nov</option>
        <option value="audi">Dec</option>

        </select>
      </div>

      <div class='info-pair'>
        <label for='year'>Year</label>
        <select class='thirty' name="year" id="year">
          <option value="volvo">2018</option>
          <option value="saab">2019</option>
          <option value="fiat">2020</option>
          <option value="audi">2021</option>
        </select>
      </div>

      <div class='info-pair' style='width:145px;'>
        <label for='cvv'>CVV</label>
        <input type='text' id='cvv'></input>
      </div>
    </div>

    <label for="other">Billing Address</label>
    <input type="text" id='old-pswd' style='margin-bottom:20px;'>
    <label for="other">Address 2</label>
    <input type="text" placeholder='street' id='old-pswd'>


    <div class='upload-file'>
    <div class='info-pair' style='margin-right:5px;'>
    <label for='month'>Zip Code</label>
    <input type="text"  id='old-pswd'>
    </div>

    <div class='info-pair' style='margin-left:10px;'>
    <label for='year'>City</label>
    <input type="text"  id='old-pswd'>
    </div>

    <div class='info-pair' style='margin-left:15px;'>
    <label for='month'>State</label>
    <input type="text"  id='old-pswd' >
    </div>

    <div class='info-pair' style='margin-left:15px;'>
    <label for='year'>Country</label>
    <select class='twentyfive' name="year" id="year">
      <option value="volvo">United States</option>
      <option value="saab">Argentina</option>
      <option value="fiat">Armenia</option>
      <option value="audi">Algeria</option>
    </select>
    </div>
    </div>

    `,

    // 3 change plan
    `
    <div class="section1">
      <h1>
      <input type='radio' class='radio'checked="checked"> Pay as you go plan. <code style="  margin-left: 10px;">Current Plan</code></h1>
      <p>Pay only for what you use, reducing the risk or overprovisioning or missing capacity.</p>

      <div class='separator'></div>

      <h1>
      <input type='radio'  class='radio'> Minimum Commitment
      </h1>
      <p style="margin-bottom:20px;">Select an amount for your minimum commitment plan. For order-specific discounts. <a class='price-details'> See pricing details.</a></p>



      <label class='terms'>Select Term & amount per month</label><br>

      <div class='upload-file min-commit-cont'>
        <input class='min-commit-val' style="margin:10px 0; border-radius:4px 0 0 4px;" type='number'
          value="1000" placeholder="$1000" step="1000.00">

        <select class='term'>
        <option>3 years</option>
        <option>1 year</option>
        </select>
      </div>

    </div>
      `,
  ],

  footer:[
    `<button class="secondary cancel">Cancel</button>
     <button class="primary save" style='width:auto'>Contact Sales</button>`,

    `<button class="primary save">Save</button>`,

    `<button class="primary save">Save</button>`,

    `<button class="secondary cancel">Cancel</button>
    <button class="primary save" style='width:auto'>Save Changes</button>`,
  ]
}

function removePopup(){
  $('.overlay').remove()
}

function CreatePopup(i){
 return`<div class="overlay">
    <div class="popup">
      <div class="popup-header" onclick='removePopup()'>${popupData.title[i]}</div>
      <div class="popup-body">${popupData.body[i]}</div>
      <div class="popup-footer">${popupData.footer[i]}</div>
    </div>
  </div>
  `
}
