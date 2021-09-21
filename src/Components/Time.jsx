import styled from "styled-components";

const Paragraph = styled.p`
    font: 1rem "Inter", sans-serif;
    color: white;
    margin: 10px 0 0 0;
`;

const Timezone = styled.span`
    font: 1rem "Inter", sans-serif;
    color: #778096;
    margin-left: 5px;
`;

export default function Time(props) {
    return (
        <Paragraph>
            {props.time}
            <Timezone>{props.timezone}</Timezone>
        </Paragraph>
    );
}