function addAnimation(elementClass) {
    const element = document.querySelector(`.${elementClass}`);
    element.classList.add("animate");
    const textElements = element.querySelectorAll("h1, h2, h3, h4, h5, h6, p");
    textElements.forEach((textElement) => textElement.classList.add("animate"));
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    addAnimation("hero");
    addAnimation("features");
    addAnimation("about");
    addAnimation("call-to-action");
  });