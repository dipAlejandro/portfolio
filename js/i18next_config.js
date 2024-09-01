document.addEventListener("DOMContentLoaded", function () {
  const resources = {
    en: {
      translation: {
        titles: {
          aboutMe: "About Me",
          myProjects: "My Projects",
          contactMe: "Contact Me",
        },
        btns: {
          visit: "Visit",
          learnMore: "Learn More",
          viewOnGithub: "View on GitHub",
          send: "Send",
        },
        hero: {
          greeting: "Hello, I'm",
          profession: "Backend Web Developer",
          intro:
            "Java Developer. I am looking to focus primarily on backend development using technologies such as <strong>Java</strong>, <strong>Spring Framework / Spring Boot</strong>, <strong>MySQL</strong>, and <strong>Git</strong>, among others related to software development.",
        },
        aboutMeSection: {
          intro:
            "My name is Alejandro Damián Dip, I am from Argentina. I specialize in <strong>backend web development</strong> using primarily Java ecosystem technologies such as:",
          tools:
            "Tools like Git and databases like MySQL. I also have some experience with frontend technologies such as HTML, CSS, and JavaScript.",
          bestPractices:
            "Always striving to follow good development practices and apply principles such as <em>SOLID</em>, <em>DRY</em>, and design patterns like <em>MVC</em>.",
        },
        myProjectsSection: {
          global: {
            tecnologies: "Technologies used",
            startDate: "Start date",
            endDate: "End date",
            currentStatus: "Current status",
            currentStatusInDevelop: "Still in development.",
            currentStatusDeployed: "Deployed",
          },
          projects: [
            {
              description:
                "Informative website for a Chinese martial arts school. The purpose of this project was to provide a way to showcase the school's history and philosophy, as well as visual content (images and videos) that display the activities the institution offers and performs. It also presents means to communicate and obtain information about classes. All this presented in a simple manner for interested users.",
              startDate: "Mar 2022",
              endDate: "May 2022",
              status: "Deployed. Continues to receive updates",
            },
            {
              description:
                "Website providing information about the exchange rate in Argentine pesos ($ARS) for the main types of dollars available in Argentina. This is achieved by consuming information provided by an API and displaying it in an HTML view.",
              startDate: "Aug 2024",
              endDate: "Aug 2024",
              status: "Deployed",
            },
            {
              period: "Jul 2024 - Still in development",
              description:
                "Web application that allows for the registration, modification, and deletion of products and suppliers in a database. It also allows for importing information from <kbd>.csv</kbd> and <kbd>.xlsx</kbd> files, and exporting information to <em>PDF</em> and <em>Excel</em> documents.",
              startDate: "Jul 2024",
              endDate: "-",
              status: "Still in development",
            },
            {
              description:
                "API that provides CRUD operations to facilitate the management of information about students, teachers, and dojos of a Chinese martial arts school. In addition, a web client interacts with the API in a user-friendly way, allowing users to register and access the system to consult, add, modify, and delete information based on their user role.",
              startDate: "Aug 2024",
              endDate: "-",
              status: "Still in development",
            },
          ],
        },
        contactMeSection: {
          intro: "Send Me an Email",
          form: {
            name: "Name",
            email: "Email",
            message: "Message",
            sendMessage: "Send Message",
          },
        },
      },
    },
    es: {
      translation: {
        titles: {
          aboutMe: "Sobre Mí",
          myProjects: "Mis Proyectos",
          contactMe: "Contáctame",
        },
        btns: {
          visit: "Visitar",
          learnMore: "Saber Más",
          viewOnGithub: "Ver en GitHub",
          send: "Enviar",
        },
        hero: {
          greeting: "Hola, soy",
          profession: "Desarrollador Web Backend",
          intro:
            "Desarrollador Java. Estoy buscando enfocarme principalmente en el desarrollo backend utilizando tecnologías como <strong>Java</strong>, <strong>Spring Framework / Spring Boot</strong>, <strong>MySQL</strong>, y <strong>Git</strong>, entre otras relacionadas con el desarrollo de software.",
          learnMore: "Saber Más",
        },
        aboutMeSection: {
          intro:
            "Mi nombre es Alejandro Damián Dip, soy de Argentina. Me especializo en <strong>desarrollo web backend</strong> utilizando principalmente tecnologías del ecosistema Java como:",
          tools:
            "Herramientas como Git y bases de datos como MySQL. También tengo algo de experiencia con tecnologías frontend como HTML, CSS y JavaScript.",
          bestPractices:
            "Siempre esforzándome por seguir buenas prácticas de desarrollo y aplicar principios como <em>SOLID</em>, <em>DRY</em>, y patrones de diseño como <em>MVC</em>.",
        },
        myProjectsSection: {
          global: {
            tecnologies: "Tecnologías usadas",
            startDate: "Fecha de inicio",
            endDate: "Fecha de finalización",
            currentStatus: "Estado actual",
            currentStatusInDevelop: "Aún en desarrollo",
            currentStatusDeployed: "Desplegado",
          },
          projects: [
            {
              description:
                "Sitio web informativo para una escuela de artes marciales chinas. El propósito de este proyecto fue proporcionar una forma de mostrar la historia y filosofía de la escuela, así como contenido visual (imágenes y videos) que muestren las actividades que la institución ofrece y realiza. También presenta medios para comunicarse y obtener información sobre las clases. Todo esto presentado de manera simple para los usuarios interesados.",
              startDate: "Mar 2022",
              endDate: "May 2022",
              status: "Desplegado. Continúa recibiendo actualizaciones",
            },
            {
              description:
                "Sitio web que proporciona información sobre el tipo de cambio en pesos argentinos ($ARS) para los principales tipos de dólares disponibles en Argentina. Esto se logra consumiendo la información proporcionada por una API y mostrándola en una vista HTML.",
              startDate: "Ago 2024",
              endDate: "Ago 2024",
              status: "Desplegado",
            },
            {
              period: "Jul 2024 - Aún en desarrollo",
              description:
                "Aplicación web que permite el registro, modificación y eliminación de productos y proveedores en una base de datos. También permite importar información desde archivos <kbd>.csv</kbd> y <kbd>.xlsx</kbd>, y exportar información a documentos <em>PDF</em> y <em>Excel</em>.",
              startDate: "Jul 2024",
              endDate: "-",
              status: "Aún en desarrollo",
            },
            {
              description:
                "API que proporciona operaciones CRUD para facilitar la gestión de la información sobre estudiantes, profesores y dojos de una escuela de artes marciales chinas. Además, un cliente web interactúa con la API de una manera amigable, permitiendo a los usuarios registrarse y acceder al sistema para consultar, agregar, modificar y eliminar información según su rol de usuario.",
              startDate: "Ago 2024",
              endDate: "-",
              status: "Aún en desarrollo",
            },
          ],
        },
        contactMeSection: {
          intro: "Envíame un Correo Electrónico",
          form: {
            name: "Nombre",
            email: "Correo Electrónico",
            message: "Mensaje",
            sendMessage: "Enviar Mensaje",
          },
        },
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
