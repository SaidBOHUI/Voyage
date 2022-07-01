import { useState } from "react";

const CardVoyage = (props) => {
  const [information, setInformation] = useState(props.information);
  console.log(information,"single")
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
