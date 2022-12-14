import styled from "styled-components";
import axios from "axios";

import { useParams } from "react-router-dom";
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
            setFilme(resp.data);
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
                                <h2 data-identifier="session-date"> {item.weekday} - {item.date} </h2>
                            </DivDayMovie>
                            <div>
                                {item.showtimes.map((item) => 
                                <Link to={"/assentos/" + item.id} key={item.id}>
                                    <ButtonTime data-identifier="hour-minute-btn"> 
                                        {item.name} 
                                    </ButtonTime>
                                </Link>)}
                            </div>
                        </nav>
                    )};

                </SectionDayTime>
            </Main>
            <Footer>
                <div>
                    <img src={filme.posterURL} alt="Poster do Filme" data-identifier="movie-img-preview"/>
                    <h3> {filme.title} </h3>
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
    margin-bottom:20px;
    margin-right: 80px;

`

const SectionTitle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    width: 100%;
    font-size: 28px;
    font-weight: 400;
    margin-top: 80px;
    margin-left: 80px;

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
    
    border-radius: 5px;
    box-shadow: #422800 4px 4px 0 0; 
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    :hover {
    background-color: rgb(190, 93, 25);
    }
    :active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
    }
`

const Footer = styled.footer`
    width: 100%;
    height: 117px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: gray;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.35);
    div{
        width: 330px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: start;
    }
    img{
        max-width: 60px;
        margin-right: 15px;
        margin-left: 10px;
        border: 8px solid white; 
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.6);
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
    margin-top: 100px;
`

const ImgLoading = styled.img`
    width: 300px;
`
