import styled from "styled-components";
import "./styles.css";
import SnowflakeContainer from "./components/SnowflakesContainer";
import Logo from "./components/Logo";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    // Responsiveness
    @media screen and (max-width: 470px) {
        flex-direction: column;
        align-items: flex-start;
        h1 {
            margin-top: 2.5px;
        }
    }
`;

const Heading = styled.h1`
    color: #8b94bb;
    margin: 0;
    padding: 0;
    font: 400 1.1rem "Inter", sans-serif;
`;

const Footer = styled.footer`
    color: #8b94bb;
    padding-top: 10px;
    font: 400 1rem "Inter", sans-serif;
`;

function App() {
    return (
        <>
            <Header>
                <Logo />
                <Heading>Compare Discord Timestamps</Heading>
            </Header>
            <SnowflakeContainer />
            <Footer>snow.place</Footer>
        </>
    );
}

export default App;
