import React from "react";
import styled from "styled-components";

const LineQuestion = (question, response) => {
    return(
        <Line>
            <Item>
                <h3>{question}</h3>
                <p>{response}</p>
            </Item>
            <Item>
                <h3>{question}</h3>
                <p>{response}</p>
            </Item>
            <Item>
                <h3>{question}</h3>
                <p>{response}</p>
            </Item>
        </Line>
    )
}

const Line = styled.div`
`

const Item = styled.div`
`

export default LineQuestion