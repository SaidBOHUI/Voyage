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
    lieu: "Reims, France",
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

// let listCardVoyage = listVoyage.map((information) => {
//   return <CardVoyage information={information} />;
// });

const DashboardVoyage = () => {
  const [listVoyage, setListVoyage] = useState(informationVoyage);

  let handleOnChangeInput = (event) => {
    let inputVal = event.target.value;
    let voyage = informationVoyage.filter((information) => {
      return information.lieu.includes(inputVal);
    });
    console.log(voyage, "list change handle");
    setListVoyage(voyage);
  };
  return (
    <>
      <input type="text" onChange={handleOnChangeInput}></input>
      <div className="dashboardVoyage">
        {console.log(listVoyage)}
        {listVoyage.map((information, index) => (
          <CardVoyage key={index} information={information} />
        ))}
      </div>
    </>
  );
};

export default DashboardVoyage;
