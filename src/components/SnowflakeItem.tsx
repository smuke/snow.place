import { useState, SyntheticEvent, FocusEvent } from "react";
import styled from "styled-components";

import Time from "./Time";

const Container = styled.section`
    background: #1e2028;
    width: 400px;
    margin: 10px 0;
    padding: 0 20px;
    border: 1px solid #2e313c;
    border-radius: 5px;
    position: relative;
    transition: 0.1s;
    input {
        background: none;
        color: #8b94bb;
        padding: 20px 0;
        margin: 0;
        width: 100%;
        border: none;
        outline: none;
        font: 500 1rem "Inter", sans-serif;
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
        transition: 0.25s ease;
    }
    &:focus-within {
        &:before {
            background: #8b94bb;
            transform: translateX(2px);
        }
    }
    &.expanded {
        padding: 0 20px 20px 20px;
        min-height: 100px;
        input {
            padding: 20px 0;
        }
    }
    output {
        display: none;
    }
    &.expanded output {
        display: block;
    }
    .comparison {
        display: none;
    }
    &.expanded .comparison {
        display: block;
    }
`;

const Top = styled.div`
    display: flex;
`;

function SnowflakeItem() {
    const [snowflake, setSnowflake] = useState("");
    const [expanded, setExpanded] = useState(false);

    function handleChange(e: SyntheticEvent<HTMLInputElement>) {
        e.preventDefault();

        const targetValue: string = e.currentTarget.value;

        // Only allow numbers or empty input
        if (targetValue.match(/^([0-9])+$/) || targetValue === "") {
            setSnowflake(targetValue);

            // Show output if input is longer than 5 characters
            if (targetValue.length > 5) {
                setExpanded(true);
            } else {
                setExpanded(false);
            }
        }
    }

    // Select all "text" when input focused for easier pasting
    function handleFocus(e: FocusEvent<HTMLInputElement>) {
        e.currentTarget.select();
    }

    return (
        <Container className={expanded ? "expanded" : ""}>
            <Top>
                <input
                    type="text"
                    placeholder="Message ID"
                    autoComplete="off"
                    value={snowflake}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
                <p className="comparison">-1293</p>
            </Top>
            <output>
                <Time time="5/26/2021 7:58:20" timezone="PST" />
                <Time time="5/26/2021 10:58:20" timezone="EST" />
            </output>
        </Container>
    );
}

export default SnowflakeItem;
