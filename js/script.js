const tiers = [
  {
    tier: 'Starter',
    subtitle: 'Fro those trying Xi cloud',
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
        <div class='table-wrapper'>
          <table>
            <tr>
              <th>Product</th>
              <th>Item</th>
              <th>Action</th>
            </tr>
            <tr>
              <td><input type='checkbox'/>  Protected VMs</td>
              <td>3</td>
              <td class='right action'>Edit</td>
            </tr>
            <tr>
              <td><input type='checkbox'/>  24/7 VMs</td>
              <td>2</td>
              <td class='right action'>Edit </td>
            </tr>
            <tr>
              <td><input type='checkbox'/>  Connections</td>
              <td> VPN </td>
              <td class='right action'> Edit </td>
            </tr>
            <tr>
              <td><input type='checkbox'/>  Failover</td>
              <td> 8hrs every quarter </td>
              <td class=' right action'> Edit </td>
            </tr>
          </table>
        </div>
        `
    ).slideDown(600, function(){
      $('.details').addClass('visible');
    });

  });
});
