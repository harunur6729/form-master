import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Special</h2>
            <p>1.has:{asset}</p>
            <p>2.Aslo has: {gift}</p>
            
        </div>
    );
};

export default Special;