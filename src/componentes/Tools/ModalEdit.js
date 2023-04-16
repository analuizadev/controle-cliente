import { useParams } from "react-router-dom";
import styles from "../css/Modal.css";
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
    }, [])
    
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
                            openModal= {openModal} />
                        </>
                    ) : (
                        <h2 class="erro">Cliente não encontrado</h2>
                    )}
                    
                </section>
            </div>
        </>
    )
}

export default ModalEdit