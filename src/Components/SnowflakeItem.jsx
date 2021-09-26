import { useState } from "react";
import styled from "styled-components";

import Input from "./Input";
import Time from "./Time";
import Calculate from "../calculate";

const Div = styled.div`
    background: #10131D;
    border: 1px solid #2F3648;
    padding: 0 20px;
    margin-bottom: 10px;
    box-sizing: border-box;
    min-height: 10px;
    border-radius: 5px;
    transition: min-height .5s ease-out;
    input {
        padding: 20px 0;
        margin: 0;
        -moz-appearance: textfield;
    }
    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &.expanded {
        padding: 0 20px 20px 20px;
        min-height: 100px;
        input {
            padding: 20px 0 15px 0;
        }
    }
`;

export default function SnowflakeItem(props) {
    const [expanded, setExpanded] = useState(false);
    const [inputText, setInputText] = useState("");

    const [time, setTime] = useState({
        local: {
            timestamp: "",
            type: ""
        },
        UTC: {
            timestamp: "",
            type: ""
        }
    });

    function handleChange(e) {
        const value = e.target.value;
        setInputText(value);

        const time = Calculate(value);
        setTime(time);

        if (!expanded) {
            // If snowflake
            if (!isNaN(value) && value >= 4194304 && value.length < 22) {
                setExpanded(true);
            }
        }
        else if (expanded) {
            // If not snowflake
            if (value < 4194304 || value.length > 22) {
                setExpanded(false);
            }
            // If too long
            else if (!isNaN(value) && value.length > 21) {
                e.target.blur();
            }
        }
    }

    function handlePaste(e) {
        const value = e.clipboardData.getData('Text');
        if (isNaN(value)) {
            e.target.blur();
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <Div className={expanded && "expanded"}>
            <form onSubmit={handleSubmit}>
                <Input
                    id={props.id}
                    placeholder="Message ID"
                    onPaste={handlePaste}
                    onChange={handleChange}
                    value={inputText}
                    type="number"
                    autoComplete="off"
                />
                <Time
                    time={time.local.timestamp}
                    timezone={time.local.type}
                    display={expanded && true}
                />
                <Time
                    time={time.UTC.timestamp}
                    timezone={time.UTC.type}
                    display={expanded && true}
                />
            </form>
        </Div>
    );
}