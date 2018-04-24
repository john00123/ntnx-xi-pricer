const selection = [small, medium, large, custom, blank];

$(document).ready(function(){
  // $('#selection').html(selection[4]);
  $('#continue').click(()=> {

    if($('input:checked').val() == 0){$('#selection').html(selection[0])}
    if($('input:checked').val() == 1){$('#selection').html(selection[1])}
    if($('input:checked').val() == 2){$('#selection').html(selection[2])}
    if($('input:checked').val() == 3){$('#selection').html(selection[3])}
  }
  );

});
