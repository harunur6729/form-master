import Cousin from "../Cousine/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle:</h2>
            <section className="flex">
            <Cousin name={'Rafsan'} asset={asset}></Cousin>
            <Cousin name={'Tanvir'}></Cousin>
            </section>
            
        </div>
    );
};

export default Uncle;