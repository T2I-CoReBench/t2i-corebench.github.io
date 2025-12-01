window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener('DOMContentLoaded', function () {
  const options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  bulmaCarousel.attach('.carousel', options);
});
