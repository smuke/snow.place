import { useState, SyntheticEvent } from "react";
import styled from "styled-components";

import Difference from "./Difference";
import Time from "./Time";
import SnowflakeInput from "./SnowflakeInput";

import formatter from "../utils/formatter";

const Container = styled.section`
    background: #1e2028;
    width: 400px;
    margin-bottom: 7.5px;
    padding: 0 20px;
    border: 1px solid #2e313c;
    border-radius: 5px;
    position: relative;
    transition: 0.1s;
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
        transition: 0.15s ease;
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
    // Responsiveness
    @media screen and (max-width: 470px) {
        width: 300px;
    }
    @media screen and (max-width: 350px) {
        width: 250px;
    }
    @media screen and (max-width: 325px) {
        width: 225px;
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;

interface SnowflakeItemProps {
    id: number;
    snowflake: string;
    difference: string;
    fastest: boolean;
    updateSnowflake: (id: number, snowflake: string) => void;
}

function SnowflakeItem({
    id,
    snowflake,
    difference,
    fastest,
    updateSnowflake,
}: SnowflakeItemProps) {
    const [inputValue, setInputValue] = useState("");
    const [expanded, setExpanded] = useState(false);

    function handleChange(e: SyntheticEvent<HTMLInputElement>) {
        e.preventDefault();

        const targetValue: string = e.currentTarget.value;

        // Only allow numbers or empty input
        if (targetValue.match(/^([0-9])+$/) || targetValue === "") {
            setInputValue(targetValue);

            // Show output if input is longer than 5 characters
            if (targetValue.length > 5) {
                setExpanded(true);
            } else {
                setExpanded(false);
            }

            updateSnowflake(id, targetValue);
        }
    }

    const Formatter = new formatter(inputValue);

    return (
        <Container className={expanded ? "expanded" : ""}>
            <Top>
                <SnowflakeInput
                    snowflake={snowflake}
                    handleChange={handleChange}
                />
                <Difference difference={difference} fastest={fastest} />
            </Top>
            <output>
                <Time
                    time={Formatter.local()}
                    timezone={Formatter.localTimeZone()}
                />
                <Time time={Formatter.utc()} timezone="UTC" />
            </output>
        </Container>
    );
}

export default SnowflakeItem;
