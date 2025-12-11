import React from 'react';
import {MapContainer, Marker, Polygon, Popup, TileLayer} from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const WorkArea = () => {
    // Amersfoort city boundary (approximate polygon covering the municipality)
    const amersfoortBoundary = [
        // North of Amersfoort, staying east of Soest
        [52.2100, 5.3300],
        [52.2250, 5.3600],

        // Hoevelaken area (east / north-east)
        [52.1800, 5.4700],
        [52.1650, 5.5000],

        // Leusden (south-east)
        [52.1150, 5.4700],
        [52.1000, 5.4400],

        // South of Amersfoort
        [52.0950, 5.3800],

        // South-west but *not* touching Soest
        [52.1150, 5.3300],
        [52.1350, 5.3200],

        // West side safely east of Soest
        [52.1650, 5.3100],
        [52.1900, 5.3150],
    ];

    // Amersfoort center coordinates
    const amersfoortCenter = [52.1561, 5.3878];

    return (
        <section className="work-area">
            <div className="work-area__container">
                <h2 className="work-area__title">Ons Werkgebied</h2>
                <div className="work-area__content">
                    <div className="work-area__map">
                        <MapContainer
                            center={[52.1561, 5.3878]}
                            zoom={11}
                            style={{height: '400px', width: '100%', borderRadius: '12px'}}
                            scrollWheelZoom={false}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Polygon
                                positions={amersfoortBoundary}
                                pathOptions={{
                                    color: '#00a550',
                                    fillColor: '#00a550',
                                    fillOpacity: 0.3,
                                    weight: 3
                                }}
                            />
                            <Marker position={amersfoortCenter}>
                                <Popup>
                                    <strong>Rijschool 100% BOB</strong><br/>
                                    Amersfoort
                                </Popup>
                            </Marker>
                        </MapContainer>
                        <div className="work-area__map-markers">
                            <div className="work-area__marker">📍 Hoofdlocatie</div>
                            <div className="work-area__marker">📍 Leegheid</div>
                        </div>
                    </div>
                    <div className="work-area__info">
                        <h3 className="work-area__info-title">Rijlessen in Amersfoort en Almere</h3>
                        <p className="work-area__info-text">
                            Onze rijschool is gevestigd in Amersfoort, maar we geven ook
                            rijlessen in Almere en omgeving. We kennen de lokale wegen,
                            kruispunten en examenparcours als geen ander.
                        </p>
                        <div className="work-area__locations">
                            <div className="work-area__location">
                                <div className="work-area__location-icon">📍</div>
                                <div className="work-area__location-content">
                                    <h4 className="work-area__location-title">Amersfoort</h4>
                                    <p className="work-area__location-text">
                                        Onze hoofdlocatie met lessen in het centrum, buitenwijken en omliggende dorpen.
                                    </p>
                                </div>
                            </div>
                            <div className="work-area__location">
                                <div className="work-area__location-icon">📍</div>
                                <div className="work-area__location-content">
                                    <h4 className="work-area__location-title">Leusden</h4>
                                    <p className="work-area__location-text">
                                        Daarnaast zijn wij zeker ook bereikbaar in leusden voor rijlessen.
                                    </p>
                                </div>
                            </div>
                            <div className="work-area__location">
                                <div className="work-area__location-icon">📍</div>
                                <div className="work-area__location-content">
                                    <h4 className="work-area__location-title">Hoevelaken</h4>
                                    <p className="work-area__location-text">
                                        We bieden ook rijlessen aan in Hoevelaken en de nabije omgeving.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkArea;

