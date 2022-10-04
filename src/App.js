import styled from "styled-components"
import SelectMovie from "./SelectMovie";
import GlobalStyle from "./GlobalStyle"

export default function App(){

    return (
        <>
            <GlobalStyle/>

            <Body>
                <Header>
                    <h1> CINEFLEX </h1>
                </Header>

                <SelectMovie/>
            </Body>
        </>
    )
}

const Body = styled.div`
    font-family: roboto;
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
`