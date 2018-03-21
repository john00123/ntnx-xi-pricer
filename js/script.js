
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
      `
        ${items.map(item =>
          `
          <div class='table-title'>
            <h3>${item.name}</h3>
            <a class='${item.class}'>Edit</a>
          </div>

          <div class='table-wrapper'>
              <table>
                <tr>
                  <th>Products</th>
                  <th style='text-align:right;'>Quantity</th>
                  <th style='text-align: right;'>Price</th>
                </tr>
                ${item.elements.map(element =>
                  `<tr>
                    <td>${element.title}</td>
                    <td style='text-align: right;'>${element.quantity}</td>
                    <td sytle='text-align: right;' class='right'>$${element.price}.00</td>
                  </tr>`
                ).join('')}
              </table>
          </div>
        `).join('')}`
    ).slideDown(600,() => $('.details').addClass('visible'));

    $('.rec').click(()=> $('body').append(CreatePopup(1)))
    $('.net').click(()=> $('body').append(CreatePopup(2)))
    $('.vmaas').click(()=> $('body').append(CreatePopup(3)))

    $('.edit').click(() => {
      $('body').append(CreatePopup(3));
      $('.save').click(() => {
        $('.overlay').addClass('js-container');
        $('.popup').html(CreatePopup(0));
        confetti();
      });
    });

    setTimeout(() =>
      $('body').animate({ scrollTop: $(document).height() }, 2400),600
    );
  });
});
