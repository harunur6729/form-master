import { useContext } from "react";
import {  MoneyContext } from "../Grandpa/Grandpa";

const Money = () => {
    const [money,setMoney] = useContext(MoneyContext);
    return (
        <div>
            <p>Money: {money}</p>
        </div>
    );
};

export default Money;