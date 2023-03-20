$(".main-slider").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  prevArrow: `
  <button type="button" class="main__slick-arrow main__slick-prev"><img src="./images/icons/prev-arrow.svg" alt="prev-arrow"></button>
  `,
  nextArrow: `
  <button type="button" class="main__slick-arrow main__slick-next"><img src="./images/icons/next-arrow.svg" alt="next-arrow"></button>
  `,
});
$(".review-slider").slick({
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: `
  <button type="button" class="review__slick-arrow review__slick-prev"><img src="./images/icons/prev-arrow.svg" alt="prev-arrow"></button>
  `,
  nextArrow: `
  <button type="button" class="review__slick-arrow review__slick-next"><img src="./images/icons/next-arrow.svg" alt="next-arrow"></button>
  `,
});