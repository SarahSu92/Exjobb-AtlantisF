import { Aruba } from "../../components/Destinations/Aruba";
import { Azorerna } from "../../components/Destinations/Azorerna";
import { Boston } from "../../components/Destinations/Boston";
import { Capri } from "../../components/Destinations/Capri";
import { Marocco } from "../../components/Destinations/Marocco";
import { Montana } from "../../components/Destinations/Montana";
import { Singapore } from "../../components/Destinations/Singapore";
import { Vancover } from "../../components/Destinations/Vancover";
import './Destination.scss';


export const DestinationPage = () => {
    return(
        <>
        <div className="destination">
            <div>
            <Azorerna />
        </div>
        <div>
            <Aruba />
        </div>
        <div>
            <Boston />
        </div>
        <div>
            <Capri />
        </div>
        <div>
             <Marocco />
        </div>
        <div>
            <Montana />
        </div>
        <div>
             <Singapore />
        </div>
        <div>
            <Vancover />
        </div>
        </div>
        </>
    );
};