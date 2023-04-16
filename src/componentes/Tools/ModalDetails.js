import styles from '../css/Details.css';
import { useState, useEffect } from "react";

function ClientDetails({ modalOpen, idClient }){

    const [clientDet, setClientDet] = useState([])

    function clientDetails(){
        fetch(`https://simple-spreadsheet.onrender.com/rows/details/${idClient}`, {
            method: 'GET'
        }).then((resp) => resp.json())
        .then((data) => {
            setClientDet(data)
        })
    }

    useEffect(() =>{
        clientDetails()
    },[])

    return(
        <>
            <div class="details">
                <div class="card">
                    
                {clientDet.id ? (
                    <>
                        <header>
                            <div class="header-details">
                                <aside class="tag">Detalhes</aside>
                                <button onClick={() => modalOpen(false)}>x</button>
                            </div>
                            <h2>{clientDet.name}</h2>
                        </header>
                        
                        <section>
                            <div class="valid">
                                <p>Número da pasta: <span>{clientDet.folderNumber}</span></p>
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
                        </section>
                    </>
                    ): (
                        <div class="invalid">
                            <p>Cliente Inválido.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ClientDetails