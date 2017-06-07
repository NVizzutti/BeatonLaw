
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

const slideImage = (idx) => {
  var headlines = ["New_Orleans_01.jpg", "portrait.jpg"];
  if (idx > headlines.length - 1) {
    idx = 0;
  }
  var currentSrc = headlines[idx];
  // $("#home-img").attr("src", `assets/images/${currentSrc}`);
  $('#headline').html(`${currentSrc}`);
  setTimeout(() => slideImage(idx + 1), 5000);
}

$('#dropdown').on('click', (e) => {
  toggleMenu();
});

$(document).ready(() => {
  $('#home-img').fadeTo(2000, 1);
  slideImage(0)
});
