import React from 'react';

// Create a reusable PackageCard component
const PackageCard = ({
                         title,
                         lessons,
                         price,
                         features,
                         variant = '',
                         isFeatured = false,
                         customClass = ''
                     }) => {
    const cardClasses = `package-card ${variant} ${isFeatured ? 'package-card--featured' : ''} ${customClass}`.trim();

    return (
        <div className={cardClasses}>
            {isFeatured && <div className="package-card__badge">Populair</div>}
            <div className="package-card__head">
                <h3 className="package-card__title">{title}</h3>
                <p className="package-card__lessons">{lessons}</p>
            </div>
            <div className="package-card__content">
                <div className="package-card__price">€ {price}</div>
                <ul className="package-card__features">
                    {features.map((feature, index) => (
                        <li key={index} className="package-card__feature">✓ {feature}</li>
                    ))}
                </ul>
                <button className="package-card__button">Bekijk details</button>
            </div>
        </div>
    );
};

const PackagesSection = () => {
    // Define the package data for easy customization
    const packages = [
        {
            title: "Starter",
            lessons: "10 lessen",
            price: "825",
            features: [
                "10 praktijklessen",
                "Geen examen",
                "Nieuwe auto",
                "Flexibel plannen"
            ],
            variant: "first"
        },
        {
            title: "Standaard",
            lessons: "15 lessen",
            price: "1.237",
            features: [
                "15 praktijklessen",
                "Geen examen",
                "Nieuwe auto",
                "Flexibel plannen"
            ],
            variant: "second"
        },
        {
            title: "Comfort",
            lessons: "20 lessen + examen",
            price: "1.650",
            features: [
                "20 praktijklessen",
                "Examen inbegrepen",
                "Nieuwe auto",
                "Losse voorrĳding"
            ],
            variant: "third",
            isFeatured: true
        },
        {
            title: "Premium",
            lessons: "25 lessen + examen + herexamen",
            price: "2.475",
            features: [
                "25 praktijklessen",
                "Examen + herexamen",
                "Nieuwe auto",
                "Voorrĳding inbegrepen"
            ],
            variant: "fourth"
        }
    ];

    return (
        <section className="packages-section">
            <div className="packages-section__container">
                <h2 className="packages-section__title">Onze pakketten</h2>
                <div className="packages-section__grid">
                    {packages.map((pkg, index) => (
                        <PackageCard
                            key={index}
                            title={pkg.title}
                            lessons={pkg.lessons}
                            price={pkg.price}
                            features={pkg.features}
                            variant={pkg.variant}
                            isFeatured={pkg.isFeatured}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackagesSection;
