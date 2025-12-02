
import { Link } from 'react-router';
import { destinations } from '../../models/Destinationsid';
import './Destination.scss';

export const DestinationPage = () => {
   // Gruppera destinations per region
  const regions = ["EUROPE", "NORTH AMERICA", "AFRICA", "ASIA"];

  return (
    <div>
      <h1>All Destinations</h1>

      {regions.map(region => {
        const regionDestinations = destinations.filter(d => d.region === region);

        return (
          <div key={region}>
            <h2>{region}</h2>
            <div className="destination">
              {regionDestinations.map(dest => (
                <div key={dest.id} className="destination-card">
                  <Link to={`/destination/${dest.id}`}>
                    <h3>{dest.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
