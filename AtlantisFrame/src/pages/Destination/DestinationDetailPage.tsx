import { useParams } from 'react-router';
import './DestinationDetail.scss';
import { Destinations } from '../../Destinations/DestinationIndex';

export const DestinationDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Find destination by id
  const destination = Destinations.find((d) => d.id === id);

  if (!destination) return <p>Destination not found.</p>;

  return (
    <>
      <div className="destination-detail">
        <div className="top">
          <h1>{destination.name} Travel Guide</h1>
          <p className="sub">
            {destination.country} · {destination.region}
          </p>
        </div>

        <div className="hero">
          {destination.image && (
            <img src={destination.image} alt={destination.name} />
          )}
        </div>

        <div className="layout">
          {/* MAIN CONTENT */}
          <div className="content">
            <section className="box">
              <h2>About {destination.name}</h2>
              <p>{destination.longDescription}</p>
            </section>

            <section className="quick-facts box">
              <h2>Quick Facts</h2>

              <div className="facts-grid">
                <p className="fact">
                  <span>Country:</span> {destination.country}
                </p>
                <p className="fact">
                  <span>Religion:</span> {destination.religion}
                </p>
                <p className="fact">
                  <span>Currency:</span> {destination.currency}
                </p>
                <p className="fact">
                  <span>Region:</span> {destination.region}
                </p>
                <p className="fact">
                  <span>Climate:</span> {destination.climate}
                </p>
                <p className="fact">
                  <span>Language:</span> {destination.language}                 
                </p>
              </div>
            </section>

            <section className="box">
              <h2>Best Time to Travel</h2>
              <p>{destination.bestTimeToTravel}</p>
            </section>

            <section className="box">
              <h2>Tips</h2>
              <ul>
                {destination.tips.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </section>

            <section className="box">
              <h2>Hotels</h2>
              <ul>
                {destination.hotels.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </section>

            <section className="box">
              <h2>Main Attractions</h2>
              <ul>
                {destination.attractions.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </section>

            <section className="box">
              <h2>Budget</h2>
              <p>{destination.budget}</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
