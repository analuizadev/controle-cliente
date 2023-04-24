import { useState, useEffect } from "react";

function ModalDel({ modalOpen, idClient }) {

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
    }, [])

    function deleteClient(id){
        fetch(`https://simple-spreadsheet.onrender.com/rows/delete/${id}`,{
            method: 'PUT'
        }).catch((err) => console.log(err))

        modalOpen(false)
    }

    return(
        <>
            <div class="del-body">
                <header class="header-del">
                    <h2 class="del">Deletar Registro</h2>
                    <button onClick={() => modalOpen(false)} class="close">x</button>
                </header>

                <section>
                    {clientDet.id ? (

                        <div class="modal-del">
                            <div class="message">
                                <p>Deseja deletar os registros do cliente <span>{clientDet.name}</span> ?</p>
                            </div>

                            <footer class="footer-modal">
                                <button onClick={() => deleteClient(idClient)}>Deletar</button>
                                <button onClick={() => modalOpen(false)}>Cancelar</button>
                            </footer>
                        </div>
                        
                    ):(
                        <h2 class="erro">Registro não encontrado.</h2>
                    )}
                </section>
            </div>
        </>
    )
}

export default ModalDel