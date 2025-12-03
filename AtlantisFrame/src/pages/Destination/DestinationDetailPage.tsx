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

          {/* SIDEBAR */}
          <aside className="sidebar">
            <div className="sidebar-box">
              <h3>Quick facts</h3>
              <p>
                <strong>Country:</strong> {destination.country}
              </p>
              <p>
                <strong>Religion:</strong> {destination.religion}
              </p>
              <p>
                <strong>Currency:</strong> {destination.currency}
              </p>
              <p>
                <strong>Region:</strong> {destination.region}
              </p>
              <p>
                <strong>Activities:</strong> {destination.activities.join(', ')}
              </p>
              <p>
                <strong>Climate:</strong> {destination.climate}
              </p>

              <h3>Language</h3>
              {destination.language &&
                (typeof destination.language === 'string' ? (
                  <p>{destination.language}</p>
                ) : (
                  <ul className="language-list">
                    <li>
                      <strong>Main:</strong> {destination.language.main}
                    </li>
                    {destination.language.regional && (
                      <li>
                        <strong>Regional:</strong>{' '}
                        {destination.language.regional}
                      </li>
                    )}
                    {destination.language.commonPhrases?.length > 0 && (
                      <li>
                        <strong>Common Phrases:</strong>
                        <ul>
                          {destination.language.commonPhrases.map((item, i) => (
                            <li key={i}>
                              {item.phrase} → {item.translation}
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </ul>
                ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};
