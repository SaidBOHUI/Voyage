import { useState } from "react";
import CardVoyage from "./cardVoyage";
import informationVoyage from "./infosVoyage";
import styled from "styled-components";

// console.log(informationVoyage);

// let listCardVoyage = listVoyage.map((information) => {
//   return <CardVoyage information={information} />;
// });

const DashboardVoyage = () => {
  const [listVoyage, setListVoyage] = useState(informationVoyage);

  let handleOnChangeInput = (event) => {
    let inputVal = event.target.value.toLowerCase();
    // console.log(inputVal);
    let voyage = informationVoyage.filter((information) => {
      console.log(information);
      return information.lieu.toLowerCase().includes(inputVal);
    });
    console.log(voyage, "list change handle");
    setListVoyage(voyage);
  };
  return(
    <>
      <Search><input type="text" onChange={handleOnChangeInput} placeholder="Cherchez votre destination"></input></Search>
      <div className="dashboardVoyage">
        {/* {console.log(listVoyage)} */}
        {listVoyage.map((information, index) => (
          <CardVoyage key={index} information={information} />
        ))}
      </div>
    </>
  );
};

const Search = styled.div`
text-align: center;
  input{
    height: 3rem;
    border: #051474 solid 2px;
    border-radius: 40px;
    width: 20vw;
    padding:0 1rem
  }
padding: 2rem 0;


`

export default DashboardVoyage;
