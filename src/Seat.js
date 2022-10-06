import styled from "styled-components";
import { useState } from "react";

export default function Seat({item, disponivel}) {
    let colorAtual = "rgb(195, 208, 217)" 

    const [corAssento, setCorAssento] = useState("");

    function verify(){
        if(disponivel === false){
            colorAtual = "rgb(251, 227, 140)"
        } else if(disponivel === true){
            colorAtual = "rgb(195, 208, 217)"
        }
    }
    verify();
    
    function reservSeat(){
        if(disponivel === true){
            setCorAssento("rgb(25, 175, 158)");
        } 
    }

    return (
        <>
            <DivSeats onClick={reservSeat} state={corAssento} color={colorAtual}> {item.name} </DivSeats>  
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