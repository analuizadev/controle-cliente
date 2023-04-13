import { useParams } from "react-router-dom";
import styles from "../css/EditClient.css";
import { useState, useEffect } from "react";

import Form from "./Form";

function ModalEdit({openModal}){

    const det = useParams()

    const [clientDet, setClientDet] = useState([])

    function getClientDet(){
        fetch(`https://simple-spreadsheet.onrender.com/rows/details/${det.id}`,{
            method: 'GET'
        }).then((resp) => resp.json())
        .then((data) =>{
            setClientDet(data)
        })
        .catch((err) => console.log(err))
    }

    useEffect(() =>{
        getClientDet()
    })

    function editClient() {
        fetch('https://simple-spreadsheet.onrender.com/rows/update',{
            method: 'POST',
            body: {
                "tableRowId": "string",
                "folderNumber": 0,
                "name": "string",
                "cpf": "string",
                "action": "string",
                "situation": "string",
                "indication": "string"
            }
        }).then((resp) => resp.json())
        .then((data) =>{
            console.log(data)
        })
    }

    return(
        <>
            <div class="edit-body">
                <header>
                    <h2>Editar Cliente</h2>
                    <button onClick={() => openModal(false)} class="close">x</button>
                </header>

                <section>
                    {clientDet.id ? (
                        <>
                            <Form
                            clientDet={clientDet}
                            handleSubmit={editClient}
                            btnText= "Salvar"
                            openModal= {openModal} />
                        </>
                    ) : (
                        <h2>Cliente não encontrado</h2>
                    )}
                    
                </section>
            </div>
        </>
    )
}

export default ModalEdit