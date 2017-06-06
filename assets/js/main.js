$('#dropdown').on('mouseover', (e) => {
  $('#menu-items').css('visibility', 'visible');
  console.log(parseInt($('#menu-items')[0].style.left))
  if ($('#menu-items')[0].style.left )
  $('#menu-items').animate({left: "-=200"}, 1400)
})

$('#dropdown').on('mouseout', (e) => {
  $('#menu-items').css('visibility', 'hidden')
})

$(document).ready(() => {
  $('#navbar').animate({opacity: 1}, 1500)
})
