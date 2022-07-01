import CardVoyage from "./cardVoyage";

let informationVoyage = [
  {
    lieu: "Paris, France",
    type: "Professionel",
    tarif: 204,
    rating: 3.6,
  },
];

const DashboardVoyage = () => {
  return (
    <>
      {informationVoyage.map((information) => {
        return <CardVoyage information={information} />;
      })}
    </>
  );
};

export default DashboardVoyage;
