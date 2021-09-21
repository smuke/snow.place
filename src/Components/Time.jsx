import styled from "styled-components";

const Paragraph = styled.p`
    font: 1rem "Inter", sans-serif;
    color: #ABC4FF;
    margin: 0;
    line-height: 1.5;
`;

const Timezone = styled.span`
    font: 1rem "Inter", sans-serif;
    color: #778096;
    margin-left: 5px;
`;

export default function Time(props) {
    return (
        <Paragraph style={{ display: props.display ? "block" : "none" }}>
            {props.time}
            <Timezone>{props.timezone}</Timezone>
        </Paragraph>
    );
}