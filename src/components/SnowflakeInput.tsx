import { SyntheticEvent, FocusEvent } from "react";
import styled from "styled-components";

const Input = styled.input`
    background: none;
    color: #8b94bb;
    padding: 20px 0;
    padding-right: 10px;
    margin: 0;
    width: auto;
    border: none;
    outline: none;
    font: 500 1rem "Inter", sans-serif;
    display: flex;
    flex-grow: 1;
    // Ellipsis
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &::placeholder {
        color: #8b94bb;
        font: 500 1rem "Inter", sans-serif;
    }
    &:focus::placeholder {
        color: transparent;
    }
    &::selection {
        background: #8b94bb;
        color: #1e2028;
    }
`;

interface SnowflakeInputProps {
    snowflake: string;
    handleChange: (e: SyntheticEvent<HTMLInputElement>) => void;
}

function SnowflakeInput({ snowflake, handleChange }: SnowflakeInputProps) {
    // Select all "text" when input focused for easier pasting
    function handleFocus(e: FocusEvent<HTMLInputElement>) {
        e.currentTarget.select();
    }

    return (
        <Input
            type="text"
            placeholder="Message ID"
            autoComplete="off"
            value={snowflake}
            onChange={handleChange}
            onFocus={handleFocus}
        />
    );
}

export default SnowflakeInput;
