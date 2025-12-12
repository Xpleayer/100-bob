export const packagesData = {
  starter: {
    name: 'Starter',
    lessons: '10 uur',
    price: '650',
    pricePerLesson: '65',
    savings: '50',
    subtitle: 'De perfecte start voor jouw rij-avontuur!',
    variant: '',
    description: {
      highlight: 'Ideaal om weg te oefenen zonder druk. Dit pakket is perfect voor beginners die rustig willen kennismaken met autorijden en hun basisvaardigheden willen ontwikkelen zonder direct een volledig rijbewijs traject te beginnen.',
      full: 'Dit leert de basisbeginselen van het autorijden: wegrijden, schakelen, sturen, remmen en eenvoudige verkeersituaties. Na deze 10 uur heb je een goed beeld of het voor jou is en kun je een vervolgpakket bestellen om eventueel examen te gaan doen. Automatische auto beschikbaar op aanvraag.'
    },
    features: [
      { icon: '🚗', title: '10 praktijkuren', description: '10 rijlessen van 60 minuten op de basis van jouw individuele behoeften en leertempo.' },
      { icon: '✕', title: 'Geen examen', description: 'Dit pakket bevat geen praktijkexamen. Je kunt dit pakket later opwaarderen.' },
      { icon: '🚙', title: 'Nieuwe auto', description: 'Leer in een comfortabele, nieuwe auto voorzien van de modernste rijhulpsystemen. Automatische auto beschikbaar op aanvraag.' },
      { icon: '📅', title: 'Flexibel plannen', description: 'Plan je lessen wanneer het jou uitkomt, binnen de beschikbare uren.' }
    ],
    whatYouLearn: [
      'Basisvaardigheden: wegrijden, schakelen, sturen en remmen',
      'Omgaan met eenvoudige verkeersituaties',
      'Basis verkeersregels en voorrangsregels',
      'Rijden in rustige woonwijken en op rustige wegen',
      'Eenvoudige bijzondere verrichtingen (parkeren, keren)'
    ],
    otherPackages: [
      { name: 'Standaard', lessons: '15 uur', price: '975', variant: 'standaard', features: ['✓ 15 praktijkuren', '✕ Geen examen', '✓ Nieuwe auto'], link: '/pakket/standaard' },
      { name: 'Comfort', lessons: '20 uur', price: '1.300', variant: 'comfort', features: ['✓ 20 praktijkuren', '✓ Examen inbegrepen', '✓ Nieuwe auto'], link: '/pakket/comfort' },
      { name: 'Premium', lessons: '30 uur', price: '1.950', variant: 'premium', features: ['✓ 30 praktijkuren', '✓ Examen + Gratis herexamen', '✓ Nieuwe auto'], link: '/pakket/premium' }
    ]
  },
  standaard: {
    name: 'Standaard',
    lessons: '15 uur',
    price: '975',
    pricePerLesson: '65',
    savings: '75',
    subtitle: 'Meer lessen voor meer zelfvertrouwen!',
    variant: 'standaard',
    description: {
      highlight: 'Perfect voor cursisten die meer oefentijd willen zonder de druk van een examen. Dit pakket biedt voldoende lessen om je rijvaardigheden verder te ontwikkelen en je voor te bereiden op complexere verkeerssituaties.',
      full: 'Met 15 uur krijg je de mogelijkheid om je rijvaardigheden te verfijnen en meer ervaring op te doen in verschillende verkeerssituaties. Dit pakket is ideaal als opstap naar een examenpakket. Automatische auto beschikbaar op aanvraag.'
    },
    features: [
      { icon: '🚗', title: '15 praktijkuren', description: '15 rijlessen van 60 minuten om jouw rijvaardigheden verder te ontwikkelen.' },
      { icon: '✕', title: 'Geen examen', description: 'Dit pakket bevat geen praktijkexamen. Je kunt dit later toevoegen.' },
      { icon: '🚙', title: 'Nieuwe auto', description: 'Leer in een comfortabele, nieuwe auto voorzien van de modernste rijhulpsystemen. Automatische auto beschikbaar op aanvraag.' },
      { icon: '📅', title: 'Flexibel plannen', description: 'Plan je lessen wanneer het jou uitkomt, binnen de beschikbare uren.' }
    ],
    whatYouLearn: [
      'Gevorderde rijvaardigheden en verkeersinzicht',
      'Rijden in drukker verkeer en op snelwegen',
      'Complexere verkeersituaties en voorrangsregels',
      'Alle bijzondere verrichtingen (inparkeren, file, etc.)',
      'Zelfstandig rijden in verschillende omgevingen'
    ],
    otherPackages: [
      { name: 'Starter', lessons: '10 uur', price: '650', variant: 'starter', features: ['✓ 10 praktijkuren', '✕ Geen examen', '✓ Nieuwe auto'], link: '/pakket/starter' },
      { name: 'Comfort', lessons: '20 uur', price: '1.300', variant: 'comfort', features: ['✓ 20 praktijkuren', '✓ Examen inbegrepen', '✓ Nieuwe auto'], link: '/pakket/comfort' },
      { name: 'Premium', lessons: '30 uur', price: '1.950', variant: 'premium', features: ['✓ 30 praktijkuren', '✓ Examen + Gratis herexamen', '✓ Nieuwe auto'], link: '/pakket/premium' }
    ]
  },
  comfort: {
    name: 'Comfort',
    lessons: '20 uur + examen',
    price: '1.300',
    pricePerLesson: '65',
    savings: '100',
    subtitle: 'Ons populairste pakket - alles wat je nodig hebt!',
    variant: 'comfort',
    description: {
      highlight: 'Dit is ons meest gekozen pakket! Het biedt de perfecte balans tussen voldoende oefentijd en het behalen van je rijbewijs. Met 20 uur ben je goed voorbereid voor je eerste examenpoging.',
      full: 'Het Comfort pakket is ideaal voor de meeste cursisten. Je krijgt voldoende tijd om alle rijvaardigheden onder de knie te krijgen, ervaring op te doen in verschillende verkeerssituaties, en je voor te bereiden op het praktijkexamen. Statistisch gezien slaagt 75% van onze cursisten in één keer met dit pakket. Automatische auto beschikbaar op aanvraag.'
    },
    features: [
      { icon: '🚗', title: '20 praktijkuren', description: '20 rijlessen van 60 minuten voor een grondige voorbereiding op je rijexamen.' },
      { icon: '✓', title: 'Examen inbegrepen', description: 'Het praktijkexamen is inbegrepen, inclusief gebruik van de lesauto.' },
      { icon: '🚙', title: 'Nieuwe auto', description: 'Leer in een comfortabele, nieuwe auto voorzien van de modernste rijhulpsystemen. Automatische auto beschikbaar op aanvraag.' },
      { icon: '📍', title: 'Losse voorrijding', description: 'Een voorrijding om je voor te bereiden op de examenroute en laatste tips te krijgen.' }
    ],
    whatYouLearn: [
      'Alle rijvaardigheden voor het behalen van je rijbewijs',
      'Zelfstandig rijden in alle verkeerssituaties',
      'Snelwegrijden en complexe verkeerssituaties',
      'Alle bijzondere verrichtingen en noodsituaties',
      'Examentraining en -voorbereiding',
      'Defensief en anticiperend rijden'
    ],
    otherPackages: [
      { name: 'Starter', lessons: '10 uur', price: '650', variant: 'starter', features: ['✓ 10 praktijkuren', '✕ Geen examen', '✓ Nieuwe auto'], link: '/pakket/starter' },
      { name: 'Standaard', lessons: '15 uur', price: '975', variant: 'standaard', features: ['✓ 15 praktijkuren', '✕ Geen examen', '✓ Nieuwe auto'], link: '/pakket/standaard' },
      { name: 'Premium', lessons: '30 uur', price: '1.950', variant: 'premium', features: ['✓ 30 praktijkuren', '✓ Examen + Gratis herexamen', '✓ Nieuwe auto'], link: '/pakket/premium' }
    ]
  },
  premium: {
    name: 'Premium',
    lessons: '30 uur + examen + gratis herexamen',
    price: '1.950',
    pricePerLesson: '65',
    savings: '150',
    subtitle: 'Maximale zekerheid en de beste voorbereiding!',
    variant: 'premium',
    description: {
      highlight: 'Het ultieme all-in pakket voor maximale zekerheid! Met 30 uur krijg je ruim de tijd om een ervaren en zelfverzekerde bestuurder te worden. Het herexamen is GRATIS inbegrepen, dus je bent verzekerd van twee kansen zonder extra kosten.',
      full: 'Dit pakket is perfect voor cursisten die maximale zekerheid willen of wat meer tijd nodig hebben om zich comfortabel te voelen achter het stuur. Met 30 uur en twee examenpogingen inbegrepen (herexamen GRATIS), heb je alle rust en tijd om je rijbewijs te halen zonder financiële zorgen. Automatische auto beschikbaar op aanvraag.'
    },
    features: [
      { icon: '🚗', title: '30 praktijkuren', description: '30 rijlessen van 60 minuten voor de meest uitgebreide voorbereiding.' },
      { icon: '✓✓', title: 'Examen + Gratis herexamen', description: 'Zowel je eerste als een eventueel tweede examen zijn inbegrepen - herexamen is GRATIS!' },
      { icon: '🚙', title: 'Nieuwe auto', description: 'Leer in een comfortabele, nieuwe auto voorzien van de modernste rijhulpsystemen. Automatische auto beschikbaar op aanvraag.' },
      { icon: '🎯', title: 'Voorrijding inbegrepen', description: 'Meerdere voorrijdingen om je optimaal voor te bereiden op het examen.' }
    ],
    whatYouLearn: [
      'Complete rijvaardigheden op expert niveau',
      'Uitgebreide examentraining en -voorbereiding',
      'Geavanceerde rijdtechnieken en defensief rijden',
      'Alle verkeerssituaties onder alle omstandigheden',
      'Meerdere proefexamens en voorrijdingen',
      'Eco-driving en brandstofbesparing',
      'Extra aandacht voor persoonlijke leerpunten'
    ],
    otherPackages: [
      { name: 'Starter', lessons: '10 uur', price: '650', variant: 'starter', features: ['✓ 10 praktijkuren', '✕ Geen examen', '✓ Nieuwe auto'], link: '/pakket/starter' },
      { name: 'Standaard', lessons: '15 uur', price: '975', variant: 'standaard', features: ['✓ 15 praktijkuren', '✕ Geen examen', '✓ Nieuwe auto'], link: '/pakket/standaard' },
      { name: 'Comfort', lessons: '20 uur', price: '1.300', variant: 'comfort', features: ['✓ 20 praktijkuren', '✓ Examen inbegrepen', '✓ Nieuwe auto'], link: '/pakket/comfort' }
    ]
  }
};

