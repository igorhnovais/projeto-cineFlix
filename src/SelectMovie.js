import styled from "styled-components"
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function SelectMovie() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {

        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(recebeFilmes);

        function recebeFilmes(resp){
            setMovie(resp.data)
        }
            
        promise.catch((erro => {alert('deu ruim')}));
    }, []);

    return (
        <>
            <Main>
                <SectionTitle>
                    <h1> Selecione o filme </h1>
                </SectionTitle>
                <SectionMovies>
                    <Link to="/selecionar-horario">
                        {movie.map(item => <img src={item.posterURL} alt={"foto de capa do filme"}key={item.id}/>)}
                    </Link>
                </SectionMovies>
            </Main>
        </>
    )

}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const SectionMovies = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
   img{
    margin-left: 30px;
    width: 140px;
    margin-top: 10px;
   }
`