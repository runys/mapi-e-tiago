// ========================================
// TRANSLATIONS
// ========================================

const translations = {
    it: {
        welcome: "Siamo felici di condividere con voi il nostro giorno speciale. Unitevi a noi mentre celebriamo il nostro amore e iniziamo questo nuovo capitolo insieme.",
        "our-story": "La Nostra Storia",
        "story-text": "Ci piace dire che la nostra storia è iniziata perché avevamo amici in comune, ma in realtà l'inizio è un po' più interessante di così. È un mix di TEDx Napoli, tempistiche complicate, richieste di amicizia sui social media mal calcolate, un incontro casuale e il reciproco interesse nel conoscersi.<br><br>Ci piace credere che entrambi abbiamo trovato nell'altro ciò che ci mancava in noi stessi e impariamo l'uno dall'altro tanto quanto ci amiamo.<br><br>Molti aeroporti dopo, spiagge, montagne, sentieri, buon cibo e buon vino, treni, alloggi di fortuna, terme, caffè, passeggiate e molto altro, siamo più che pronti a dire al mondo che la vita è un viaggio e abbiamo trovato la persona con cui vogliamo condividerlo.",
        "wedding-details": "Dettagli del Matrimonio",
        "date-label": "Data",
        "time-label": "Orario",
        "time-tbd": "Dalle 15:30 alle 23:00",
        "location-label": "Luogo",
        "view-map": "Visualizza Mappa",
        "visit-website": "Visita il Sito",
        "dress-code": "Dress Code",
        "dress-code-text": "Un evento rilassato con un tocco di classe. Gli uomini possono indossare completi di lino grigio chiaro o beige, mentre le donne possono scegliere abiti estivi da festa.",
        "travel-info": "Informazioni di Viaggio",
        "etias-text": "<strong>Per ospiti brasiliani:</strong> Avrete bisogno di un passaporto valido. L'autorizzazione di viaggio ETIAS potrebbe essere richiesta a partire dall'ultimo trimestre del 2026.",
        "learn-more": "Maggiori Informazioni",
        "rsvp": "RSVP",
        "rsvp-text": "Per favore, confermate la vostra presenza entro il 1° Aprile 2026.",
        "rsvp-button": "Conferma la Presenza",
        "footer-text": "Non vediamo l'ora di celebrare con voi!"
    },
    en: {
        welcome: "We are delighted to share our special day with you. Join us as we celebrate our love and begin this new chapter together.",
        "our-story": "Our Story",
        "story-text": "We like to say that our story started because we had friends in common, but in reality the beginning is a bit more interesting than that. It's a mix of TEDx Napoli, complicated timing, miscalculated social media friendship requests, a random encounter and the mutual interest in meeting each other.<br><br>We like to believe that we both found in each other what we missed in ourselves and we learn from one another as much as the love between us.<br><br>Many airports later, many beaches, mountains, trails, good food and good wine, trains, hosting and being hosted, thermal baths, coffees, walks and much more, we are more than ready to tell the world that life is a journey and we found the person we want to share this long trip with.",
        "wedding-details": "Wedding Details",
        "date-label": "Date",
        "time-label": "Time",
        "time-tbd": "From 3:30 PM to 11:00 PM",
        "location-label": "Location",
        "view-map": "View Map",
        "visit-website": "Visit Website",
        "dress-code": "Dress Code",
        "dress-code-text": "A relaxed event with a touch of class. Men may dress in light gray or beige linen suits, while women can choose summer party dresses.",
        "travel-info": "Travel Information",
        "etias-text": "<strong>For Brazilian guests:</strong> You will need a valid passport. ETIAS travel authorization may be required starting in the last quarter of 2026.",
        "learn-more": "Learn More",
        "rsvp": "RSVP",
        "rsvp-text": "Please confirm your attendance by April 1st, 2026.",
        "rsvp-button": "Confirm Attendance",
        "footer-text": "We can't wait to celebrate with you!"
    },
    pt: {
        welcome: "Estamos felizes em compartilhar nosso dia especial com vocês. Junte-se a nós enquanto celebramos nosso amor e começamos este novo capítulo juntos.",
        "our-story": "Nossa História",
        "story-text": "Gostamos de dizer que nossa história começou porque tínhamos amigos em comum, mas na realidade o começo é um pouco mais interessante do que isso. É uma mistura de TEDx Napoli, timing complicado, pedidos de amizade mal calculados nas redes sociais, um encontro do destino e o interesse mútuo em se conhecer.<br><br>Gostamos de acreditar que ambos encontramos um no outro o que nos faltava em nós mesmos e aprendemos um com o outro tanto quanto o amor que temos entre nós.<br><br>Muitos aeroportos depois, muitas praias, montanhas, trilhas, boa comida e bom vinho, trens, hospedar e ser hospedado, termas, cafés, caminhadas e muito mais, estamos mais do que prontos para dizer ao mundo que a vida é uma jornada e encontramos a pessoa com quem queremos compartilhar essa longa viagem.",
        "wedding-details": "Detalhes do Casamento",
        "date-label": "Data",
        "time-label": "Horário",
        "time-tbd": "Das 15:30 às 23:00",
        "location-label": "Local",
        "view-map": "Ver Mapa",
        "visit-website": "Visitar Site",
        "dress-code": "Dress Code",
        "dress-code-text": "Um evento descontraído com um toque de classe. Os homens podem usar ternos de linho cinza claro ou bege, enquanto as mulheres podem escolher vestidos de festa de verão.",
        "travel-info": "Informações de Viagem",
        "etias-text": "<strong>Para convidados brasileiros:</strong> Você precisará de um passaporte válido. A autorização de viagem ETIAS pode ser necessária a partir do último trimestre de 2026.",
        "learn-more": "Saiba Mais",
        "rsvp": "RSVP",
        "rsvp-text": "Por favor, confirme sua presença até 1º de abril de 2026.",
        "rsvp-button": "Confirmar Presença",
        "footer-text": "Mal podemos esperar para celebrar com vocês!"
    }
};

