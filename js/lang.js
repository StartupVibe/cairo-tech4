let translations = {};
let currentLang = localStorage.getItem('preferredlang') || 'en';
console.log(currentLang)
async function loadTranslations() {
  try {
    const res = await fetch(`lang/${currentLang}.json`);
    translations = await res.json();
    applyTranslations();
  } catch (err) {
    console.error("Error loading translation file:", err);
  }
}

function applyTranslations() {
   for (const key in translations) {
    const element = document.getElementById(key);
    if (element) {
      let text = translations[key];
      if (key === 'footer-copyright') {
        text = text.replace('${year}', new Date().getFullYear());
      }
      element.textContent = text;
    }
  }

  // Change direction by language
  if (currentLang === "ar") {
    document.body.dir = "rtl";
    document.body.style.textAlign = "right";
    document.body.classList = "ar";
  } else {
    document.body.dir = "ltr";
    document.body.style.textAlign = "left";
    document.body.classList = "en";
  }

  // Update button text
  const langBtn = document.getElementById("lang_btn");
  if (langBtn) langBtn.textContent = currentLang === "en" ? "AR" : "EN";
}

document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang_btn");

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ar" : "en";
      localStorage.setItem('preferredlang', currentLang);
      loadTranslations();
    });
  }

  // Download the first translation file
  loadTranslations();
});
