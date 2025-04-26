// scripts.js
document.addEventListener('DOMContentLoaded', function() {
  // Inicialización de EmailJS (ya está cargado globalmente via CDN)
  emailjs.init({
    publicKey: "8wX7E5R_OaXdkU5Ya"
  });

  function dinamicContactAlert(alertClass, title, body) {
    const alertElement = document.getElementById("contactAlert");
    alertElement.classList.remove("d-none");

    // Comprobar el alert class anterior
    if (alertElement.classList.contains("alert-danger")) {
      alertElement.classList.remove("alert-danger");
    } else if (alertElement.classList.contains("alert-success")) {
      alertElement.classList.remove("alert-success");
    }

    alertElement.classList.add(alertClass);

    alertElement.querySelector("h4").textContent = title;
    alertElement.querySelector("p").textContent = body;
  }

  // Configuración del formulario de contacto
  document.getElementById("contact-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Mostrar indicador de carga
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
    submitBtn.disabled = true;

    emailjs.sendForm("contact_service", "template_contact_form", this).then(
      () => {
        dinamicContactAlert(
          "alert-success",
          "¡Mensaje enviado correctamente!",
          "Te responderé lo antes posible."
        );
        this.reset();

        // Restaurar botón
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      },
      (error) => {
        dinamicContactAlert(
          "alert-danger", 
          "¡Error!", 
          "No se pudo enviar el mensaje. Por favor inténtalo nuevamente."
        );
        this.reset();
        console.error(error);
        
        // Restaurar botón
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    );
  });

  // Inicializar alerts de Bootstrap (ya está cargado globalmente)
  const alertList = document.querySelectorAll(".alert");
  alertList.forEach(function(element) {
    new bootstrap.Alert(element);
  });

  // Efecto de desplazamiento suave para los enlaces de navegación
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth"
        });

        // Cerrar el menú de navegación en móviles
        const navbarCollapse = document.getElementById("navbarSupportedContent");
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          new bootstrap.Collapse(navbarCollapse).hide();
        }
      }
    });
  });
});