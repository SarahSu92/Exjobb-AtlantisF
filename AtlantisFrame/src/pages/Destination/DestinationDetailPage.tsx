import { useParams } from 'react-router';
import './DestinationDetail.scss';
import { Destinations } from '../../models/Destinations/DestinationIndex';
import {
  FiGlobe,
  FiZap,
  FiDollarSign,
  FiMapPin,
  FiSun,
  FiMessageCircle,
} from 'react-icons/fi';

export const DestinationDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Find destination by id
  const destination = Destinations.find((d) => d.id === id);

  if (!destination) return <p>Destination not found.</p>;

  return (
    <>
      <div className="destination-detail">
        <div className="top">
          <img
            src={`${import.meta.env.BASE_URL}${destination.heroimage}`}
            alt={destination.name}
          />
          <h1>{destination.name} Travel Guide</h1>
          <p className="sub">
            {destination.country} · {destination.region}
          </p>
        </div>

        <div className="content">
          <section className="box">
            <h2>About {destination.name}</h2>
            <p>{destination.longDescription}</p>
            <h4>Tips</h4>
            <p>{destination.tips}</p>
          </section>

          <h2>Quick Facts</h2>

          <div className="facts-grid">
            <div className="fact-item">
              <div className="icon">
                <FiGlobe size={24} />
              </div>
              <div>
                <h4>Country</h4>
                <p>{destination.country}</p>
              </div>
            </div>

            <div className="fact-item">
              <div className="icon">
                <FiZap size={24} />
              </div>
              <div>
                <h4>Religion</h4>
                <p>{destination.religion}</p>
              </div>
            </div>

            <div className="fact-item">
              <div className="icon">
                <FiDollarSign size={24} />
              </div>
              <div>
                <h4>Currency</h4>
                <p>{destination.currency}</p>
              </div>
            </div>

            <div className="fact-item">
              <div className="icon">
                <FiMapPin size={24} />
              </div>
              <div>
                <h4>Region</h4>
                <p>{destination.region}</p>
              </div>
            </div>

            <div className="fact-item">
              <div className="icon">
                <FiSun size={24} />
              </div>
              <div>
                <h4>Climate</h4>
                <p>{destination.climate}</p>
              </div>
            </div>

            <div className="fact-item">
              <div className="icon">
                <FiMessageCircle size={24} />
              </div>
              <div>
                <h4>Language</h4>
                <p>{destination.language}</p>
              </div>
            </div>
          </div>

          <section className="box">
            <h2>Best Time to Travel</h2>
            <p>{destination.bestTimeToTravel}</p>
          </section>

          <section className="box">
            <img src="" alt="" className="hotel-image" />
            <h2>Hotels</h2>
            <div className="hotels-grid">
              {destination.hotels.map((h, i) => (
                <div key={i} className="hotel-item">
                  {h}
                </div>
              ))}
            </div>
          </section>

          <section className="box attractions-section">
            <div className="attractions-layout">
              {/* Textkolumn */}
              <div className="attractions-text">
                <h2>Main Attractions</h2>
                <ul>
                  {destination.attractions.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>

              {/* Bildkolumn */}
              <div className="attractions-image">
                <img
                  src={`${import.meta.env.BASE_URL}${destination.image1}`}
                  alt={destination.name}
                />
              </div>
            </div>
          </section>

          <section className="box">
            <h2>Budget</h2>
            <p>{destination.budget}</p>
            <img
                  src={`${import.meta.env.BASE_URL}${destination.image2}`}
                  alt={destination.name}
                />
          </section>
        </div>
      </div>
    </>
  );
};
