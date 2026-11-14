// ==========================
// Mirador Santa Rosalia
// app.js
// ==========================

function applyLanguage(lang) {

    if (!translations[lang]) {
        lang = "en";
    }

    localStorage.setItem(
        "preferredLanguage",
        lang
    );

    document.documentElement.lang =
        lang;

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (
                translations[lang] &&
                translations[lang][key]
            ) {
                element.innerHTML =
                    translations[lang][key];
            }

        });

    updatePageTitle(lang);

}

function detectLanguage() {

    const storedLanguage =
        localStorage.getItem(
            "preferredLanguage"
        );

    if (storedLanguage) {
        return storedLanguage;
    }

    const browserLanguage =
        (
            navigator.language ||
            navigator.userLanguage ||
            "en"
        )
        .substring(0, 2)
        .toLowerCase();

    if (
        browserLanguage === "nl" ||
        browserLanguage === "en" ||
        browserLanguage === "de" ||
        browserLanguage === "fr"
    ) {
        return browserLanguage;
    }

    return "en";
}

function updatePageTitle(lang) {

    const titles = {

        nl:
        "Mirador Santa Rosalia | Luxe Appartement Spanje",

        en:
        "Mirador Santa Rosalia | Luxury Apartment Spain",

        de:
        "Mirador Santa Rosalia | Luxus Apartment Spanien",

        fr:
        "Mirador Santa Rosalia | Appartement de Luxe Espagne"

  

