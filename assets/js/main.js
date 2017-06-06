window.menuOpen = false;
$('#dropdown').on('mouseover', (e) => {
  console.log(window.menuOpen);
  $('#menu-items').css('visibility', 'visible');
  if (!window.menuOpen) {
    $('#menu-items').animate({ left: "0%"}, 1400, () => {
      window.menuOpen = true;
    });
  }
});

$('#dropdown').on('mouseout', (e) => {
  if (window.menuOpen){
    $('#menu-items').animate({ left: "100%" }, 2000, () => {
      window.menuOpen = false;
    });
  }
});

$(document).ready(() => {
  $('#navbar').animate({ opacity: 1 }, 1500);
});
