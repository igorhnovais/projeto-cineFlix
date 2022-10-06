import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Seat from "./Seat";

export default function SelectSeat() {

    const { idSessao } = useParams();

    const [assento, setAssento] = useState([]);
    const [assentoEscolhido, setAssentoEscolhido] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");


    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;
        const promise = axios.get(URL);

        promise.then(resp => setAssento(resp.data));

        promise.catch((erro => { alert('Tente de novo mais tarde') }));
    }, [])


    const objFinal = {
        ids: assentoEscolhido,
        name: nome,
        cpf: cpf
    }

    function reservarAssento() {

        const requisicao = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", objFinal);

        requisicao.then((resp => { alert("deu certo de mandar a requisição") }));

        requisicao.catch((erro => { alert('Tente de novo mais tarde') }));
    }




    if (assento.length === 0) {
        return (
            <Divloading>
                <ImgLoading src="http://www.sitiosaocarlos.com.br/imgsite/loading.gif" />
            </Divloading>
        )
    }

    return (
        <>
            <Main>
                <SectionTitle>
                    <h1> Selecione o(s) assento(s) </h1>
                </SectionTitle>

                <SectionAllSeats>
                    {assento.seats.map((item) =>
                        <Seat key={item.id} id={item.id} item={item} disponivel={item.isAvailable}/> 
                    )}
                </SectionAllSeats>
                

                <SectionTypesSeats>
                    <div>
                        <DivSeats1></DivSeats1>
                        <h4> Selecionado </h4>
                    </div>
                    <div>
                        <DivSeats></DivSeats>
                        <h4> Disponível </h4>
                    </div>
                    <div>
                        <DivSeats3></DivSeats3>
                        <h4> Indisponível </h4>
                    </div>

                </SectionTypesSeats>

                <SectionReservAsset>
                    <div>
                        <h2> Nome do comprador:</h2>
                        <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome"></input>
                    </div>
                    <div>
                        <h2> Cpf do comprador:</h2>
                        <input value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu cpf"></input>
                    </div>
                </SectionReservAsset>

                <ButtonReservAsset onClick={reservarAssento}> Reservar assento(s)</ButtonReservAsset>

            </Main>

            <Footer>
                <img src={assento.movie.posterURL} />
                <div>
                    <h3> {assento.movie.title} </h3>
                    <h3> {assento.day.weekday} - {assento.name} </h3>
                </div>
            </Footer>
        </>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 117px;
`

const SectionTitle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    width: 100%;
    font-size: 24px;
    font-weight: 400;
`

const SectionTypesSeats = styled.section`
    display: flex;
    margin: 50px;
    h4{
        margin-top: 20px;
        margin-left: 20px;
    }
    
`
const SectionAllSeats = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 10px;
`

const DivSeats = styled.div`
    background-color: rgb(195, 208, 217);
    width: 22px;
    height: 22px;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 23px;
    border-radius: 14px;
`
const DivSeats1 = styled.div`
    background-color: rgb(25, 175, 158);
    width: 22px;
    height: 22px;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 23px;
    border-radius: 14px;
`

const DivSeats3 = styled.div`
    background-color: rgb(251, 227, 140);
    width: 22px;
    height: 22px;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 23px;
    border-radius: 14px;
`

const SectionReservAsset = styled.section`
    margin-top: 40px;

    h2{
        margin-top: 10px;
        font-size: 18px;
    }
    input{
        width: 327px;
        height: 45px;
        margin-top: 10px;
    }
`

const ButtonReservAsset = styled.button`
    background-color: #E8833A;
    border: none;
    color: white;
    font-size: 18px;
    width: 225px;
    height: 42px;
    margin-top: 40px;
    margin-bottom: 10px;
`

const Footer = styled.footer`
   width: 100%;
    height: 117px;
    display: flex;
    justify-content: start;
    align-items: center;
    position: fixed;
    bottom: 0;
    background-color: rgb(223, 230, 238);
    margin-left: 24px;

    img{
        width: 50px;
        margin-right: 15px;
        border: 8px solid white;  
    }
    h3{
        font-size: 26px;
        color: #293845;
    } 
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


