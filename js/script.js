// Scroll suave en el menú
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validación simple del formulario
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te responderé pronto.");
    this.reset();
});
