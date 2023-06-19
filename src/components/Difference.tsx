import styled from "styled-components";

const Container = styled.div`
    color: #8b94bb;
    margin: 20px 0;
    font: 500 1rem "Inter", sans-serif;
    text-wrap: nowrap;
    text-align: right;

    &.fastest {
        color: #4bdc6b;
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
