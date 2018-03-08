const tiers = [
  {
    tier: 'Starter',
    subtitle: 'For those trying Xi cloud',
    price: 'Free',
    protection: 10,
    vpn: 'VPN',
    downtime: 1,
    failover: 'and a maximum of 8hrs of failover every quarter'
  },
  {
    tier: 'Business',
    subtitle: 'More VMs, public IPs and failover',
    price: '$ per month',
    protection: 50,
    vpn: 'VPN + 2 public IPs',
    downtime: 5,
    failover: 'and a maximum of 8hrs of failover every quarter'
  },
  {
    tier: 'Enterprise',
    subtitle:'Better network more ',
    price:'$$ per month',
    protection: 100,
    vpn: 'Direct Connect + 5 Public IPs',
    downtime: 5,
    failover: 'and a maximum of 8hrs of failover every quarter, 3 days of Downtime in a year.'
  }
];

(function() {
    var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

    NUM_CONFETTI = 80;

    COLORS = [[219, 69, 59], [51, 42, 134], [94, 151, 50], [227, 111, 30], [138, 31, 3], [255, 201, 7], [0, 165, 227], [16, 69, 89]];

    PI_2 = 2 * Math.PI;

    canvas = document.getElementById("confetti");

    context = canvas.getContext("2d");

    window.w = 0;

    window.h = 0;

    resizeWindow = function() {
      window.w = canvas.width = window.innerWidth;
      return window.h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeWindow, false);

    window.onload = function() {
      return setTimeout(resizeWindow, 0);
    };

    range = function(a, b) {
      return (b - a) * Math.random() + a;
    };

    drawCircle = function(x, y, r, style) {
      context.beginPath();
      context.arc(x, y, r, 0, PI_2, false);
      context.fillStyle = style;
      return context.fill();
    };

    xpos = 0.5;

    document.onmousemove = function(e) {
      return xpos = e.pageX / w;
    };

    window.requestAnimationFrame = (function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
          return window.setTimeout(callback, 1000 / 60);
        };
    })();

    Confetti = (function() {
      function Confetti() {
        this.style = COLORS[~~range(0, COLORS.length)];
        this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
        this.r = ~~range(2, 6);
        this.r2 = 2 * this.r;
        this.replace();
      }

      Confetti.prototype.replace = function() {
        this.opacity = 0;
        this.dop = 0.02 * range(1, 4);
        this.x = range(-this.r2, w - this.r2);
        this.y = range(-20, h - this.r2);
        this.xmax = w - this.r;
        this.ymax = h - this.r;
        this.vx = range(0, 2) + 8 * xpos - 5;
        return this.vy = 0.7 * this.r + range(-1, 1);
      };

      Confetti.prototype.draw = function() {
        var ref;
        this.x += this.vx;
        this.y += this.vy;
        this.opacity += this.dop;
        if (this.opacity > 1) {
          this.opacity = 1;
          this.dop *= -1;
        }
        if (this.opacity < 0 || this.y > this.ymax) {
          this.replace();
        }
        if (!((0 < (ref = this.x) && ref < this.xmax))) {
          this.x = (this.x + this.xmax) % this.xmax;
        }
        return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
      };

      return Confetti;

    })();

    confetti = (function() {
      var j, ref, results;
      results = [];
      for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
        results.push(new Confetti);
      }
      return results;
    })();

    window.step = function() {
      var c, j, len, results;
      requestAnimationFrame(step);
      context.clearRect(0, 0, w, h);
      results = [];
      for (j = 0, len = confetti.length; j < len; j++) {
        c = confetti[j];
        results.push(c.draw());
      }
      return results;
    };

    step();

}).call(this);


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
  $('.primary').one('click',function(){
    $('.details').hide().append(`
        <h2> Plan Details </h2>
        <div class='table-wrapper'>
          <table>
            <tr>
              <th>Product</th>
              <th>Item</th>
              <th>Action</th>
            </tr>
            <tr>
              <td><input type='checkbox' checked/>  Protected VMs</td>
              <td>3</td>
              <td class='right action'>Edit</td>
            </tr>
            <tr>
              <td><input type='checkbox' checked/>  24/7 VMs</td>
              <td>2</td>
              <td class='right action' >Edit </td>
            </tr>
            <tr>
              <td><input type='checkbox' checked/>  Connections</td>
              <td> VPN </td>
              <td class='right action'> Edit </td>
            </tr>
            <tr>
              <td><input type='checkbox' checked/>  Failover</td>
              <td> 8hrs every quarter </td>
              <td class=' right action'> Edit </td>
            </tr>
          </table>
        </div>
        `
    ).slideDown(600, function(){
      $('.details').addClass('visible');
    });

    $('.container').css('justify-content','flex-start');

  });


});
