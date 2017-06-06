$('#dropdown').on('mouseover', (e) => {
  $('#menu-items').css('visibility', 'visible');
  var leftPosition = parseInt($('#menu-items')[0].style.left)
  console.log(leftPosition);
  if (!leftPosition || leftPosition > 50) {
    $('#menu-items').animate({ left: "0%" }, 1400)
  }
});

$('#dropdown').on('mouseout', (e) => {
  $('#menu-items').animate({ left: "100%" }, 2000);
});

$(document).ready(() => {
  $('#navbar').animate({ opacity: 1 }, 1500);
});
