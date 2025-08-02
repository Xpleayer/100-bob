import React from 'react';

const Tiles = () => {
    return (
        <section className="tiles">
            <div className="tiles__container">
                <h2 className="tiles__title">Waarom kiezen voor BOB?</h2>
                <div className="tiles__grid">
                    <div className="tiles__card first">
                        <div className="tiles__card-content">
                            <div className="tiles__card-icon">
                                <span className="tiles__card-icon-placeholder">📅</span>
                            </div>
                            <h3 className="tiles__card-title">Flexibel plannen</h3>
                            <p className="tiles__card-description">Jij bepaalt je eigen tempo. Lessen worden ingepland
                                wanneer het jou uitkomt.</p>
                        </div>
                    </div>
                    <div className="tiles__card second">
                        <div className="tiles__card-content">
                            <div className="tiles__card-icon">
                                <span className="tiles__card-icon-placeholder">🚗</span>
                            </div>
                            <h3 className="tiles__card-title">Nieuwe auto</h3>
                            <p className="tiles__card-description">Rijd in comfortabele, nieuwe auto's voorzien van alle
                                moderne rijhulpsystemen.</p>
                        </div>
                    </div>
                    <div className="tiles__card third">
                        <div className="tiles__card-content">
                            <div className="tiles__card-icon">
                                <span className="tiles__card-icon-placeholder">🎓</span>
                            </div>
                            <h3 className="tiles__card-title">Hoog ervaren instructeur</h3>
                            <p className="tiles__card-description">Lessen op maat afgestemd op jouw leerstijl en
                                vaardigheden voor optimaal resultaat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tiles;
