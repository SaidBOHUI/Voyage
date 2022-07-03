import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <nav>
        <Bar className="lienNav">
          <h3>
            <Link to="/" title="redirection sur la home">
              Home
            </Link>
          </h3>
            <Liens>
          {/* Normalement ce sont des liens mais on ne peut pas mettre de liens vide dans Netlify */}
              <Lien>
                {/* <Link to="/" > */}
                <p>Sign In</p>
                {/* </Link> */}
              </Lien>
              <Lien>
                {/* <Link to="/" > */}
                  <p>Sign Up</p>
                {/* </Link> */}
              </Lien>
              <Lien>
                {/* <Link to="/" > */}
                  <p>Devenir Hôte</p>
                {/* </Link> */}
              </Lien>
            </Liens>
        </Bar>
      </nav>
    </header>
  );
};

const Liens = styled.div`
display: flex;
justify-content: space-between;

margin: 0 2rem;
`
const Lien = styled.div`
margin : 0 2rem;
font-weight: bold;
  p{
    color:white;
    cursor: pointer;
    &:hover{
    color:#EFB85B;
    transition: 1s;
    }
  }
`

const Bar = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
  div{
    margin: 0 2rem;
  }
`
export default Header;
