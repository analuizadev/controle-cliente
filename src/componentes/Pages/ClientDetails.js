import Nav from "../Tools/Nav";
import styles from '../css/Details.css';

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiEdit2 } from 'react-icons/fi';

function ClientDetails(){

    const client = useParams()

    const [clientDet, setClientDet] = useState([])

    function clientDetails(){
        fetch(`https://simple-spreadsheet.onrender.com/rows/details/${client.id}`, {
            method: 'GET'
        }).then((resp) => resp.json())
        .then((data) => {
            setClientDet(data)
        })
    }

    useEffect(() =>{
        clientDetails()
    })

    function voltar(){
        window.location.href='/'
    }

    return(
        <>
            <Nav />

            <div class="details">
                <div class="interativo">
                    <button onClick={voltar} class="back">Voltar</button>

                    <button class="edit"><FiEdit2 /></button>
                </div>
                
                <div class="card">
                    <header>
                        <h2>Detalhes do Cliente</h2>
                    </header>
                    
                    <section>
                        {clientDet.id ? (
                            <>
                                <div class="valid">
                                    <p>Número da pasta: <span>{clientDet.folderNumber}</span></p>
                                    <p>Nome: <span>{clientDet.name}</span></p>
                                    <p>CPF: <span>{clientDet.cpf}</span></p>
                                    <p>Ação: <span>{clientDet.action}</span></p>
                                    <p>Situação: <span>{clientDet.situation}</span></p>
                                    <p>Indicação: <span>{clientDet.indication}</span></p>
                                    <p>Ativo: {clientDet.isActive === true ? (
                                        <span class="on"></span>
                                    ):(
                                        <span class="off"></span>
                                    )}</p>
                                </div>
                            </>
                        ): (
                            <div class="invalid">
                                <p>Cliente Inválido.</p>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </>
    )
}

export default ClientDetails