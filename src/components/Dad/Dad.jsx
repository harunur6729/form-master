import Brother from "../Brother/Brother";
import Myselfl from "../Myself/Myselfl";
import Sister from "../Sister/Sister";

const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myselfl asset={asset}></Myselfl>
                <Brother asset={asset}></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;