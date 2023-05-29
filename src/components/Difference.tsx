import styled from "styled-components";

const Container = styled.div`
    color: #8b94bb;
    margin: 20px 0;
    margin-left: 10px;
    font: 500 1rem "Inter", sans-serif;

    &.fastest {
        color: #7feb7d;
    }
`;

interface DifferenceProps {
    difference: string;
    fastest: boolean;
}

function Difference({ difference, fastest }: DifferenceProps) {
    return (
        <Container className={fastest ? "fastest" : ""}>{difference}</Container>
    );
}

export default Difference;
