const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerPadding: "100px",
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        centerPadding: "50px"
      }
    }
  ]
}

export default settings;
