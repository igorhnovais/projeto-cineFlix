import axios from "axios";
import { useState } from "react";

export default function ScriptFinalPage({dados}) {

    let cpf = dados.cpf;
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
    function( regex, argumento1, argumento2, argumento3, argumento4 ) {
           return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
   })
   
    return (
        <>
            <div>
                <h1> Pedido feito com sucesso!</h1>
            </div>
            <div>
                <h2> Filme e sessão </h2>
                <p>{dados.titulo}</p>
                <p>{dados.dia} - {dados.horario}</p>
            </div>
            <div>
                <h2> Ingressos </h2>
                <p>{dados.assentos}</p>
            </div>
            <div>
                <h2> Comprador </h2>
                <p>{dados.nome}</p>
                <p>{cpf}</p>
            </div>

            <button> Voltar pra home </button>
        </>
    )
}