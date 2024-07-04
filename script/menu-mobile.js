function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  const navMenu = document.querySelector(".nav-menu");
  const bgMenuMobile = document.querySelector(".bg-effect-menu-hamburguer");
  bgMenuMobile.classList.toggle("add-bg");
  navMenu.classList.toggle("show");
  menuIcon.classList.toggle("change");

  if (navMenu.classList.contains("show")) {
    setTimeout(() => {
      navMenu.style.opacity = "1";
    }, 10); // Ajuste pequeno para garantir que a transição seja aplicada corretamente
  } else {
    navMenu.style.opacity = "0";
  }
}
document.addEventListener("touchstart", function (event) {
  const menuIcon = document.querySelector(".menu-icon");
  const navMenu = document.querySelector(".nav-menu");
  const bgMenuMobile = document.querySelector(".bg-effect-menu-hamburguer");

  // Verifica se o toque foi fora do menu e do ícone do menu
  if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
    navMenu.classList.remove("show");
    menuIcon.classList.remove("change");
    bgMenuMobile.classList.remove("add-bg");
    navMenu.classList.add("hide-left"); // Adiciona classe para esconder à esquerda
    navMenu.style.opacity = "0"; // Garante que o menu seja ocultado
  }
});
