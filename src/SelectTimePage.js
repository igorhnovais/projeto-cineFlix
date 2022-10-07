import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function SelectTimePage() {

    const { idFilme } = useParams();

    const [filme, setFilme] = useState([]);


    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`;
        const promise = axios.get(URL);

        promise.then(recebeFilme);

        function recebeFilme(resp) {
            setFilme(resp.data)
        }

        promise.catch((erro => { alert('Tente de novo mais tarde') }));


    }, [idFilme])

    if (filme.length === 0) {
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
                    <h1> Selecione o horario </h1>
                </SectionTitle>

                <SectionDayTime>

                    {filme.days.map((item) =>
                        <nav key={item.id}>
                            <DivDayMovie>
                                <h2> {item.weekday} - {item.date} </h2>
                            </DivDayMovie>
                            <div>
                                {item.showtimes.map((item) => 
                                <Link to={"/assentos/" + item.id}>
                                    <ButtonTime key={item.id}> 
                                        {item.name} 
                                    </ButtonTime>
                                </Link>)}
                            </div>
                        </nav>
                    )};

                </SectionDayTime>
            </Main>
            <Footer>
                <img src={filme.posterURL} />
                <h3> {filme.title} </h3>
            </Footer>
        </>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
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

const SectionDayTime = styled.section`
    margin-left: 24px;
    margin-bottom: 117px;
`

const DivDayMovie = styled.div`
            font-size: 20px;
            font-weight: 300;
            margin-bottom: 30px;
`

const ButtonTime = styled.button`
    background-color: #E8833A;
    font-size: 18px;
    color: white;
    width: 83px;
    height: 43px;
    border: none;
    margin-right: 5px;
    margin-bottom: 30px;
`

const Footer = styled.footer`
    width: 100%;
    height: 117px;
    display: flex;
    justify-content: start;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: rgb(223, 230, 238);
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.35);
    img{
        width: 50px;
        margin-right: 15px;
        border: 8px solid white; 
        margin-left: 24px; 
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
