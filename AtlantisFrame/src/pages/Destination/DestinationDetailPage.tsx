import { useParams } from 'react-router';
import './DestinationDetail.scss';
import { Destinations } from '../../models/Destinations';

export const DestinationDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Find destination by id
  const destination = Destinations.find((d) => d.id === id);

  if (!destination) return <p>Destination not found.</p>;

  return (
    <div className="destination-detail">
      <h1>
        {destination.name}, {destination.country}
      </h1>
      {destination.image && (
        <img src={destination.image} alt={destination.name} />
      )}

      <p>{destination.longDescription || destination.description}</p>

      <h2>Language</h2>
      <p>{destination.language}</p>

      <h3>Religion</h3>
      <p>{destination.religion}</p>

      <h3>Currency</h3>
      {destination.currency && (
        <p>
          <strong>Currency:</strong> {destination.currency}
        </p>
      )}

      {destination.payment && (
        <p>
          <strong>Payment:</strong>{' '}
          {destination.payment.cardsAccepted.join(', ')}
          {destination.payment.cashRecommended && ', cash recommended'}
        </p>
      )}

      <h3>Climate</h3>

      <p>{destination.climate}</p>

      {destination.bestTimeToTravel && (
        <p>
          <strong>Best Time to Travel:</strong> {destination.bestTimeToTravel}
        </p>
      )}

      <h3>Tips</h3>
      <p>{destination.tips}</p>

      <h3>Hotels</h3>
      <p>{destination.hotels}</p>

      <h3>Activities</h3>
      <p>{destination.attractions}</p>

      <h3>Budget</h3>
      <p>{destination.budget}</p>
    </div>
  );
};
