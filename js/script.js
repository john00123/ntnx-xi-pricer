
$(document).ready(function(){

  $('.deck').append(tiers.map(tier =>
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
    $('.details').hide().append(
      ` <h2> Plan Details</h2>
        ${items.map(item =>
          `<div class='table-wrapper'>
              <table>
                <tr>
                  <th>${item.name}</th>
                  <th style='text-align:right;'>Quantity</th>
                  <th>Price</th>
                </tr>
                ${item.elements.map(element =>
                  `<tr>
                    <td><input type='checkbox' checked/>${element.title}</td>
                    <td style='text-align: right;'>${element.quantity}</td>
                    <td class='right'>${element.price}</td>
                  </tr>`
                ).join('')}
              </table>
            </div>
          `
        ).join('')}`
    ).slideDown(600, () => { $('.details').addClass('visible')});

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
