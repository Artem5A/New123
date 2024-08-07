document.addEventListener("DOMContentLoaded", () => {
    initializeLanguage();
  });
  
  const translations = {
    en: {
        headerText: "Text",
        numberSelectorText: "AMOUNT OF CUBES",
        languageButton: "Русский",
        starButton: "Start"
    },
    ru: {
        headerText: "Текст",
        numberSelectorText: "КОЛ-ВО КВАДРАТОВ",
        languageButton: "English",
        starButton: "Старт"
    }
  };
  
  let currentLanguage = 'en';
  
  function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    setLanguage(currentLanguage);
    executeHeaderTextAnimation();
  }
  
  function setLanguage(language) {
    document.getElementById('header-text').innerText = translations[language].headerText;
    document.getElementById('number-selector-text').innerText = translations[language].numberSelectorText;
    document.getElementById('language-button').innerText = translations[language].languageButton;
    document.getElementById('star-button').innerText = translations[language].starButton;
    localStorage.setItem('language', language);
  }
  
  function initializeLanguage() {
    currentLanguage = localStorage.getItem('language') || 'en';
    setLanguage(currentLanguage);
    executeHeaderTextAnimation();
  }