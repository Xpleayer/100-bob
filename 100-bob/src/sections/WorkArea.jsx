import React from 'react';
import { MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const WorkArea = () => {
    // GeoJSON polygon converted to Leaflet [lat, lng]
    const workAreaBoundary = [
        [52.10469262830944, 5.428400515782414],
        [52.16608736075594, 5.5224985160895415],
        [52.232225058689465, 5.530886479054175],
        [52.26486253079648, 5.334899806356361],
        [52.20992977100926, 5.243287914269956],
        [52.1371393066774, 5.306892560286656],
        [52.10469262830944, 5.428400515782414],
    ];

    const locations = [
        { name: 'Amersfoort', position: [52.1561, 5.3878] },
        { name: 'Soest', position: [52.1730, 5.2910] },
        { name: 'Baarn', position: [52.2110, 5.2870] },
        { name: 'Nijkerk', position: [52.2200, 5.4860] },
        { name: 'Spakenburg', position: [52.2500, 5.3700] },
    ];

    return (
        <section className="work-area">
            <div className="work-area__container">
                <h2 className="work-area__title">Ons Werkgebied</h2>

                <div className="work-area__content">
                    <div className="work-area__map">
                        <MapContainer
                            center={[52.18, 5.38]}
                            zoom={10}
                            style={{ height: '400px', width: '100%', borderRadius: '12px' }}
                            scrollWheelZoom={false}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <Polygon
                                positions={workAreaBoundary}
                                pathOptions={{
                                    color: '#00a550',
                                    fillColor: '#00a550',
                                    fillOpacity: 0.3,
                                    weight: 3,
                                }}
                            />

                            {locations.map((loc) => (
                                <Marker key={loc.name} position={loc.position}>
                                    <Popup>
                                        <strong>Rijschool 100% BOB</strong>
                                        <br />
                                        {loc.name}
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>

                        <div className="work-area__map-markers">
                            <div className="work-area__marker">📍 Hoofdlocatie</div>
                            <div className="work-area__marker">📍 Werkgebied</div>
                        </div>
                    </div>

                    <div className="work-area__info">
                        <h3 className="work-area__info-title">
                            Rijlessen in Amersfoort en omgeving
                        </h3>

                        <p className="work-area__info-text">
                            Onze rijschool is gevestigd in Amersfoort en verzorgt rijlessen in
                            Soest, Baarn, Nijkerk, Spakenburg en omliggende plaatsen. Dankzij
                            onze kennis van lokale wegen, kruispunten en examenroutes ben je
                            optimaal voorbereid.
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
                                    <h4 className="work-area__location-title">Soest & Baarn</h4>
                                    <p className="work-area__location-text">
                                        Rijlessen in zowel Soest als Baarn, inclusief woonwijken en examenroutes.
                                    </p>
                                </div>
                            </div>

                            <div className="work-area__location">
                                <div className="work-area__location-icon">📍</div>
                                <div className="work-area__location-content">
                                    <h4 className="work-area__location-title">Nijkerk</h4>
                                    <p className="work-area__location-text">
                                        Actief in Nijkerk met lessen in en rondom het centrum en buitengebieden.
                                    </p>
                                </div>
                            </div>

                            <div className="work-area__location">
                                <div className="work-area__location-icon">📍</div>
                                <div className="work-area__location-content">
                                    <h4 className="work-area__location-title">Spakenburg</h4>
                                    <p className="work-area__location-text">
                                        Rijlessen in Spakenburg en Bunschoten voor een complete voorbereiding.
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
