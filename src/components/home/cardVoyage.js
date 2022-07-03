import styled from 'styled-components';
import pic from '../../images/paysage_test.jpeg'

const CardVoyage = (props) => {
    
  let information = props.information;
  return (
    <>
        <Carte>
          <Img src={pic} width={500} alt="i" />
          <div>
              <p>lieu : {information.lieu}</p>
              <p>type : {information.type}</p>
              <p>tarif : {information.tarif}</p>
              <p>note : {information.note}</p>
          </div>
        </Carte>
    </>
  )}

        const Carte = styled.div`
          border: 2px solid black;
          text-align: center;
          /* padding: 1% 2%; */
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          -ms-border-radius: 10px;
          -o-border-radius: 10px;
          border-radius: 10px;
          margin: 25px;
        `
        const Img = styled.img`
        width : 100%`

export default CardVoyage;
