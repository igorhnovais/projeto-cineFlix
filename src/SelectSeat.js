import styled from "styled-components";

export default function SelectSeat(){
    return (
        <>
            <Main>
                <SectionTitle>
                        <h1> Selecione o(s) assento(s) </h1>
                </SectionTitle>

                <SectionAllSeats>
                    <DivSeats> 01 </DivSeats>
                    <DivSeats> 01 </DivSeats>
                    <DivSeats> 01 </DivSeats>
                    <DivSeats> 01 </DivSeats>
                    <DivSeats> 01 </DivSeats>
                    <DivSeats> 01 </DivSeats>
                    <DivSeats> 01 </DivSeats>
                    <DivSeats> 01 </DivSeats>
                    <DivSeats> 01 </DivSeats>
                    <DivSeats> 01 </DivSeats>
                </SectionAllSeats>

                <SectionReservAsset>
                    <div>
                        <h2> Nome do comprador:</h2>
                        <input placeholder="Digite seu nome"></input>
                    </div>
                    <div>
                        <h2> Cpf do comprador:</h2>
                        <input placeholder="Digite seu cpf"></input>
                    </div>
                </SectionReservAsset>

                <ButtonReservAsset> Reservar assento(s)</ButtonReservAsset>

                <Footer>
                    <img src="https://i0.wp.com/animagos.com.br/wp-content/uploads/2016/06/HP-Moments-1.png?ssl=1" />
                    <div>
                        <h3> Harry Potter </h3>
                        <h3> Quinta-feira - 15:00 </h3>
                    </div>
                </Footer>
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

const SectionAllSeats = styled.section`
    display: flex;
    gap: 10px;
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
        font-size: 24px;
        color: #293845;
    }
`


