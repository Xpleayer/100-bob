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
        // Handle form submission logic here
        console.log('Form submitted with data:', formData);
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
