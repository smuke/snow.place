import styled from "styled-components";

import SnowflakeItem from "./SnowflakeItem";
import AddSnowflakeItem from "./AddSnowflakeItem";

const Div = styled.div`
    margin-top: 200px;
`;

export default function SnowflakeContainer() {
    return (
        <Div>
            <SnowflakeItem />
            <SnowflakeItem />
            <AddSnowflakeItem />
        </Div>
    );
}