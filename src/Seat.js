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

    function unavailable(){
        alert('Esse assento não está disponível');
    }

    return (
        <>
           {disponivel 
           
           ?

           <DivSeats  onClick={() => reservSeat(situacao)} 
           color={corAssento}> 
           {item.name} 
           </DivSeats>  
           
           :

           <DivSeats onClick={unavailable}
           color={"rgb(251, 227, 140)"}> 
           {item.name} 
           </DivSeats> }

        </>
    )
}

const DivSeats = styled.div`
    background-color: ${props => props.color ==="" ? props.state : props.color};
    width: 22px;
    height: 22px;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 23px;
    border-radius: 14px;
`