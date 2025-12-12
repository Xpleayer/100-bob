import React, {useState} from 'react';

const CallToAction = () => {
    const [formData, setState] = useState({
        name: '',
        phone: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create WhatsApp message with form data
        const message = `Hallo! Ik wil graag een proefles plannen.%0A%0ANaam: ${formData.name}%0ATelefoonnummer: ${formData.phone}`;

        // WhatsApp number (without + or spaces)
        const whatsappNumber = '31623024801';

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

        // Reset form after submission
        setState({name: '', phone: ''});
    };

    return (
        <section className="cta-proefles">
            <div className="cta-proefles__container">
                <div className="cta-proefles__content">
                    <h2 className="cta-proefles__title">Klaar om achter het stuur te kruipen?</h2>
                    <div className="cta-proefles__text">
                        <p>
                            Plan een gratis en vrijblijvende proefles en ontdek hoe Rijschool 100%
                            BOB jou kan helpen om een zelfverzekerde bestuurder te worden.
                        </p>
                    </div>
                    <div className="cta-proefles__reminder">
                        <span className="check-icon">✓</span>
                        <p>
                            Geen verplichtingen
                        </p>
                    </div>
                </div>

                <div className="cta-proefles__form-container">
                    <div className="cta-proefles__form">
                        <div className="cta-proefles__form-content">
                            <div className="cta-proefles__form-header">Plan je proefles</div>
                            <form onSubmit={handleSubmit} className="cta-proefles__form-fields">
                                <div className="cta-proefles__form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="cta-proefles__form-input"
                                        placeholder="Naam"
                                        required
                                    />
                                </div>
                                <div className="cta-proefles__form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="cta-proefles__form-input"
                                        placeholder="Telefoonnummer"
                                        required
                                    />
                                </div>
                                <button type="submit" className="cta-proefles__form-button">Verstuur aanvraag</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
