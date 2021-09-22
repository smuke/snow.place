import styled from "styled-components";


const Div = styled.div``;

const Button = styled.button`
    color: #778096;
    font: 1rem "Inter", sans-serif;
    background: #10131D;
    border: 1px solid #2F3648;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    text-align: left;
    cursor: pointer;
    transition: .25s ease;
    :hover {
        color: white;
        background: #141824;
    }
`;

export default function AddSnowflakeItem() {
    function handleClick(e) {
        e.preventDefault();
    }

    return (
        <Div>
            <form>
                <Button onClick={handleClick}>+ Add</Button>
            </form>
        </Div>
    );
}