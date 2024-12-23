import Friend from "../Friend/Friend";
import Money from "../Money/Money";
import Special from "../Special/Special";

const Cousin = ({name,asset}) => {
    return (
        <div>
            <h2> Cousin</h2>
            <p>{name}</p>
            <section>
               {asset && <Special asset={asset}></Special>}
               {name ==='Rubaiya' && <Friend></Friend>}
               {name === 'Sumon' && <Money></Money>}
            </section>
        </div>
    );
};

export default Cousin;