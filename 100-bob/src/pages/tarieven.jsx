import React from 'react';
import Header from '../sections/Header';
import TarievenHero from '../sections/TarievenHero';
import BasicPricing from '../sections/BasicPricing';
import PackagesSection from '../sections/Packages-section';
import PackageComparison from '../sections/PackageComparison';
import CallToAction from '../sections/CallToAction';
import FAQ from '../sections/FAQ';
import Footer from '../sections/Footer';

const Tarieven = () => {
  return (
    <div className="tarieven-page">
      <Header />
      <main className="main" id="tarieven-content">
        <section className="breadcrumb">
          <div className="breadcrumb__container">
            <a href="/">Home</a>
            <span className="breadcrumb__separator">›</span>
            <span>Tarieven</span>
          </div>
        </section>
        <TarievenHero />
        <BasicPricing />
        <PackagesSection />
        <PackageComparison />
        <CallToAction />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Tarieven;

