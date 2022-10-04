import styled from "styled-components"

export default function SelectMovie() {

    return (
        <>
            <Main>
                <SectionTitle>
                    <h1> Selecione o filme </h1>
                </SectionTitle>
                <SectionMovies>
                    <img src="https://i0.wp.com/animagos.com.br/wp-content/uploads/2016/06/HP-Moments-1.png?ssl=1" />
                    <img src="https://www.itaucinemas.com.br/_img/_filmes/2276_capa.jpg?Harry-Potter-e-as-Reli%CC%81quias-da-Morte---Parte-2" />
                    <img src="https://i0.wp.com/animagos.com.br/wp-content/uploads/2016/06/HP-Moments-1.png?ssl=1" />
                    <img src="https://www.itaucinemas.com.br/_img/_filmes/2276_capa.jpg?Harry-Potter-e-as-Reli%CC%81quias-da-Morte---Parte-2" />
                    <img src="https://i0.wp.com/animagos.com.br/wp-content/uploads/2016/06/HP-Moments-1.png?ssl=1" />
                    <img src="https://www.itaucinemas.com.br/_img/_filmes/2276_capa.jpg?Harry-Potter-e-as-Reli%CC%81quias-da-Morte---Parte-2" />
                    <img src="https://i0.wp.com/animagos.com.br/wp-content/uploads/2016/06/HP-Moments-1.png?ssl=1" />
                    <img src="https://www.itaucinemas.com.br/_img/_filmes/2276_capa.jpg?Harry-Potter-e-as-Reli%CC%81quias-da-Morte---Parte-2" />
                </SectionMovies>
            </Main>
        </>
    )

}

const Main = styled.main`
    display: none;
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
    width: 120px;
    margin-right: 20px;
    margin-top: 10px;
   }
`