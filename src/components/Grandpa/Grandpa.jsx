import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const [money, setMoney] =useState(0)
  const asset = "diamond ring";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p> Net Money: {money}</p>
      <MoneyContext.Provider value={[money,setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1.create a context and export it//jekono component  a props pathanor jonno
 * 2.Add provider for the context with a value,value could be anything
 * 3.use context to access value in the context API
 * 3.
 *
 */
