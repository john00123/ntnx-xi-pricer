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
        <h2 style='margin-top:30px;'> Payment details</h2>
        <div class='price'>
          <h1>$ 20102.00</h1>
          <h3> Pay as you go </h3>
        </div>
        `
    ).slideDown( 600, () => {
      $('.details').addClass('visible');

    });


    setTimeout(function() {
      $('body').animate({ scrollTop: $(document).height() }, 2400);
    }, 800);


  });
});
