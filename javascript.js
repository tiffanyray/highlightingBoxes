$(document).ready(() => {

  var color = ['#160F29', '#28464B', '#326771', '#2C8C99', '#42D9C8'];

  function randomColor() {
    return color[Math.floor(Math.random() * color.length)];
  }

  $('.box').on('mouseenter', function () {
    $(this).css('backgroundColor', randomColor());
    $(this).css('box-shadow', "0 0 8px white");
  });

  $('.box').on('mouseleave', function () {
    $(this).css('box-shadow', "none");
  });

  $('.box').on('click', function () {
    $(this).css('backgroundColor', randomColor());
  });








  // End of jquery .ready function
});
