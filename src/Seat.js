import styled from "styled-components";

import { useState } from "react";


export default function Seat({item, disponivel, assentoEscolhido, setAssentoEscolhido, id, assentoNumero, setAssentoNumero}) {

    const [corAssento, setCorAssento] = useState("rgb(195, 208, 217)");
    const [situacao, setSituacao] = useState(true);
    

    function reservSeat(situacao){
        if(situacao){
            setCorAssento("rgb(25, 175, 158)");
            setSituacao(false);
            setAssentoEscolhido([...assentoEscolhido, id]);
            setAssentoNumero([...assentoNumero, item.name]);
        }  else {           
            setCorAssento("rgb(195, 208, 217)");
            setSituacao(true);
            let arr = assentoEscolhido.filter((item) => item !== id);
            setAssentoEscolhido([...arr]);
            let arr2 = assentoNumero.filter((par) => par !== item.name);
            setAssentoNumero([...arr2]);
        }
    } 

    return (
        <>
           {disponivel 
           
           ?

           <DivSeats  onClick={() => reservSeat(situacao)} 
           color={corAssento}
           data-identifier="seat"> 
           {item.name} 
           </DivSeats>  
           
           :

           <DivSeats onClick={() => alert('Esse assento não está disponível')}
           color={"rgb(251, 227, 140)"}
           data-identifier="seat"> 
           {item.name} 
           </DivSeats> }

        </>
    )
}

const DivSeats = styled.div`
    background-color: ${props => props.color === "" ? "" : props.color};
    width: 30px;
    height: 22px;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    line-height: 23px;
    border-radius: 14px;
    margin-top: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);

    cursor: pointer;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    :hover {
    background-color: rgb(138, 176, 214);
    }
    :active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
    }
`