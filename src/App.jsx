import styled from "styled-components";

import SnowflakeContainer from "./Components/SnowflakeContainer";
import GlobalStyle from "./Components/GlobalStyle";

const Div = styled.div`
    margin: 0 auto;
    width: 500px;
`;

export default function App() {
    return (
        <Div>
            <GlobalStyle />
            <SnowflakeContainer />
        </Div>
    );
}