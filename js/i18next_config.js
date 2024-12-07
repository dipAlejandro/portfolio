document.addEventListener("DOMContentLoaded", function () {
  const resources = {
    en: {
      translation: {
        "titles": {
          "aboutMe": "About Me",
          "myProjects": "My Projects",
          "contactMe": "Contact Me"
        },
        "hero": {
          "greeting": "Hello, I'm",
          "profession": "Backend Web Developer",
          "intro": "Java Developer. My focus is mainly on the backend development area using technologies such as <strong>Java</strong>, <strong>Spring Framework / Spring Boot</strong>, <strong>MySQL</strong>, and <strong>Git</strong>, among others related to software development.",
          "learnMore": "Learn More"
        },
        "aboutMe": {
          "intro": "My name is Alejandro Damián Dip, I am from Argentina. I specialize in <strong>backend web development</strong> using primarily Java ecosystem technologies such as:",
          "tools": "Tools like Git and databases like MySQL. I also handle Frontend technologies such as HTML, CSS and Typescript.",
          "bestPractices": "I always try to follow good development practices and apply principles such as <em>SOLID</em>, <em>DRY</em>, and design patterns like <em>MVC</em>."
        },
        "myProjects": {
          "projects": [
            {
              "description": "Informative website for a Chinese martial arts school. The purpose of this project was to provide a way to showcase the school's history and philosophy, as well as visual content (images and videos) that display the activities the institution offers and performs. It also presents means to communicate and obtain information about classes. All this presented in a simple manner for interested users.",
              "startDate": "Mar 2022",
              "endDate": "May 2022",
              "status": "Deployed. Continues to receive updates"
            },
            {
              "description": "Website providing information about the exchange rate in Argentine pesos ($ARS) for the main types of dollars available in Argentina. This is achieved by consuming information provided by an API and displaying it in an HTML view.",
              "startDate": "Aug 2024",
              "endDate": "Aug 2024",
              "status": "Deployed"
            },
            {
              "period": "Jul 2024 - Still in development",
              "description": "Web application that allows for the registration, modification, and deletion of products and suppliers in a database. It also allows for importing information from <kbd>.csv</kbd> and <kbd>.xlsx</kbd> files, and exporting information to <em>PDF</em> and <em>Excel</em> documents.",
              "startDate": "Jul 2024",
              "endDate": "-",
              "status": "Still in development"
            },
            {
              "description": "The project consists of an API that provides CRUD operations to facilitate the management of information about students, teachers, and dojos of a Chinese martial arts school. In addition to a web client that consumes the API and interacts in a friendly way with users, allowing them to register and access to consult, add, modify, and delete information according to their user role. The web client also provides communication with the user through email, notifying them when their account request is accepted or rejected.",
              "startDate": "Aug 2024",
              "endDate": "-",
              "status": "Still in development"
            }
          ]
        },
        "contactMe": {
          "intro": "Send Me an Email",
          "form": {
            "name": "Name",
            "email": "Email",
            "message": "Message",
            "sendMessage": "Send Message"
          }
        }
      },
    },
    es: {
      translation: {
        "titles": {
          "aboutMe": "Sobre Mí",
          "myProjects": "Mis Proyectos",
          "contactMe": "Contáctame"
        },
        "hero": {
          "greeting": "Hola, soy",
          "profession": "Desarrollador Backend Web",
          "intro": "Desarrollador Java. Mi enfoque está principalmente en el área de desarrollo backend utilizando tecnologías como <strong>Java</strong>, <strong>Spring Framework / Spring Boot</strong>, <strong>MySQL</strong> y <strong>Git</strong>, entre otras relacionadas con el área de desarrollo de software.",
          "learnMore": "Saber más"
        },
        "aboutMe": {
          "intro": "Mi nombre es Alejandro Damián Dip, soy de Argentina. Me especializo en el área del <strong>desarrollo web Backend</strong> utilizando principalmente tecnologías del ecosistema Java como:",
          "tools": "Herramientas como Git y Bases de datos como MySQL. Tambien manejo tecnologias Frontend como HTML, CSS y Typescript.",
          "bestPractices": "Siempre trato de seguir buenas prácticas de desarrollo y aplicar principios como <em>SOLID</em>, <em>DRY</em>, y patrones de diseño como <em>MVC</em>."
        },
        "myProjects": {
          "projects": [
            {
              "description": "Sitio web informativo para una escuela de artes marciales chinas. El propósito de este proyecto fue proporcionar una forma de mostrar la historia, filosofía de la escuela, además de contenido visual (imágenes y videos) que muestren las actividades que brinda y realiza la institución. También se presentan medios para comunicarse y obtener información acerca de las clases. Todo esto presentado de manera simple para los usuarios interesados.",
              "startDate": "Mar 2022",
              "endDate": "May 2022",
              "status": "Desplegado. Sigue recibiendo actualizaciones"
            },
            {
              "description": "Página web que provee información sobre la cotización en pesos argentinos ($ARS) de los principales tipos de dólares disponibles en la República Argentina. Esto se logra consumiendo la información proporcionada por una API y mostrándola en una vista HTML.",
              "startDate": "Ago 2024",
              "endDate": "Ago 2024",
              "status": "Desplegado"
            },
            {
              "period": "Jul 2024 - Aún en desarrollo",
              "description": "Aplicación web que permite el registro, modificación y eliminación de productos y proveedores en una base de datos. Así como también permite importar información desde archivos <kbd>.csv</kbd> y <kbd>.xlsx</kbd>, y también exportar la información a documentos <em>PDF</em> y <em>Excel</em>.",
              "startDate": "Jul 2024",
              "endDate": "-",
              "status": "Aún en desarrollo"
            },
            {
              "description": "El proyecto esta compuesto por una API que proporciona operaciones CRUD para facilitar la gestion de informacion de alumnos, profesores y dojos de una escuela de artes marciales chinas. Ademas de un cliente web que consuma la API e interactue de manera amigable con los usuarios, permitiendo registrarse y acceder para consultar, agregar, modificar y eliminar la informacion segun su rol de usuario. El cliente web tambien proporciona comunicación con el usuario a traves de email, notificandole cuando su solicitud de cuenta sea aceptada o rechazada.",
              "startDate": "Ago 2024",
              "endDate": "-",
              "status": "Aún en desarrollo"
            }
          ]
        },
        "contactMe": {
          "intro": "Enviame un Correo Electronico",
          "form": {
            "name": "Nombre",
            "email": "Correo electrónico",
            "message": "Mensaje",
            "sendMessage": "Enviar mensaje"
          }
        }
      },
    },
  };

  const savedLanguage = localStorage.getItem("language") || "es"; // Idioma por defecto

  i18next.init(
    {
      lng: savedLanguage,
      debug: true,
      resources: resources,
    },
    function (err, t) {
      if (err) return console.error(err);
      updateContent();
    }
  );

  function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const key = element.getAttribute("data-i18n");
      element.innerHTML = i18next.t(key);
    });
  }

  // Selecciona todos los elementos del dropdown que cambian el idioma
  document.querySelectorAll(".dropdown-item[data-lang]").forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // Evita el comportamiento por defecto del enlace

      const lang = this.getAttribute("data-lang"); // Obtiene el valor del idioma desde el atributo data-lang

      i18next.changeLanguage(lang, function (err) {
        if (err) return console.error(err);
        localStorage.setItem("language", lang); // Guarda el idioma seleccionado
        updateContent();
      });
    });
  });
});
