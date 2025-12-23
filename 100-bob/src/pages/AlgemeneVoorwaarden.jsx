import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const AlgemeneVoorwaarden = () => {
  return (
    <div className="algemene-voorwaarden-page">
      <Header />
      <main className="main">
        <section className="breadcrumb">
          <div className="breadcrumb__container">
            <Link to="/">Home</Link>
            <span className="breadcrumb__separator">›</span>
            <span>Algemene Voorwaarden</span>
          </div>
        </section>

        <section className="page-hero">
          <div className="page-hero__container">
            <h1 className="page-hero__title">Algemene Voorwaarden</h1>
            <p className="page-hero__subtitle">Rijschool 100% BOB</p>
          </div>
        </section>

        <section className="terms-content">
          <div className="terms-content__container">
            <div className="terms-content__section">
              <h2>1. Algemeen</h2>
              <p>Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen Rijschool 100% BOB en de cursist.</p>
            </div>

            <div className="terms-content__section">
              <h2>2. Tarieven en Betalingen</h2>
              <h3>2.1 Lestarieven</h3>
              <ul>
                <li>Proefles: € 65 per 60 minuten</li>
                <li>Losse les: € 70 per 60 minuten</li>
                <li>Pakketlessen: € 65 per 60 minuten</li>
                <li>Praktijkexamen: € 299 (inclusief gebruik lesauto en 60 minuten voorrijles)</li>
              </ul>

              <h3>2.2 Pakketten</h3>
              <ul>
                <li>Starter pakket: 15 uur - € 975</li>
                <li>Standaard pakket: 25 uur - € 1.625</li>
                <li>Comfort pakket: 30 uur + examen - € 1.950</li>
                <li>Premium pakket: 45 uur + examen + gratis herexamen - € 2.925</li>
              </ul>

              <h3>2.3 Betalingsvoorwaarden</h3>
              <p>Pakketten dienen vooraf te worden betaald. Losse lessen kunnen contant of per pin na afloop van de les worden betaald.</p>
            </div>

            <div className="terms-content__section">
              <h2>3. Uitschrijving en Uitschrijfkosten</h2>
              <p>Bij uitschrijving zijn de volgende kosten van toepassing:</p>
              <ul>
                <li>Bij uitschrijving binnen 1 maand na aanvang: 25% van de pakketprijs</li>
                <li>Bij uitschrijving na 1 maand: 50% van de pakketprijs</li>
                <li>Bij uitschrijving na 3 maanden: volledige pakketprijs</li>
              </ul>
              <p>Reeds gegeven lessen worden afgetrokken tegen het losse lestarief van € 70 per uur.</p>
            </div>

            <div className="terms-content__section">
              <h2>4. Annulering en Verzetten van Lessen</h2>
              <h3>4.1 Annulering door cursist</h3>
              <p>Lessen kunnen tot 24 uur van tevoren kosteloos worden geannuleerd of verzet. Bij annulering binnen 24 uur wordt de les in rekening gebracht.</p>

              <h3>4.2 Annulering door rijschool</h3>
              <p>De rijschool behoudt zich het recht voor lessen te annuleren bij ziekte van de instructeur of andere onvoorziene omstandigheden. In dit geval wordt de les kosteloos verzet.</p>
            </div>

            <div className="terms-content__section">
              <h2>5. Lesauto en Materiaal</h2>
              <h3>5.1 Standaard lesauto</h3>
              <p>Alle lessen worden gegeven in moderne, goed onderhouden lesauto's met dubbele bediening. We bieden zowel handgeschakelde als automatische lesauto's aan.</p>

              <h3>5.2 Keuze tussen handgeschakeld en automaat</h3>
              <p>Je kunt kiezen tussen een handgeschakelde of automatische auto. Deze keuze dient bij aanmelding te worden aangegeven en kan van invloed zijn op het type rijbewijs dat je kunt behalen.</p>

              <h3>5.3 Schade</h3>
              <p>De cursist is aansprakelijk voor schade aan de lesauto die is ontstaan door grove nalatigheid of opzet. Het eigen risico bedraagt € 500.</p>
            </div>

            <div className="terms-content__section">
              <h2>6. Examens</h2>
              <h3>6.1 Praktijkexamen</h3>
              <p>Het praktijkexamen wordt afgenomen door het CBR. De kosten voor het examen zijn inbegrepen in de pakketten Comfort en Premium.</p>

              <h3>6.2 Herexamen</h3>
              <p>In het Premium pakket is één gratis herexamen inbegrepen. Voor andere pakketten gelden de normale examenprijzen.</p>

              <h3>6.3 Examengereedheid</h3>
              <p>De instructeur bepaalt wanneer de cursist examengereed is. De rijschool is niet aansprakelijk voor het niet slagen van het examen.</p>
            </div>

            <div className="terms-content__section">
              <h2>7. Aansprakelijkheid</h2>
              <p>Rijschool 100% BOB is niet aansprakelijk voor schade die de cursist lijdt tijdens of als gevolg van de rijlessen, behoudens in geval van opzet of grove nalatigheid van de rijschool.</p>
            </div>

            <div className="terms-content__section">
              <h2>8. Privacy</h2>
              <p>Rijschool 100% BOB gaat zorgvuldig om met persoonlijke gegevens en houdt zich aan de AVG. Persoonsgegevens worden alleen gebruikt voor het uitvoeren van de overeenkomst en worden niet aan derden verstrekt, behoudens wettelijke verplichtingen.</p>
            </div>

            <div className="terms-content__section">
              <h2>9. Geschillen</h2>
              <p>Op alle overeenkomsten tussen Rijschool 100% BOB en de cursist is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.</p>
            </div>

            <div className="terms-content__section">
              <h2>10. Wijzigingen</h2>
              <p>Rijschool 100% BOB behoudt zich het recht voor deze algemene voorwaarden te wijzigen. Wijzigingen worden tijdig aan cursisten gecommuniceerd.</p>
            </div>

            <div className="terms-content__contact">
              <h2>Contact</h2>
              <p>Voor vragen over deze algemene voorwaarden kunt u contact opnemen met:</p>
              <p>
                <strong>Rijschool 100% BOB</strong><br />
                Telefoon: <a href="tel:+31623024801">+31 6 2302 4801</a><br />
                Email: <a href="mailto:info@rijschoolbob.nl">info@rijschoolbob.nl</a>
              </p>
              <p className="terms-content__date">
                Laatst bijgewerkt: December 2025
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AlgemeneVoorwaarden;

