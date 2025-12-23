import React from 'react';

const PackageComparison = () => {
  const packages = [
    {
      name: 'Starter',
      lessons: '15',
      exam: '✗',
      reExam: '✗',
      theory: '✗',
      price: '975'
    },
    {
      name: 'Standaard',
      lessons: '25',
      exam: '✗',
      reExam: '✗',
      theory: '✗',
      price: '1.625'
    },
    {
      name: 'Comfort',
      lessons: '30',
      exam: '✓',
      reExam: '✗',
      theory: '✗',
      price: '1.950',
      popular: true
    },
    {
      name: 'Premium',
      lessons: '45',
      exam: '✓',
      reExam: '✓ (Gratis)',
      theory: '✗',
      price: '2.925'
    }
  ];

  return (
    <section className="package-comparison">
      <div className="package-comparison__container">
        <h2 className="package-comparison__title">Vergelijk pakketten</h2>
        <div className="package-comparison__table-wrapper">
          <table className="package-comparison__table">
            <thead>
              <tr>
                <th>Pakket</th>
                {packages.map((pkg, index) => (
                  <th key={index}>
                    {pkg.popular && <span className="package-comparison__badge">Populair</span>}
                    {pkg.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aantal uur</td>
                {packages.map((pkg, index) => (
                  <td key={index}>{pkg.lessons}</td>
                ))}
              </tr>
              <tr>
                <td>Praktijkexamen</td>
                {packages.map((pkg, index) => (
                  <td key={index} className={pkg.exam === '✓' ? 'included' : 'not-included'}>
                    {pkg.exam}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Herexamen</td>
                {packages.map((pkg, index) => (
                  <td key={index} className={pkg.reExam.includes('✓') ? 'included' : 'not-included'}>
                    {pkg.reExam}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Theorie</td>
                {packages.map((pkg, index) => (
                  <td key={index} className={pkg.theory === '✓' ? 'included' : 'not-included'}>
                    {pkg.theory}
                  </td>
                ))}
              </tr>
              <tr className="package-comparison__price-row">
                <td>Prijs</td>
                {packages.map((pkg, index) => (
                  <td key={index}>
                    <strong>€ {pkg.price}</strong>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="package-comparison__note">
          Alle pakketten zijn inclusief gebruik van een lesauto en flexibele planning. Keuze uit handgeschakelde of automaat.<br />
          Uitschrijfkosten zijn van toepassing volgens onze pakketten. Prijzen zijn inclusief BTW en geldig tot 31 december 2025.
        </p>
      </div>
    </section>
  );
};

export default PackageComparison;

