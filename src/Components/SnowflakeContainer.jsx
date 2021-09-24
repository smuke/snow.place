import styled from "styled-components";

import SnowflakeItem from "./SnowflakeItem";
import AddSnowflakeItem from "./AddSnowflakeItem";
import { useState } from "react";

const Div = styled.div`
    margin-top: 200px;
`;

export default function SnowflakeContainer() {
    const [items, setItems] = useState([
        {
            value: ""
        },
        {
            value: ""
        }
    ])

    function addSnowflake() {
        setItems((prevItems) => {
            return [...prevItems, { value: "" }];
        });
    }

    return (
        <Div>
            {items.map((item, index) => {
                return <SnowflakeItem key={index} />;
            })}
            <AddSnowflakeItem onClick={addSnowflake}>+ Add</AddSnowflakeItem>
        </Div>
    );
}