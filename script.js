/* =========================================
   SMARTPICKS — LANGUAGE SYSTEM
========================================= */

let currentLanguage = "en";

const translations = {

    en: {
        subtitle: "Your Daily Match Picks.",

        firstTitle: "First Selection",
        firstDescription: "Our main selection of the day",

        secondTitle: "Second Selection",
        secondDescription: "Another smart combination",

        thirdTitle: "Third Selection",
        thirdDescription: "A different combination",

        exactTitle: "Exact Scores",
        exactDescription: "Our predicted exact scores",

        riskyTitle: "Risky Prediction",
        riskyDescription: "Higher risk, higher potential",

        modalSubtitle: "Today's smart picks",

        emptyMessage: "Today's selections will appear here.",

        prediction: "Prediction",

        footer: "Smart selections. Better choices."
    },


    fr: {
        subtitle: "Vos sélections de matchs du jour.",

        firstTitle: "Première sélection",
        firstDescription: "Notre sélection principale du jour",

        secondTitle: "Deuxième sélection",
        secondDescription: "Une autre combinaison intelligente",

        thirdTitle: "Troisième sélection",
        thirdDescription: "Une combinaison différente",

        exactTitle: "Scores exacts",
        exactDescription: "Nos prédictions de scores exacts",

        riskyTitle: "Pronostic risqué",
        riskyDescription: "Plus de risque, plus de potentiel",

        modalSubtitle: "Les sélections intelligentes du jour",

        emptyMessage: "Les sélections du jour apparaîtront ici.",

        prediction: "Prédiction",

        footer: "Des sélections intelligentes. De meilleurs choix."
    },


    ar: {
        subtitle: "اختياراتك اليومية للمباريات",

        firstTitle: "الاختيار الأول",
        firstDescription: "اختيارنا الرئيسي لهذا اليوم",

        secondTitle: "الاختيار الثاني",
        secondDescription: "تركيبة ذكية أخرى",

        thirdTitle: "الاختيار الثالث",
        thirdDescription: "تركيبة مختلفة",

        exactTitle: "النتائج الدقيقة",
        exactDescription: "توقعاتنا للنتائج الدقيقة",

        riskyTitle: "توقع محفوف بالمخاطر",
        riskyDescription: "مخاطرة أكبر، إمكانية أكبر",

        modalSubtitle: "اختيارات اليوم الذكية",

        emptyMessage: "ستظهر اختيارات اليوم هنا.",

        prediction: "التوقع",

        footer: "اختيارات ذكية. خيارات أفضل."
    }

};


/* =========================================
   DEMO MATCH DATA
   ========================================= */

const matches = {

    /* -------------------------------------
       FIRST SELECTION
    ------------------------------------- */

    first: [

        {
            equipe1: "Al Akhdood",
            equipe2: "AL Ula",
            prediction: "2"
        },

        {
            equipe1: "AL Wakrah",
            equipe2: "Al-Gharafa SC",
            prediction: "over2.5"
        },

        {
            equipe1: "FAR Rabat",
            equipe2: "Wydad Temara",
            prediction: "1"
        }

    ],


    /* -------------------------------------
       SECOND SELECTION
    ------------------------------------- */

    second: [

        {
            equipe1: "MAS Fès",
            equipe2: "Raja Casablanca",
            prediction: "BTTS"
        },

        {
            equipe1: "Al-Shamal",
            equipe2: "Al Duhail",
            prediction: "over 2.5"
        },

        {
            equipe1: "Khor Fakkan Club",
            equipe2: "Al-wasl FC",
            prediction: "over 2.5"
        }

    ],


    /* -------------------------------------
       THIRD SELECTION
    ------------------------------------- */

    third: [

        {
            equipe1: "HJK Helsinki",
            equipe2: "Vaasan Palloseura",
            prediction: "1"
        },

        {
            equipe1: "Shamrock Rovers",
            equipe2: "Drogheda United",
            prediction: "1"
        },

        {
            equipe1: "Asu Politehnica Timisoara",
            equipe2: "Csa Steaua Bucuresti",
            prediction: "1"
        }

    ],


    /* -------------------------------------
       EXACT SCORES
    ------------------------------------- */

    exact: [

        {
            equipe1: "MAS Fès",
            equipe2: "Raja Casablanca",
            prediction: "2-2"
        },

        {
            equipe1: "FAR Rabat",
            equipe2: "Wydad Temara",
            prediction: "2-1"
        },

        {
            equipe1: "Renaissance Zemamra",
            equipe2: "Hassania Union Agadir",
            prediction: "1-1"
        }

    ],


    /* -------------------------------------
       RISKY PREDICTION
    ------------------------------------- */

    risky: [

        {
            equipe1: "Team Alpha",
            equipe2: "Team Zeta",
            prediction: "2"
        },

        {
            equipe1: "Team Beta",
            equipe2: "Team Gamma",
            prediction: "X"
        },

        {
            equipe1: "Team Delta",
            equipe2: "Team Epsilon",
            prediction: "2"
        }

    ]

};


/* =========================================
   PREDICTION CATEGORIES
========================================= */

