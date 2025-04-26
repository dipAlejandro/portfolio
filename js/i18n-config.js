// js/i18n-config.js
const i18n = i18next.init({
    lng: 'es',
    fallbackLng: 'en',
    debug: false,
    resources: {
      es: { translation: {} },
      en: { translation: {} }
    }
  });
  
  // Cargar traducciones
  async function loadTranslations() {
    try {
      const [esResponse, enResponse] = await Promise.all([
        fetch('../i18n/es.json'),
        fetch('../i18n/en.json')
      ]);
      
      const esTranslations = await esResponse.json();
      const enTranslations = await enResponse.json();
      
      i18next.addResourceBundle('es', 'translation', esTranslations);
      i18next.addResourceBundle('en', 'translation', enTranslations);
      
      updateContent();
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  }
  
  // Actualizar contenido de la página
  function updateContent() {
    // Textos normales
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.innerHTML = i18next.t(key);
    });
  
    // Atributos
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const [key, attr] = el.getAttribute('data-i18n-attr').split('|');
      el.setAttribute(attr, i18next.t(key));
    });
  }
  
  // Cambiar idioma
  window.changeLanguage = function(lang) {
    i18next.changeLanguage(lang)
      .then(() => {
        localStorage.setItem('userLang', lang);
        updateContent();
      });
  };
  
  // Inicialización
  document.addEventListener('DOMContentLoaded', () => {
    // Cargar traducciones
    loadTranslations();
    
    // Configurar eventos de botones de idioma
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        changeLanguage(btn.getAttribute('data-lang'));
      });
    });
  });