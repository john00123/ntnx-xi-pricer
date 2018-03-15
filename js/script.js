const tiers = [
  {
    tier: 'Starter',
    subtitle: 'For those trying Xi cloud',
    price: 'Free',
    protection: 10,
    vpn: 'VPN',
    downtime: 1,
    failover: 'and a maximum of 8 hours of failover every quarter'
  },
  {
    tier: 'Business',
    subtitle: 'More VMs, public IPs and failover',
    price: '$ per month',
    protection: 50,
    vpn: 'VPN + 2 public IPs',
    downtime: 5,
    failover: 'and a maximum of 8 hours of failover every quarter'
  },
  {
    tier: 'Enterprise',
    subtitle:'Better network more ',
    price:'$$ per month',
    protection: 100,
    vpn: 'Direct Connect + 5 Public IPs',
    downtime: 5,
    failover: 'and a maximum of 8 hours of failover every quarter, 3 days of Downtime in a year.'
  }
];


const popupData ={
  title :[
    'Account Upgrade',
    'Tax Documents',
    'Payment Method',
    'Change Plan',
  ],

  body: [
    //0 credits
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

$(document).ready(function(){

  $('.deck').append(tiers.map(
      tier =>
      `
      <div class="card">
        <div class="card-header">
        <h1>${tier.tier}</h1>
        <p>${tier.subtitle}</p>
        </div>
        <div class="card-body">
          <p> ${tier.protection} Protected Virtual Machines, ${tier.downtime} Virtual Machine without downtime, ${tier.vpn} ${tier.failover}</p>
        </div>
        <div class="card-footer">
        <h2>${tier.price}</h2>
        <p>Some text here</p>
        <button class='primary'>Choose plan</button>
        </div>
      </div>
      `
  ));
  $('.primary').one('click', () => {
    $('.container').css('justify-content','flex-start');
    $('.details').hide().append(`
        <h2> Plan Details </h2>
        <div class='table-wrapper'>
          <table>
            <tr>
              <th>Disaster Recovery</th>
              <th style='text-align: right;'>Quantity</th>
              <th>Action</th>
            </tr>
            <tr>
              <td><input type='checkbox' checked/>  Protected VMs</td>
              <td style='text-align: right;'>3</td>
              <td class='right action'>Edit</td>
            </tr>
            <tr>
              <td><input type='checkbox' checked/>  CPU per VM (GHz)</td>
              <td style='text-align: right;'> 80</td>
              <td class='right action' >Edit </td>
            </tr>
            <tr>
              <td><input type='checkbox' checked/>  Memory per VM (TiB)</td>
              <td style='text-align: right;'> 90  </td>
              <td class='right action'> Edit </td>
            </tr>

            <tr>
              <td><input type='checkbox' checked/>Recovery Level</td>
              <td style='text-align: right;'> Gold</td>
              <td class=' right action'> Edit </td>
            </tr>
          </table>
        </div>

        <div class='table-wrapper'>
          <table>
            <tr>
              <th>Networking</th>
              <th style='text-align: right;'>Quantity</th>
              <th>Action</th>
            </tr>
            <tr>
              <td><input type='checkbox' checked/>  Public IP Count</td>
              <td style='text-align: right;'>30</td>
              <td class='right action'>Edit</td>
            </tr>
            <tr>
              <td><input type='checkbox' checked/>  Connection type</td>
              <td style='text-align: right;'>VPN</td>
              <td class='right action' >Edit </td>
            </tr>
          </table>
        </div>

        <div class='table-wrapper'>
          <table>
            <tr>
              <th>Virtual Machines as a service</th>
              <th style='text-align: right;'>Quantity</th>
              <th>Action</th>
            </tr>
            <tr>
              <td><input type='checkbox' checked/>  Running VMs</td>
              <td style='text-align: right;'>1000</td>
              <td class='right action'>Edit</td>
            </tr>
            <tr>
              <td><input type='checkbox' checked/>  CPU per VM (GHz)</td>
              <td style='text-align: right;'> 80</td>
              <td class='right action' >Edit </td>
            </tr>
            <tr>
              <td><input type='checkbox' checked/>  Memory per VM (TiB)</td>
              <td style='text-align: right;'> 90  </td>
              <td class='right action'> Edit </td>
            </tr>
            <tr>
              <td><input type='checkbox' checked/> HDD per VM (TiB)</td>
              <td style='text-align: right;'> 400 </td>
              <td class=' right action'> Edit </td>
            </tr>
            <tr>
              <td><input type='checkbox' checked/> Flash per VM (TiB)</td>
              <td style='text-align: right;'> 80 </td>
              <td class=' right action'> Edit </td>
            </tr>
          </table>
        </div>
        <h2 style='margin-top:40px;'> Payment details</h2>
        <div class='table-wrapper'>
          <table>
            <tr>
              <th>Payment method</th>
              <th style='text-align: right;'>Terms</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Pay as you go</td>
              <td style='text-align: right;'>Per month</td>
              <td class='right action payment'>Edit</td>
            </tr>

          </table>
        </div>
        `
    ).slideDown( 600, () => { $('.details').addClass('visible')});
    $('.payment').click(()=>{
      $('body').append(
        `<div class="overlay js-container">
          <div class="popup">
            <div class="popup-header">${popupData.title[3]}</div>
            <div class="popup-body">${popupData.body[3]}</div>
            <div class="popup-footer">${popupData.footer[3]}</div>
          </div>
        </div>`
      );
      $('.save').click(()=>{
        $('.overlay').addClass('js-container');
        $('.popup').html(
          `
            <div class="popup">
              <div class="popup-header">${popupData.title[0]}</div>
              <div class="popup-body">${popupData.body[0]}</div>
              <div class="popup-footer">${popupData.footer[0]}</div>
            </div>
          `
        );
        $('.cancel, .popup-header').click(()=> $('.overlay').remove());
        confetti();
      });
      $('.cancel, .popup-header').click(()=> $('.overlay').remove());
    });
    setTimeout(() =>
      $('body').animate({ scrollTop: $(document).height() }, 2400),600
    );
  });


});

//confetti

function confetti(){

var Confettiful = function Confettiful(el) {
  this.el = el;
  this.containerEl = null;

  this.confettiFrequency = 3;
  this.confettiColors = ['#fce18a', '#FFBC0B', '#E69B0A', '#FFF6DD'];
  this.confettiAnimations = ['slow', 'medium', 'fast'];

  this._setupElements();
  this._renderConfetti();
};

Confettiful.prototype._setupElements = function () {
  var containerEl = document.createElement('div');
  var elPosition = this.el.style.position;

  if (elPosition !== 'fixed' || elPosition !== 'absolute') {
    this.el.style.position = 'fixed';
  }

  containerEl.classList.add('confetti-container');

  this.el.appendChild(containerEl);

  this.containerEl = containerEl;
};

Confettiful.prototype._renderConfetti = function () {
  var _this = this;

  this.confettiInterval = setInterval(function () {
    var confettiEl = document.createElement('div');
    var confettiSize = Math.floor(Math.random() * 3) + 7 + 'px';
    var confettiBackground = _this.confettiColors[Math.floor(Math.random() * _this.confettiColors.length)];
    var confettiLeft = Math.floor(Math.random() * _this.el.offsetWidth) + 'px';
    var confettiAnimation = _this.confettiAnimations[Math.floor(Math.random() * _this.confettiAnimations.length)];

    confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
    confettiEl.style.left = confettiLeft;
    confettiEl.style.width = confettiSize;
    confettiEl.style.height = confettiSize;
    confettiEl.style.backgroundColor = confettiBackground;

    confettiEl.removeTimeout = setTimeout(function () {
      confettiEl.parentNode.removeChild(confettiEl);
    }, 3000);

    _this.containerEl.appendChild(confettiEl);
  }, 25);
};

window.confettiful = new Confettiful(document.querySelector('.js-container'));
};
