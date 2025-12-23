import React from 'react';
import { Link } from 'react-router-dom';

// Create a reusable PackageCard component
const PackageCard = ({
                         title,
                         lessons,
                         price,
                         features,
                         variant = '',
                         isFeatured = false,
                         customClass = '',
                         link = '#'
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
                <Link to={link} className="package-card__button">Bekijk details</Link>
            </div>
        </div>
    );
};

const PackagesSection = () => {
    // Define the package data for easy customization
    const packages = [
        {
            title: "Starter",
            lessons: "15 uur",
            price: "975",
            features: [
                "15 praktijkuren",
                "Geen examen",
                "Nieuwe auto (handgeschakeld of automaat)"
            ],
            variant: "first",
            link: "/pakket/starter"
        },
        {
            title: "Standaard",
            lessons: "25 uur",
            price: "1.625",
            features: [
                "25 praktijkuren",
                "Geen examen",
                "Nieuwe auto (handgeschakeld of automaat)"
            ],
            variant: "second",
            link: "/pakket/standaard"
        },
        {
            title: "Comfort",
            lessons: "30 uur + examen",
            price: "1.950",
            features: [
                "30 praktijkuren",
                "Examen inbegrepen",
                "Nieuwe auto (handgeschakeld of automaat)",
                "Losse voorrijding"
            ],
            variant: "third",
            isFeatured: true,
            link: "/pakket/comfort"
        },
        {
            title: "Premium",
            lessons: "45 uur + examen + gratis herexamen",
            price: "2.925",
            features: [
                "45 praktijkuren",
                "Examen + gratis herexamen",
                "Nieuwe auto (handgeschakeld of automaat)"
            ],
            variant: "fourth",
            link: "/pakket/premium"
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
                            link={pkg.link}
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
