document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Eliminar la clase 'active' de todos los enlaces
            navLinks.forEach(navLink => navLink.classList.remove("active"));
            // Agregar la clase 'active' al enlace clicado
            this.classList.add("active");
        });
    });
});