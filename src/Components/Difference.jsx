import styled from "styled-components";

const Paragraph = styled.p`
    color: #778096;
    font: 1rem "Inter", sans-serif;
    text-align: right;
    letter-spacing: -.04rem;
`;

export default function Difference(props) {
    return <Paragraph style={{ color: props.fastest && "#50F08F" }}>{props.value}</Paragraph>
}