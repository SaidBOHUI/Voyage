import styled from "styled-components"
import Card from "./Card"

const LineCard = () => {
    return(
        <div>
            <Line>
                <Card />
                <Card />
                <Card />
            </Line>
            <Line>
                <Card />
                <Card />
                <Card />
            </Line>
            <Line>
                <Card />
                <Card />
                <Card />
            </Line>
        </div>
    )
}
    const Line = styled.div`
        display: flex;
        justify-content: space-between;
    `
export default LineCard