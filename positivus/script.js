const carousel = document.querySelector(".case-studies-list");

carousel.addEventListener("wheel", (e) => {
  const atStart = carousel.scrollLeft <= 0;
  let atEnd =
    Math.ceil(carousel.scrollLeft + carousel.clientWidth) >=
    carousel.scrollWidth;

  if (e.deltaY > 0 && !atEnd) {
    e.preventDefault();
    carousel.scrollLeft += e.deltaY;
  } else if (e.deltaY < 0 && !atStart) {
    e.preventDefault();
    carousel.scrollLeft += e.deltaY;
  }
});
