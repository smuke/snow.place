import styled from "styled-components";
import "./styles.css";
import SnowflakeContainer from "./components/SnowflakesContainer";
import Logo from "./components/Logo";

const Header = styled.header`
    margin-bottom: 10px;
`;

function App() {
    return (
        <>
            <Header>
                <Logo />
            </Header>
            <SnowflakeContainer />
        </>
    );
}

export default App;
