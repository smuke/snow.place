import styled from "styled-components";

const Paragraph = styled.p`
    font: 1rem "Inter", sans-serif;
    color: #ABC4FF;
    margin: 0;
    line-height: 1.5;
    animation: fade-in-top 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    @keyframes fade-in-top {
        0% {
            transform: translateY(-5px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
        }
    }
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