// ========================================
// LANGUAGE SWITCHER
// ========================================

let currentLang = 'it';

function setLanguage(lang) {
    currentLang = lang;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// ========================================
// APPLE MAPKIT INITIALIZATION
// ========================================

// NOTE: You need to replace 'YOUR_MAPKIT_JS_TOKEN' with your actual token
// To get a token:
// 1. Go to https://developer.apple.com/
// 2. Sign in with your Apple ID
// 3. Go to Certificates, Identifiers & Profiles
// 4. Create a MapKit JS key
// 5. Generate a token and replace it below

function initializeMap() {
    // Check if MapKit is available
    if (typeof mapkit === 'undefined') {
        console.error('MapKit JS is not loaded');
        return;
    }

    // Initialize MapKit with your token
    mapkit.init({
        authorizationCallback: function(done) {
            done('eyJraWQiOiJRNTZMTUE5R1QyIiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJSSFJIN01WM1ZEIiwiaWF0IjoxNzYyMTE1NjcyLCJleHAiOjE3NjI3NjE1OTl9.QhliZa9YM_A5Qgx3OwC-6xk-tpJdmmr1wR-kG-S0e486EG7pBQBx2ZrTVxsB0RA5NMI1P0JMEwe9MbI8CbhTaw');
        }
    });

    // Create the map
    const map = new mapkit.Map("apple-map", {
        center: new mapkit.Coordinate(41.0447, 14.2861), // Lusciano, CE coordinates
        colorScheme: mapkit.Map.ColorSchemes.Light,
        showsMapTypeControl: false,
        showsZoomControl: true,
        showsUserLocationControl: false,
        showsPointsOfInterest: true,
        showsScale: mapkit.FeatureVisibility.Hidden
    });

    // Add annotation for the venue
    const venueCoordinate = new mapkit.Coordinate(41.0447, 14.2861);
    const venueAnnotation = new mapkit.MarkerAnnotation(venueCoordinate, {
        color: "#000000",
        title: "Fattoria Sociale Fuori di Zucca",
        subtitle: "Via Cangemi, 81030 Lusciano CE",
        glyphText: "💍"
    });

    map.addAnnotation(venueAnnotation);
    
    // Set the visible region
    const span = new mapkit.CoordinateSpan(0.02, 0.02);
    const region = new mapkit.CoordinateRegion(venueCoordinate, span);
    map.region = region;
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Apple Map
    initializeMap();
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
    } else {
        setLanguage('it'); // Default to Italian
    }
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});