import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

import SelectMoviePage from "./SelectMoviePage";
import SelectTimePage from "./SelectTimePage";
import SelectSeatPage from "./SelectSeatPage";
import ScriptFinalPage from "./ScriptFinalPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function App() {

    const [dados, setDados] = useState(false);

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

                    <Route path={"/assentos/:idSessao"} element={<SelectSeatPage obj={setDados}/>} />

                    <Route path={"/sucesso"} element={<ScriptFinalPage dados={dados}/>} />
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
    background-color: black;
    height: 67px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    font-weight: 400;
    position: fixed;
    top:0;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.35);
    h1{
        color: #E8833A;
    }
    a{
        text-decoration: none;
    }
`