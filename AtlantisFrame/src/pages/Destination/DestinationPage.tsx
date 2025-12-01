import { Aruba } from '../../components/Destinations/Aruba';
import { Azorerna } from '../../components/Destinations/Azorerna';
import { Boston } from '../../components/Destinations/Boston';
import { Capri } from '../../components/Destinations/Capri';
import { Marocco } from '../../components/Destinations/Marocco';
import { Montana } from '../../components/Destinations/Montana';
import { Singapore } from '../../components/Destinations/Singapore';
import { Vancover } from '../../components/Destinations/Vancover';
import './Destination.scss';

export const DestinationPage = () => {
  return (
    <>
      <div>
        <h1>All Destinations</h1>
        <h2>EUROPE</h2>
        <div className="destination">
          <div>
            <Azorerna />
          </div>
          <div>
            <Capri />
          </div>
        </div>

        <h2>NORTH AMERICA</h2>
        <div className="destination">
          <div>
            <Aruba />
          </div>
          <div>
            <Boston />
          </div>
          <div>
            <Montana />
          </div>
          <div>
            <Vancover />
          </div>
        </div>

        <h2>AFRICA</h2>
        <div className="destination">
          <div>
            <Marocco />
          </div>
        <div>
            <Marocco />
          </div>
        </div>

        <h2>ASIA</h2>
        <div className="destination">
          <div>
            <Singapore />
          </div>
          <div>
            <Singapore />
          </div>
        </div>
      </div>
    </>
  );
};
