const translations = {
  en: {
    welcome: "Welcome to MultiLingua",
    choose_lang: "Choose your language:",
    donate: "Support the project",
    motivazione: "This app was created with love to help anyone learn languages freely...",
    game_hangman: "Hangman Game",
    game_crossword: "Crossword",
    game_rebus: "Rebus",
    game_anagram: "Anagrams"
  },
  it: {
    // italiano già scritto nell'HTML
  },
  // Altre lingue da aggiungere qui
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
