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


const items = [
  {name: 'Disaster Recovery',
    elements:[
      { title:'Protected VMs',
        quantity: 3,
        price:300},
      { title:'CPU per VM(Ghz)',
        quantity: 60,
        price:305},
      { title:'Memory per VM(TiB)',
        quantity: 3,
        price:300},
      { title:'Recovery Level',
        quantity: 'Gold',
        price:300}
    ]
  },

  {name: 'Networking',
    elements:[
      { title:'Public IP count',
        quantity: 3,
        price:300},
      { title:'Connection type',
        quantity: 'VPN',
        price:305}
    ]
  },

  {name: 'Virtual Machines as a Service',
    elements:[
      { title:'Running VMs',
        quantity: 3,
        price:300},
      { title:'CPU per VM(Ghz)',
        quantity: 30,
        price:305},
      { title:'Memory per VM(TiB)',
        quantity: 30,
        price:305,},
      { title:'HDD per VM(TiB)',
        quantity: 30,
        price:305,},
      { title:'SSD per VM(TiB)',
        quantity: 30,
        price:305}
    ]
  }
];
