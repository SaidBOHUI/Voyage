import { useEffect, useState } from "react";

const CardVoyage = (props) => {
    
  let information = props.information;
  return (
    <>
      <div className="cardVoyage">
        <h3>{information.lieu}</h3>
        <p>{information.type}</p>
        <p>Prix : {information.tarif}</p>
        <p>Note : {information.rating}</p>
      </div>
    </>
  );
};

export default CardVoyage;
