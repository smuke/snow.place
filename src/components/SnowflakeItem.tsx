import styled from "styled-components";

const Container = styled.div`
    background: #1e2028;
    width: 400px;
    padding: 20px;
    border: 1px solid #2e313c;
    border-radius: 5px;
    position: relative;

    input {
        background: none;
        color: #BEC1CE;
        padding: 0;
        margin: 0;
        width: 100%;
        border: none;
        outline: none;
        font: 500 1rem "Inter", sans-serif;
    }

    &:before {
        content: "";
        display: inline-block;
        background: none;
        width: 3px;
        height: 30px;
        border-radius: 10px;
        position: absolute;
        top: 15px;
        left: -2px;
        transform: translateX(0);
        transition: .25s ease;
    }

    &:focus-within {
        &:before {
            background: #8B94BB;
            transform: translateX(2px);
        }
    }

    &.expanded {
        padding: 5px 20px;
        min-height: 100px;
        input {
            padding: 20px 0;
        }
    }
`;

function SnowflakeItem() {
    return (
        <Container className="">
            <input
                type="number"
                placeholder="Message ID"
                autoComplete="off"
            />
        </Container>
    )
}

export default SnowflakeItem;