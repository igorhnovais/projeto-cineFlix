import styled from "styled-components";

export default function SelectTime() {
    return (
        <>
            <Main>
                <SectionTitle>
                    <h1> Selecione o horario </h1>
                </SectionTitle>
                <SectionDayTime>
                    <nav>
                        <DivDayMovie>
                            <h2> Quinta-feira - 24/06/2021 </h2>
                        </DivDayMovie>
                        <div>
                            <ButtonTime> 15:00 </ButtonTime>
                            <ButtonTime> 19:00 </ButtonTime>
                        </div>
                    </nav>
                    <nav>
                        <DivDayMovie>
                            <h2> Sexta-feira - 25/06/2021 </h2>
                        </DivDayMovie>
                        <div>
                            <ButtonTime> 15:00 </ButtonTime>
                            <ButtonTime> 19:00 </ButtonTime>
                        </div>
                    </nav>

                </SectionDayTime>

                <Footer>
                    <img src="https://i0.wp.com/animagos.com.br/wp-content/uploads/2016/06/HP-Moments-1.png?ssl=1" />
                    <h3> Harry Potter </h3>
                </Footer>
            </Main>
            </>
            )
}

const Main = styled.main`
    display: none;
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
