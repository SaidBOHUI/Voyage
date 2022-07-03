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
              <Lien>
                <Link to="/" >
                  Sign In
                </Link>
              </Lien>
              <Lien>
                <Link to="/" >
                  Sign Up
                </Link>
              </Lien>
              <Lien>
                <Link to="/" >
                  Devenir Hôte
                </Link>
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
  &:hover{
    color:green;
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
