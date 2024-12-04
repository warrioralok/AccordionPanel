/* eslint-disable no-unused-vars */
import { useState } from "react";
import faq from "../API/faq.json";
import { useEffect } from "react";
import FAQ from "./FAQ";
const Accordian = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId ] = useState(0)
  useEffect(() => {
    setData(faq);
  }, []);

  const togglePanel = (id) =>{
    setActiveId((prev) => (prev === id) ? false : id)
  }

  return (
    <>
      <ul className="section-accordion">
        {data.map((currElem) => {
          return (
            <FAQ key={currElem.id} data={currElem} isActive={activeId === currElem.id} onToggle={() => togglePanel(currElem.id)}/>
          );
        })}
      </ul>
    </>
  );
};

export default Accordian;
