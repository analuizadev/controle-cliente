import styles from "../css/Modal.css";
import { useState, useEffect } from "react";

import Form from "./Form";

function ModalEdit({ modalOpen, idClient }){

    const [clientDet, setClientDet] = useState([])

    function getClientDet(){
        fetch(`https://simple-spreadsheet.onrender.com/rows/details/${idClient}`,{
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
                    <button onClick={() => modalOpen(false)} class="close">x</button>
                </header>

                <section>
                    {clientDet.id ? (
                        <>
                            <Form
                            clientDet={clientDet}
                            openModal= {modalOpen} />
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