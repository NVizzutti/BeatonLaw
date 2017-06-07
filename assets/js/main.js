
//toggle menu animation, do not fire if animation in progress
$('#menu-items').data('open', false);
const toggleMenu = () => {
  if ($('#menu-items').data('moving')) {
    return;
  }
  if ($('#menu-items').data('open') === false){
    $('#menu-items').data('moving', true);
    $('#menu-items').css({'display':'block'});
    $('#menu-items').animate({left: '50%'}, 1400, () => {
      $('#menu-items').data('open', true);
      $('#menu-items').data('moving', false);
    });
  } else {
    $('#menu-items').data('moving', true);
    $('#menu-items').animate({left: '100%'}, 1400, () => {
      $('#menu-items').data('open', false);
      $('#menu-items').css({'display':'none'});
      $('#menu-items').data('moving', false);
    })
  }
}

$('#dropdown').on('click', (e) => {
  toggleMenu();
});

$(document).ready(() => {
  $('#navbar').animate({ opacity: 1 }, 1500);
});
