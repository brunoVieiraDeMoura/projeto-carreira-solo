//FORM BOTÃO
document.addEventListener("DOMContentLoaded", function () {
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function checkMediaQuery() {
    const midiaQueryLandingScape = window.matchMedia(
      "screen and (min-height: 0px) and (max-height: 500px) and (max-width: 990px) and (orientation: landscape) , screen and (min-width: 0px) and (max-width: 767px)"
    );
    const webkitOff = document.getElementById("webkit");
    const triangulo = document.getElementById("triangulo");

    console.log(midiaQueryLandingScape);

    if (midiaQueryLandingScape.matches) {
      console.log();
      triangulo.style.display = "block";
    } else {
      triangulo.style.display = "none";
    }
  }

  window.addEventListener("resize", debounce(checkMediaQuery, 100));
  checkMediaQuery();
});
