import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ScriptFinalPage({dados}) {

    if (!dados) {
        return (
            <Divloading>
                <ImgLoading src="http://www.sitiosaocarlos.com.br/imgsite/loading.gif" />
            </Divloading>
        )
    }

    let cpf = dados.cpf;
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
    function( regex, argumento1, argumento2, argumento3, argumento4 ) {
           return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
   })

    return (
        <>
            <Main>
                <DivSucesso>
                    <h1> Pedido feito com sucesso!</h1>
                </DivSucesso>
                <DivFilme>
                    <h2> Filme e sessão </h2>
                    <p>{dados.titulo}</p>
                    <p>{dados.dia} - {dados.horario}</p>
                </DivFilme>
                <DivIngresso>
                    <h2> Ingressos </h2>
                    {dados.assentos.map((item) => <p> Assento {item}</p>)}
                </DivIngresso>
                <DivComprador>
                    <h2> Comprador </h2>
                    <p>Nome: {dados.nome}</p>
                    <p>CPF: {cpf}</p>
                </DivComprador>
            </Main>

            <DivBotao>
                <Link to="/">
                    <Button> Voltar pra home </Button>
                </Link>
            </DivBotao>
        </>
    )
}

const Main = styled.main`
    margin-left: 24px;
`

const DivSucesso = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        color: #247A6B;
        font-size: 24px;
        font-weight: 700;
    }
`

const DivFilme = styled.div`
    margin-bottom: 30px;
    h2{
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    p{
        font-size: 22px;
        margin-bottom: 5px;
    }
`

const DivIngresso = styled.div`
    margin-bottom: 30px;
    h2{
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    p{
        font-size: 22px;
        margin-bottom: 5px;
    }
`

const DivComprador = styled.div`
    margin-bottom: 60px;
     h2{
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    p{
        font-size: 22px;
        margin-bottom: 5px;
    }
`

const DivBotao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    background-color: #E8833A;
    font-size: 18px;
    color: white;
    width: 225px;
    height: 43px;
    border: none;
    margin-right: 5px;
    margin-bottom: 30px;
`

const Divloading = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImgLoading = styled.img`
    width: 300px;
`
