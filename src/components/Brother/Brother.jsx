import { useContext } from "react";
import Special from "../Special/Special";
import { MoneyContext } from "../Grandpa/Grandpa";


const Brother = ({asset}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Brother</h2>
            <p>money:{money}</p>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default Brother;