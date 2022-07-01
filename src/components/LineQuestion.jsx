import React from "react";
import styled from "styled-components";

const LineQuestion = (props) => {
    return(
        <Item>
            <h2>{props.question}</h2>
            <p>{props.response}</p>
        </Item>
    )
}

const Item = styled.div`

    h2{
        margin-bottom: 1rem;
        text-align: center;
    }
    p{
        margin-bottom: 3rem;
    }
`


export default LineQuestion