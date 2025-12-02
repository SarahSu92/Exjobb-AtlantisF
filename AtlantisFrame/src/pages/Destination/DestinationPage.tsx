import { Aruba } from '../../components/Destinations/Aruba';
import { Azorerna } from '../../components/Destinations/Azorerna';
import { Boston } from '../../components/Destinations/Boston';
import { Capri } from '../../components/Destinations/Capri';
import { Maldives } from '../../components/Destinations/Maldives';
import { Marocco } from '../../components/Destinations/Marocco';
import { Montana } from '../../components/Destinations/Montana';
import { Seychelles } from '../../components/Destinations/Seychelles';
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
            <Maldives />
          </div>
        </div>

        <h2>ASIA</h2>
        <div className="destination">
          <div>
            <Singapore />
          </div>
          <div>
            <Seychelles />
          </div>
        </div>
      </div>
    </>
  );
};
