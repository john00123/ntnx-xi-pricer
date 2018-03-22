
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

  $('.header').after(
    `<div class='sub-header'>
      <div class='content'>
        <h2> Starter Package</h2>
        <div><h2 class='total-amount' style='line-height:0'> $12000.00 <span>/mo</span></h2><a style='line-height:1.5' id='payment'>edit payment plan</a></div>
      </div>
    </div>`
  );

  $('.primary').one('click', () => {
    $('.container').css('justify-content','flex-start');
    $('.details').hide().append(
      `
        ${items.map(item =>
          `
          <div class='table-title'>
            <h3>${item.name}</h3>
            <a class='${item.class}'>edit</a>
          </div>

          <div class='table-wrapper'>
              <table>
                <tr>
                  <th>Products</th>
                  <th style='text-align:right;'>Quantity</th>
                  <th style='text-align: right;'>Price</th>
                  <th style='text-align: right;'>Total</th>
                </tr>
                ${item.elements.map(element =>
                  `<tr>
                    <td>${element.title}</td>
                    <td style='text-align: right;'>${element.quantity}</td>
                    <td sytle='text-align: right;' class='right'>$${element.price}.00</td>
                    <td sytle='text-align: right;' class='right totalprice'>$${isNaN(parseInt(element.price * element.quantity))? element.price : element.price * element.quantity }.00</td>
                  </tr>`
                ).join('')}
              </table>
          </div>
        `).join('')}`
    ).slideDown(550,() => $('.details').addClass('visible'));

    $('.rec').click(()=> $('body').append(CreatePopup(1,1,1)))
    $('.net').click(()=> $('body').append(CreatePopup(2,2,1)))
    $('.vmaas').click(()=> $('body').append(CreatePopup(3,3,1)))
    $('#payment').click(() => $('body').append(CreatePopup(4,4,2)))

    var sum = 0;

    $(".totalprice").each(function() {
      var val = $.trim($(this).text());
      if (val) {
          val = parseFloat( val.replace( /^\$/, "" ) );
          sum += !isNaN( val ) ? val : 0;
      }
    });

    $('.total-amount').text('$'+ sum + '.00').append(`<span>/mo</span>`);

    setTimeout(() => {
      $('.sub-header').addClass('reveal');

      $('body').animate({scrollTop: $(document).height()}, 2400
    )},500

    )
  });

});
