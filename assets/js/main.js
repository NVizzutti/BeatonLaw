
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

const toggleHeadline = (idx, bit) => {
  var zeroOne = bit === false ? 0 : 1;
  var duration = zeroOne === 1 ? 5000 : 1500;
  $('#headline').fadeTo('slow', `${zeroOne}`, () => {
    var headlines = ["New_Orleans_01.jpg", "portrait.jpg", "headline2"];
    if (idx > headlines.length - 1) {
      idx = 0;
    }
    var currentSrc = headlines[idx];
    if (zeroOne === 0){
      $('#headline').html(`${currentSrc}`);
    }
  })
  setTimeout(() => toggleHeadline((idx + 1), !bit), duration);
}

$('#navbar > section:last-child').on('click', (e) => {
  toggleMenu();
});

$(document).ready(() => {
  setTimeout(() => toggleHeadline(0, false), 5000);
  $('#home-img').fadeTo(2000, 1);
});
