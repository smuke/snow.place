import { useState } from "react";
import styled from "styled-components";

import Input from "./Input";
import Time from "./Time";

const Div = styled.div`
    background: #10131D;
    border: 1px solid #2F3648;
    padding: 20px;
    margin-bottom: 10px;
    box-sizing: border-box;
    min-height: 10px;
    border-radius: 5px;
    transition: .5s ease-out;
    &.expanded {
        min-height: 100px;
        input {
            margin-bottom: 10px;
        }
    }
    .expanded {
        color: red;
    }
`;

export default function SnowflakeItem(props) {
    const [expanded, setExpanded] = useState(false);
    const [inputText, setInputText] = useState("");

    function handleChange(e) {
        const value = e.target.value;
        setInputText(value);

        if (!expanded) {
            if (value >= 1) {
                setExpanded(true);
            }
        }
        else if (expanded) {
            if (value <= 1) {
                setExpanded(false);
            }
        }
    }

    return (
        <Div className={expanded && "expanded"}>
            <form>
                <Input
                    type="text"
                    placeholder="Message ID"
                    onChange={handleChange}
                    value={inputText}
                />
                <Time
                    time="5/26/2021 7:58:20"
                    timezone="PST"
                    display={expanded && true}
                />
                <Time
                    time="5/26/2021 10:58:20"
                    timezone="UTC"
                    display={expanded && true}
                />
            </form>
        </Div>
    );
}