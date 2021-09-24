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
            id: 1,
            value: ""
        },
        {
            id: 2,
            value: ""
        }
    ])

    return (
        <Div>
            {items.map(item => {
                return <SnowflakeItem key={item.id} />;
            })}
            <AddSnowflakeItem />
        </Div>
    );
}