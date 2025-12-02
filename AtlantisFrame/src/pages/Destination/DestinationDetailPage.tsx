import { useParams } from 'react-router';
import './DestinationDetail.scss';
import { Destinations, type DestinationSummary } from '../../models/Destinations';

export const DestinationDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Fetch destinations id
  const destination: DestinationSummary | undefined = Destinations.find(d => d.id === id);

  if (!destination) return <p>Destination not found.</p>;

  return (
    <div className="destination-detail">
      <h1>{destination.name}, {destination.country}</h1>
     <img src={destination.image} alt={destination.name} />
      <p>{destination.description}</p>

      <h2>Activities</h2>
      <ul>
        {destination.activities.map(activity => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

