import { useState } from "react";
import CardVoyage from "./cardVoyage";

let informationVoyage = [
  {
    lieu: "Paris, France",
    type: "Professionel",
    tarif: 20,
    rating: 3.6,
  },
  {
    lieu: "Paris, France",
    type: "Professionel",
    tarif: 254,
    rating: 4.2,
  },
  {
    lieu: "Paris, France",
    type: "Professionel",
    tarif: 354,
    rating: 4.6,
  },
  {
    lieu: "Paris, France",
    type: "Professionel",
    tarif: 204,
    rating: 3.6,
  },
  {
    lieu: "Paris, France",
    type: "Professionel",
    tarif: 20,
    rating: 3.6,
  },
  {
    lieu: "Paris, France",
    type: "Professionel",
    tarif: 254,
    rating: 4.2,
  },
  {
    lieu: "Paris, France",
    type: "Professionel",
    tarif: 354,
    rating: 4.6,
  },
  {
    lieu: "Paris, France",
    type: "Professionel",
    tarif: 204,
    rating: 3.6,
  },
];

const DashboardVoyage = () => {
  const [listVoyage, setListVoyage] = useState(informationVoyage);

  let handleOnChangeInput = (event) => {
    console.log(event.target.value);
    setListVoyage(listVoyage);
  };
  return (
    <>
      <input type="text" onChange={handleOnChangeInput}></input>
      <div className="dashboardVoyage">
        {informationVoyage.map((information) => {
          return <CardVoyage information={information} />;
        })}
      </div>
    </>
  );
};

export default DashboardVoyage;
