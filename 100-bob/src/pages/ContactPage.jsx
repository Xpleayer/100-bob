import React, { useState, useEffect } from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        naam: '',
        email: '',
        telefoonnummer: '',
        bericht: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            naam: '',
            email: '',
            telefoonnummer: '',
            bericht: ''
        });
    };

    return (
        <div className="contact-page-wrapper">
            <Header />
            <main className="main">
                <div className="contact-page">
                    {/* Main Contact Section */}
                    <section className="contact-page__main">
                        <div className="contact-page__container">
                            {/* Left Column - Contact Form */}
                            <div className="contact-page__form-wrapper">
                                <div className="contact-page__form-card">
                                    <h2 className="contact-page__form-title">Stuur ons een bericht</h2>
                                    <form onSubmit={handleSubmit} className="contact-page__form">
                                        <div className="contact-page__form-group">
                                            <label htmlFor="naam" className="contact-page__form-label">Naam</label>
                                            <input
                                                type="text"
                                                id="naam"
                                                name="naam"
                                                value={formData.naam}
                                                onChange={handleInputChange}
                                                className="contact-page__form-input"
                                                placeholder="Uw naam"
                                                required
                                            />
                                        </div>

                                        <div className="contact-page__form-group">
                                            <label htmlFor="email" className="contact-page__form-label">E-mail</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="contact-page__form-input"
                                                placeholder="uw.email@voorbeeld.nl"
                                                required
                                            />
                                        </div>

                                        <div className="contact-page__form-group">
                                            <label htmlFor="telefoonnummer" className="contact-page__form-label">Telefoonnummer</label>
                                            <input
                                                type="tel"
                                                id="telefoonnummer"
                                                name="telefoonnummer"
                                                value={formData.telefoonnummer}
                                                onChange={handleInputChange}
                                                className="contact-page__form-input"
                                                placeholder="+31 6 1234 5678"
                                                required
                                            />
                                        </div>

                                        <div className="contact-page__form-group">
                                            <label htmlFor="bericht" className="contact-page__form-label">Bericht</label>
                                            <textarea
                                                id="bericht"
                                                name="bericht"
                                                value={formData.bericht}
                                                onChange={handleInputChange}
                                                className="contact-page__form-textarea"
                                                placeholder="Typ hier uw bericht..."
                                                rows="6"
                                                required
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="contact-page__form-button">
                                            Verstuur
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Right Column - Contact Info */}
                            <div className="contact-page__info-wrapper">
                                <div className="contact-page__info-card">
                                    <h3 className="contact-page__info-title">Contact informatie</h3>
                                    
                                    <div className="contact-page__info-items">
                                        <div className="contact-page__info-item">
                                            <div className="contact-page__info-icon">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.4375 0.960842C6.1367 0.234279 5.3437 -0.15244 4.5859 0.0545917L1.1484 0.992092C0.4687 1.17959 -0.004 1.79678 -0.004 2.4999C-0.004 12.164 7.832 19.9999 17.496 19.9999C18.199 19.9999 18.816 19.5272 19.004 18.8476L19.941 15.4101C20.148 14.6522 19.762 13.8593 19.035 13.5585L15.285 11.996C14.648 11.7304 13.910 11.914 13.477 12.4491L11.898 14.3749C9.148 13.0741 6.922 10.8476 5.621 8.09756L7.547 6.52334C8.082 6.08584 8.266 5.35147 8.000 4.71475L6.438 0.964748V0.960842Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <div className="contact-page__info-content">
                                                <span className="contact-page__info-label">Telefoon</span>
                                                <span className="contact-page__info-value">+31 6 2302 4801</span>
                                            </div>
                                        </div>

                                        <div className="contact-page__info-item">
                                            <div className="contact-page__info-icon">
                                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <div className="contact-page__info-content">
                                                <span className="contact-page__info-label">E-mail</span>
                                                <span className="contact-page__info-value">info@100procentbob.nl</span>
                                            </div>
                                        </div>

                                        <div className="contact-page__info-item">
                                            <div className="contact-page__info-icon">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18 10C18 12.1549 17.144 14.2215 15.620 15.7452C14.096 17.269 12.030 18.125 9.875 18.125C7.720 18.125 5.654 17.269 4.130 15.7452C2.606 14.2215 1.750 12.1549 1.750 10C1.750 7.84512 2.606 5.77849 4.130 4.25476C5.654 2.73102 7.720 1.875 9.875 1.875C12.030 1.875 14.096 2.73102 15.620 4.25476C17.144 5.77849 18 7.84512 18 10ZM-0.125 10C-0.125 12.6522 0.929 15.1957 2.804 17.0711C4.679 18.9464 7.223 20 9.875 20C12.527 20 15.071 18.9464 16.946 17.0711C18.821 15.1957 19.875 12.6522 19.875 10C19.875 7.34784 18.821 4.8043 16.946 2.92893C15.071 1.05357 12.527 0 9.875 0C7.223 0 4.679 1.05357 2.804 2.92893C0.929 4.8043 -0.125 7.34784 -0.125 10ZM8.938 4.6875V10C8.938 10.3125 9.094 10.6055 9.355 10.7812L13.105 13.2812C13.535 13.5703 14.117 13.4531 14.406 13.0195C14.695 12.5859 14.578 12.0078 14.145 11.7188L10.813 9.5V4.6875C10.813 4.16797 10.395 3.75 9.875 3.75C9.355 3.75 8.938 4.16797 8.938 4.6875Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <div className="contact-page__info-content">
                                                <span className="contact-page__info-label">Openingstijden</span>
                                                <div className="contact-page__info-hours">
                                                    <span>Ma-Vr: 9:00 - 18:00</span>
                                                    <span>Za: 10:00 - 15:00</span>
                                                    <span>Zo: Gesloten</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="contact-page__info-item">
                                            <div className="contact-page__info-icon contact-page__info-icon--whatsapp">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.855 3.54656C15.891 1.57781 13.275 0.495 10.496 0.495C4.758 0.495 0.089 5.16375 0.089 10.9013C0.089 12.7341 0.567 14.5247 1.477 16.1044L0 21.495L5.517 20.0466C7.036 20.8763 8.747 21.3122 10.491 21.3122H10.496C16.228 21.3122 21 16.6434 21 10.9059C21 8.12625 19.819 5.51531 17.855 3.54656ZM10.496 19.5591C8.939 19.5591 7.416 19.1419 6.089 18.3544L5.775 18.1669L2.503 19.0247L3.375 15.8325L3.169 15.5044C2.302 14.1263 1.847 12.5372 1.847 10.9013C1.847 6.13406 5.728 2.25281 10.500 2.25281C12.811 2.25281 14.981 3.15281 16.613 4.78875C18.244 6.42469 19.247 8.595 19.242 10.9059C19.242 15.6778 15.264 19.5591 10.496 19.5591ZM15.239 13.0809C14.981 12.9497 13.702 12.3216 13.463 12.2372C13.224 12.1481 13.050 12.1059 12.877 12.3684C12.703 12.6309 12.206 13.2122 12.052 13.3903C11.902 13.5638 11.747 13.5872 11.489 13.4559C9.961 12.6919 8.958 12.0919 7.950 10.3622C7.683 9.90281 8.217 9.93562 8.714 8.94187C8.798 8.76844 8.756 8.61844 8.690 8.48719C8.625 8.35594 8.105 7.07625 7.889 6.55594C7.678 6.04969 7.463 6.12 7.303 6.11063C7.153 6.10125 6.980 6.10125 6.806 6.10125C6.633 6.10125 6.352 6.16687 6.113 6.42469C5.874 6.68719 5.203 7.31531 5.203 8.595C5.203 9.87469 6.136 11.1122 6.263 11.2856C6.394 11.4591 8.095 14.0841 10.706 15.2138C12.356 15.9263 13.003 15.9872 13.828 15.8653C14.330 15.7903 15.366 15.2372 15.581 14.6278C15.797 14.0184 15.797 13.4981 15.731 13.3903C15.670 13.2731 15.497 13.2075 15.239 13.0809Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <div className="contact-page__info-content">
                                                <span className="contact-page__info-label">WhatsApp</span>
                                                <a href="https://wa.me/31623024801" className="contact-page__info-value contact-page__info-link">
                                                    Stuur een bericht
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-page__social">
                                        <h4 className="contact-page__social-title">Volg ons</h4>
                                        <div className="contact-page__social-icons">
                                            <a href="#" className="contact-page__social-icon" aria-label="Facebook">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="currentColor"/>
                                                </svg>
                                            </a>
                                            <a href="#" className="contact-page__social-icon" aria-label="Instagram">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.6187 2.31563 19.6219 2.625 20.2406 2.88281C21.0281 3.21094 21.6 3.60156 22.1953 4.19687C22.7906 4.79219 23.1812 5.36406 23.5094 6.15156C23.7672 6.77031 24.0766 7.77344 24.1609 9.54531C24.2172 10.8062 24.2313 11.1859 24.2313 14.3922C24.2313 17.5984 24.2172 17.9781 24.1609 19.2391C24.0766 21.0109 23.7672 22.0141 23.5094 22.6328C23.1812 23.4203 22.7906 23.9922 22.1953 24.5875C21.6 25.1828 21.0281 25.5734 20.2406 25.9016C19.6219 26.1594 18.6187 26.4688 16.8469 26.5531C15.5859 26.6094 15.2063 26.6234 12 26.6234C8.79375 26.6234 8.41406 26.6094 7.15313 26.5531C5.38125 26.4688 4.37813 26.1594 3.75938 25.9016C2.97188 25.5734 2.4 25.1828 1.80469 24.5875C1.20938 23.9922 0.81875 23.4203 0.490625 22.6328C0.232813 22.0141 -0.0765625 21.0109 -0.160937 19.2391C-0.217188 17.9781 -0.23125 17.5984 -0.23125 14.3922C-0.23125 11.1859 -0.217188 10.8062 -0.160937 9.54531C-0.0765625 7.77344 0.232813 6.77031 0.490625 6.15156C0.81875 5.36406 1.20938 4.79219 1.80469 4.19687C2.4 3.60156 2.97188 3.21094 3.75938 2.88281C4.37813 2.625 5.38125 2.31563 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.445313 4.14375 0.84375C3.35156 1.25625 2.68125 1.76719 2.01563 2.43281C1.35 3.09844 0.839062 3.76875 0.426563 4.55625C0.028125 5.31563 -0.290625 6.1875 -0.346875 7.4625C-0.403125 8.74687 -0.417188 9.15469 -0.417188 12.4125C-0.417188 15.6703 -0.403125 16.0781 -0.346875 17.3578C-0.290625 18.6328 0.028125 19.5094 0.426563 20.2687C0.839062 21.0609 1.35 21.7312 2.01563 22.3969C2.68125 23.0625 3.35156 23.5781 4.13906 23.9859C4.89844 24.3844 5.77031 24.7031 7.04531 24.7594C8.325 24.8156 8.73281 24.8297 11.9906 24.8297C15.2484 24.8297 15.6562 24.8156 16.9359 24.7594C18.2109 24.7031 19.0875 24.3844 19.8469 23.9859C20.6344 23.5781 21.3047 23.0625 21.9703 22.3969C22.6359 21.7312 23.1516 21.0609 23.5594 20.2734C23.9578 19.5141 24.2766 18.6422 24.3328 17.3672C24.3891 16.0875 24.4031 15.6797 24.4031 12.4219C24.4031 9.16406 24.3891 8.75625 24.3328 7.47656C24.2766 6.20156 23.9578 5.325 23.5594 4.56563C23.1703 3.76875 22.6594 3.09844 21.9937 2.43281C21.3281 1.76719 20.6578 1.25156 19.8703 0.84375C19.1109 0.445313 18.2391 0.126563 16.9641 0.0703125C15.6844 0.0140625 15.2766 0 12.0187 0H12Z" fill="currentColor"/>
                                                    <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="currentColor"/>
                                                    <path d="M18.4078 7.44844C19.2012 7.44844 19.8438 6.80593 19.8438 6.01251C19.8438 5.2191 19.2012 4.57658 18.4078 4.57658C17.6144 4.57658 16.9719 5.2191 16.9719 6.01251C16.9719 6.80593 17.6144 7.44844 18.4078 7.44844Z" fill="currentColor"/>
                                                </svg>
                                            </a>
                                            <a href="https://wa.me/31623024801" className="contact-page__social-icon" aria-label="WhatsApp">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.52 3.44859C18.37 1.29281 15.54 0.114 12.595 0.114C6.035 0.114 0.685 5.45625 0.685 12.008C0.685 14.1541 1.235 16.2485 2.28 18.0862L0.58 24L6.66 22.3297C8.425 23.2844 10.39 23.7891 12.589 23.7891H12.595C19.149 23.7891 24.58 18.4469 24.58 11.8953C24.58 8.95969 23.395 6.1325 20.52 3.44859ZM12.595 21.7828C10.595 21.7828 8.635 21.3016 6.905 20.3938L6.535 20.1797L3.0295 21.1109L3.9775 17.6938L3.74 17.3109C2.7355 15.5203 2.2045 13.4953 2.2045 11.4016C2.2045 6.2975 6.38 2.12031 12.601 2.12031C15.625 2.12031 18.475 3.30187 20.635 5.46703C22.795 7.63219 24.055 10.4828 24.049 13.5016C24.049 18.6109 19.815 22.7875 12.595 22.7875V21.7828ZM19.785 15.5438C19.48 15.3953 17.995 14.6672 17.715 14.5656C17.435 14.4594 17.23 14.4078 17.025 14.7172C16.82 15.0266 16.255 15.6937 16.0735 15.9016C15.897 16.1047 15.7155 16.1297 15.4105 15.9812C13.66 15.1047 12.525 14.4219 11.385 12.4344C11.075 11.9062 11.695 11.9437 12.265 10.8422C12.3595 10.6391 12.312 10.4641 12.2355 10.3156C12.159 10.1672 11.625 8.68594 11.369 8.07187C11.1185 7.47469 10.863 7.55625 10.6745 7.54687C10.497 7.5375 10.2925 7.5375 10.0875 7.5375C9.8825 7.5375 9.551 7.61437 9.271 7.91906C8.991 8.22844 8.21 8.95656 8.21 10.4375C8.21 11.9188 9.295 13.3484 9.4385 13.5516C9.587 13.75 11.613 16.9531 14.755 18.3C16.715 19.1297 17.46 19.2031 18.4 19.0453C19.0015 18.9484 20.195 18.3281 20.45 17.6406C20.7055 16.9531 20.7055 16.3672 20.629 16.2187C20.558 16.0609 20.3485 15.9859 20.0435 15.8375L19.785 15.5438Z" fill="currentColor"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Bottom Banner - Call to Action */}
                    <section className="contact-page__cta-banner">
                        <div className="contact-page__cta-container">
                            <h2 className="contact-page__cta-title">Nog vragen? Bel direct!</h2>
                            <p className="contact-page__cta-text">
                                We staan klaar om al je vragen te beantwoorden over onze rijlessen.
                            </p>
                            <a href="tel:+31623024801" className="contact-page__cta-button">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.4375 0.960842C6.1367 0.234279 5.3437 -0.15244 4.5859 0.0545917L1.1484 0.992092C0.4687 1.17959 -0.004 1.79678 -0.004 2.4999C-0.004 12.164 7.832 19.9999 17.496 19.9999C18.199 19.9999 18.816 19.5272 19.004 18.8476L19.941 15.4101C20.148 14.6522 19.762 13.8593 19.035 13.5585L15.285 11.996C14.648 11.7304 13.910 11.914 13.477 12.4491L11.898 14.3749C9.148 13.0741 6.922 10.8476 5.621 8.09756L7.547 6.52334C8.082 6.08584 8.266 5.35147 8.000 4.71475L6.438 0.964748V0.960842Z" fill="currentColor"/>
                                </svg>
                                +31 6 2302 4801
                            </a>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;