const predictionData = {

    first: {
        icon: "🎯",
        titles: {
            en: "First Selection",
            fr: "Première sélection",
            ar: "الاختيار الأول"
        }
    },

    second: {
        icon: "🔥",
        titles: {
            en: "Second Selection",
            fr: "Deuxième sélection",
            ar: "الاختيار الثاني"
        }
    },

    third: {
        icon: "⚡",
        titles: {
            en: "Third Selection",
            fr: "Troisième sélection",
            ar: "الاختيار الثالث"
        }
    },

    exact: {
        icon: "🎯",
        titles: {
            en: "Exact Scores",
            fr: "Scores exacts",
            ar: "النتائج الدقيقة"
        }
    },

    risky: {
        icon: "⚠️",
        titles: {
            en: "Risky Prediction",
            fr: "Pronostic risqué",
            ar: "توقع محفوف بالمخاطر"
        }
    }

};


/* =========================================
   CHANGE LANGUAGE
========================================= */

function changeLanguage(language) {

    currentLanguage = language;

    const t = translations[language];


    document.getElementById("subtitle").textContent =
        t.subtitle;


    document.getElementById("first-title").textContent =
        t.firstTitle;

    document.getElementById("first-description").textContent =
        t.firstDescription;


    document.getElementById("second-title").textContent =
        t.secondTitle;

    document.getElementById("second-description").textContent =
        t.secondDescription;


    document.getElementById("third-title").textContent =
        t.thirdTitle;

    document.getElementById("third-description").textContent =
        t.thirdDescription;


    document.getElementById("exact-title").textContent =
        t.exactTitle;

    document.getElementById("exact-description").textContent =
        t.exactDescription;


    document.getElementById("risky-title").textContent =
        t.riskyTitle;

    document.getElementById("risky-description").textContent =
        t.riskyDescription;


    document.getElementById("footer-text").textContent =
        t.footer;


    /* RTL */

    if (language === "ar") {

        document.body.classList.add("rtl");

    } else {

        document.body.classList.remove("rtl");

    }


    /* Active language button */

    document.querySelectorAll(".lang-btn").forEach(button => {

        button.classList.remove("active");

    });


    if (language === "en") {

        document.querySelectorAll(".lang-btn")[0]
            .classList.add("active");

    }


    if (language === "fr") {

        document.querySelectorAll(".lang-btn")[1]
            .classList.add("active");

    }


    if (language === "ar") {

        document.querySelectorAll(".lang-btn")[2]
            .classList.add("active");

    }

}


/* =========================================
   OPEN PREDICTION
========================================= */

function openPrediction(type) {

    const data = predictionData[type];

    if (!data) return;


    document.getElementById("modal-icon").textContent =
        data.icon;


    document.getElementById("modal-title").textContent =
        data.titles[currentLanguage];


    document.getElementById("modal-subtitle").textContent =
        translations[currentLanguage].modalSubtitle;


    const container =
        document.getElementById("matches-container");


    const selectedMatches =
        matches[type];


    /* =====================================
       EMPTY
    ===================================== */

    if (!selectedMatches || selectedMatches.length === 0) {

        container.innerHTML = `

            <div class="empty-message">

                <span>⚽</span>

                <p>
                    ${translations[currentLanguage].emptyMessage}
                </p>

            </div>

        `;

    }


    /* =====================================
       DISPLAY MATCHES
    ===================================== */

    else {

        container.innerHTML = selectedMatches.map(match => {

            return `

                <div class="match-card">

                    <div class="teams">

                        <div class="team">
                            ${match.equipe1}
                        </div>

                        <div class="vs">
                            VS
                        </div>

                        <div class="team">
                            ${match.equipe2}
                        </div>

                    </div>


                    <div class="prediction">

                        <span>
                            ${translations[currentLanguage].prediction}
                        </span>

                        <strong>
                            ${match.prediction}
                        </strong>

                    </div>

                </div>

            `;

        }).join("");

    }


    document.getElementById("predictionModal")
        .classList.add("show");


    document.body.style.overflow = "hidden";

}


/* =========================================
   CLOSE PREDICTION
========================================= */

function closePrediction() {

    document.getElementById("predictionModal")
        .classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================
   CLOSE WHEN CLICKING OUTSIDE
========================================= */

document.getElementById("predictionModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closePrediction();

        }

    });


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePrediction();

    }

});
/* =========================================
   DARK MODE
========================================= */

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "smartPicksTheme",
        isDark ? "dark" : "light"
    );

    updateThemeButton();
}


/* =========================================
   THEME BUTTON
========================================= */

function updateThemeButton() {

    const button =
        document.getElementById("theme-toggle");

    if (!button) return;

    if (document.body.classList.contains("dark-mode")) {

        button.textContent = "☀️";

    } else {

        button.textContent = "🌙";

    }
}


/* =========================================
   LOAD SAVED THEME
========================================= */

const savedTheme =
    localStorage.getItem("smartPicksTheme");

if (savedTheme === "light") {

    document.body.classList.remove("dark-mode");

} else {

    document.body.classList.add("dark-mode");

}

updateThemeButton();
/* =========================================
   DATE & TIME
========================================= */

function updateDateTime() {

    const now = new Date();

    const dateElement =
        document.getElementById("current-date");

    const timeElement =
        document.getElementById("current-time");

    if (!dateElement || !timeElement) return;


    /* DATE */

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    let dateLocale = "en-US";

    if (currentLanguage === "fr") {
        dateLocale = "fr-FR";
    }

    if (currentLanguage === "ar") {
        dateLocale = "ar-MA";
    }

    dateElement.textContent =
        now.toLocaleDateString(
            dateLocale,
            dateOptions
        );


    /* TIME */

    timeElement.textContent =
        now.toLocaleTimeString(
            dateLocale,
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            }
        );
}


/* UPDATE EVERY SECOND */

updateDateTime();

setInterval(updateDateTime, 1000);