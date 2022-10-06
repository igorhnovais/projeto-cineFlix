import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { Link } from "react-router-dom";

import SelectMoviePage from "./SelectMoviePage";
import SelectTimePage from "./SelectTimePage";
import SelectSeatPage from "./SelectSeatPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />

            <Body>
                <Header>
                    <Link to="/">
                        <h1> CINEFLEX </h1>
                    </Link>
                </Header>

                <Routes>
                    <Route path={"/"} element={<SelectMoviePage />} />

                    <Route path={"/sessoes/:idFilme"} element={<SelectTimePage />} />

                    <Route path={"/assentos/:idSessao"} element={<SelectSeatPage />} />
                </Routes>
            </Body>
        </BrowserRouter>
    )
}

const Body = styled.div`
    font-family: roboto;
    color: #293845;
`

const Header = styled.header`
    background-color: rgb(195, 208, 217);
    height: 67px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    font-weight: 400;
    h1{
        color: #E8833A;
    }
    a{
        text-decoration: none;
    }
`