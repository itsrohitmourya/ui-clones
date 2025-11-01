document.addEventListener("DOMContentLoaded", () => {
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
  },{passive : false});

  function createObserver(className, element, removeBool, thresholdValue) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          } else if (removeBool) {
            entry.target.classList.remove(className);
          }
          
        });
      },
      {
        threshold: thresholdValue,
      }
    );
    if(NodeList.prototype.isPrototypeOf(element) || HTMLCollection.prototype.isPrototypeOf(element)){
      element.forEach((ele) => observer.observe(ele));
    }else{
      observer.observe(element)
    }
    
  }
  const serviceCard = document.querySelectorAll(".service-card");
  createObserver("animateCard", serviceCard, true, 0.2);

  const caseStudyItem = document.querySelectorAll(".case-study-item");

  createObserver("caseAnimate", caseStudyItem, false, 0.2);

  const processItem = document.querySelectorAll(".process-step");
  createObserver("stepAnimate", processItem, true, 0.2);

  const teamCard = document.querySelectorAll(".team-card");
  createObserver("teamAnimate", teamCard, true, 0.2);

  const testCard = document.querySelectorAll(".testimonial-card");
  createObserver("testAnimate", testCard, true, 0.2);

  const contactForm = document.querySelectorAll('.contact-form')
  createObserver("formPopUP", contactForm, false, 0.5)

  const footer = document.querySelectorAll('footer')
  createObserver("animateFooter", footer, false, 0.5)
});
