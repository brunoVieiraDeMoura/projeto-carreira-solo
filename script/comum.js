//FORM DETALHES
const dNone = document.getElementById("dnone");
function displayof() {
  dNone.style.display = "none";
}
displayof();

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

  const interestId = document.getElementById("interest");
  function checkMediaQuery() {
    const midiaQueryLandingScape = window.matchMedia(
      "screen and (min-height: 0px) and (max-height: 500px) and (max-width: 990px) and (orientation: landscape) , screen and (min-width: 410px) and (max-width: 767px)"
    );
    const triangulo = document.getElementById("triangulo");
    console.log(midiaQueryLandingScape);

    if (midiaQueryLandingScape.matches) {
      console.log();
      triangulo.style.display = "block";
      interestId.setAttribute("size", "4");
      interestId.style.height = "50px";
    } else {
      interestId.setAttribute("size", "");
      triangulo.style.display = "none";
      interestId.style.height = "28px";
    }
  }

  window.addEventListener("resize", debounce(checkMediaQuery, 100));
  checkMediaQuery();
});