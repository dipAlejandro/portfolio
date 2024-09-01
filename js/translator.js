function changeLanguage(lng) {
    i18next.changeLanguage(lng, function(err, t) {
      if (err) return console.error(err);
      updateContent();
    });
}

// Inicializa el idioma en `localStorage` si no está configurado
if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "es");
}

const langSwitch = document.getElementById("languageSwitch");
langSwitch.addEventListener("click", function() {
    let lang = localStorage.getItem("lang");
    if (lang === "es") {
        localStorage.setItem("lang", "en");
    } else {
        localStorage.setItem("lang", "es");
    }
    changeLanguage(localStorage.getItem("lang"));
});
