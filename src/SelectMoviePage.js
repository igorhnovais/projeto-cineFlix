import styled from "styled-components"
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function SelectMovie() {

    const [movie, setMovie] = useState(null);

    useEffect(() => {

        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(recebeFilmes);

        function recebeFilmes(resp) {
            setMovie(resp.data)
        }

        promise.catch((erro => { alert('Tente de novo mais tarde') }));
    }, []);

    if (movie === null) {
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
                    <h1> Selecione o filme </h1>

                </SectionTitle>
                <SectionMovies>

                    {movie.map(item =>
                        <Link to={"/sessoes/" + item.id} key={item.id}>
                            <img src={item.posterURL} alt={"foto de capa do filme"} data-identifier="movie-outdoor"/>
                        </Link>
                    )}

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
    margin-top: 80px;
    font-size: 28px;
`

const SectionMovies = styled.section` 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
   img{
    width: 140px;
    margin-top: 10px;
    box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.8);
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