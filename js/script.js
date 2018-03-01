const tiers = [
  {
    tier: 'Free',
    subtitle: 'Try it out',
    price: 'Free',
    protection: 10,
    vpn: 'VPN',
    downtime: 1,
    failover: '8hrs every quarter'
  },
  {
    tier: 'Plus',
    subtitle: 'A great way to expand',
    price: '$ per month',
    protection: 50,
    vpn: 'VPN + 2 public IPs',
    downtime: 5,
    failover: '8hrs every quarter'
  },
  {
    tier: 'Premium',
    subtitle:'For high performing enviroments',
    price:'$$ per month',
    protection: 100,
    vpn: 'Direct Connect + 5 Public IPs',
    downtime: 5,
    failover: '8hrs every quarter. 3 days of Downtime in a year'
  }
]

$(document).ready(function(){

  $('.container').append(tiers.map(
      tier =>
      `
      <div class="card">
        <div class="card-header">
        <h2>${tier.tier}</h2>
        <p>${tier.subtitle}</p>
        </div>
        <div class="card-body">
          <li> ${tier.protection} Protected Virtual Machines</li>
          <li> ${tier.downtime} Virtual Machine without downtime </li>
          <li> ${tier.vpn}</li>
          <li> ${tier.failover}</li>
        </div>
      </div>
      `

  ));

})
