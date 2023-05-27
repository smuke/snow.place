import styled from "styled-components";

const Container = styled.div`
    color: #7CA9FF;
    font: 1.2rem "Inter", sans-serif;
    span {
        color: white;
    }
`;

function Time(props: { time: string, timezone: string }) {
    return (
        <Container>
            <time>{props.time} <span>{props.timezone}</span></time>
        </Container>
    )
}

export default Time;