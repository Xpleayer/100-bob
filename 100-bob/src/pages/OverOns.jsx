import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import AboutHero from '../sections/AboutHero';
import Mission from '../sections/Mission';
import Story from '../sections/Story';
import Team from '../sections/Team';
import WorkArea from '../sections/WorkArea';
import AboutCTA from '../sections/AboutCTA';

const OverOns = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="over-ons-page">
            <Header/>
            <main className="main">
                <section className="breadcrumb">
                    <div className="breadcrumb__container">
                        <Link to="/">Home</Link>
                        <span className="breadcrumb__separator">›</span>
                        <span>Over Ons</span>
                    </div>
                </section>
                <AboutHero/>
                <Mission/>
                <Story/>
                <Team/>
                <WorkArea/>
                <AboutCTA/>
            </main>
            <Footer/>
        </div>
    );
};

export default OverOns;

