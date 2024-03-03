import styled from "styled-components";
import "./styles.css";
import SnowflakeContainer from "./components/SnowflakesContainer";
import Logo from "./components/Logo";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .logo {
        display: flex;
        &:hover {
            cursor: pointer;
        }
    }
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
    a {
        color: white;
        text-decoration: none;
        &:hover {
            color: #c1c8e7;
        }
        transition: .25s ease-out;
    }
`;

function App() {
    return (
        <>
            <Header>
                <div className="logo" onClick={() => window.location.reload()}>
                    <Logo />
                </div>
                <Heading>Compare Discord Timestamps</Heading>
            </Header>
            <SnowflakeContainer />
            <Footer>snow.place - <a href="https://github.com/smuke/snow.place" target="_blank">open source</a></Footer>
        </>
    );
}

export default App;
