const selection = [small, medium, large, custom, blank];


function CreatePopup(i,j,k){
  $('body').css('overflow','hidden');
 return`<div class="overlay">
    <div class="popup">
      <div class="popup-header" onclick='removePopup()'>${popupData.title[i]}</div>
      <div class="popup-body">${popupData.body[j]}</div>
      <div class="popup-footer">${popupData.footer[k]}</div>
    </div>
  </div>
  `
}

$(document).ready(function(){
  // $('#selection').html(selection[4]);
  $('#continue').click(()=> {
    if($('input:checked').val() == 0){$('#selection').html(selection[0])}
    if($('input:checked').val() == 1){$('#selection').html(selection[1])}
    if($('input:checked').val() == 2){$('#selection').html(selection[2])}
    if($('input:checked').val() == 3){$('#selection').html(selection[3])}
  });

  $('.edit').click(()=> CreatePopup(0,0,0));
});
