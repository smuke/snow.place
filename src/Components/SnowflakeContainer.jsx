import styled from "styled-components";

import SnowflakeItem from "./SnowflakeItem";

const Div = styled.div`
    margin-top: 200px;
`;

export default function SnowflakeContainer() {
    return (
        <Div>
            <SnowflakeItem />
            <SnowflakeItem />
        </Div>
    );
}