document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      const submenu = item.querySelector(".submenu");

      if (submenu) {
        // Evitar que el clic cierre o navegue inmediatamente
        event.stopPropagation();
        event.preventDefault();

        const isVisible = submenu.classList.contains("show");

        // Cerrar todos los submenús antes de abrir el actual
        document.querySelectorAll(".submenu").forEach((sm) => {
          sm.classList.remove("show");
        });

        // Alternar visibilidad del submenú actual
        if (!isVisible) {
          submenu.classList.add("show");
        }
      }
      // Si no hay submenú, no prevenimos el comportamiento predeterminado
    });
  });

  // Evitar que el clic en los enlaces dentro de los submenús cierre el menú
  const submenuLinks = document.querySelectorAll(".submenu a");
  submenuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.stopPropagation(); // Evitar que el evento suba al menú
    });
  });

  // Cerrar submenús al hacer clic fuera del menú
  document.addEventListener("click", function () {
    document.querySelectorAll(".submenu").forEach((submenu) => {
      submenu.classList.remove("show");
    });
  });
});
