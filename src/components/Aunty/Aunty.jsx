import { useContext } from "react";
import Cousin from "../Cousine/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
    const  [money, setMoney]=useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty:</h2>
            <section className="flex"> 
                <Cousin name={'Sumon'}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
            </section>
            <p>money: {money}</p>
            <button onClick={ () => setMoney(money + 500)}>Add 500tk</button>
            <button onClick={ () => setMoney(money + 1000)}>Add 1000tk</button>
            <button onClick={ () => setMoney(money + 1500)}>Add 1500tk</button>
            <button onClick={ () => setMoney(money + 2000)}>Add 2000tk</button>
        </div>
    );
};

export default Aunty;