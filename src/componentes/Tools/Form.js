import { useState } from "react";

function Form({ clientDet, openModal }){

    const [updateClientInfo, setUpdateClientInfo] = useState({
        tableRowId: clientDet.id|| "",
        folderNumber: clientDet.folderNumber || 0,
        name: clientDet.name || "",
        cpf: clientDet.cpf || "",
        action: clientDet.action || "",
        situation: clientDet.situation || "",
        indication: clientDet.indication || "",
    })

    const handleUpdateClient = () =>{
        fetch('https://simple-spreadsheet.onrender.com/rows/update',{
            method: 'POST',
            body: JSON.stringify(updateClientInfo),
            headers: {
                "Content-Type": "application/json",
            }
        }).then((resp) => resp.json())
        .catch((err) => console.log(err))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateClientInfo({ ...updateClientInfo, [name]: value });
    }

    console.log(updateClientInfo)

    return(
        <>
            <form>
                <div class="form">
                    <label for="name">Nome</label>
                    <input type="name" name="name" 
                    value={updateClientInfo.name} onChange={handleInputChange} />
                </div>

                <div class="form">
                    <label for="name">Pasta</label>
                    <input 
                    type="text" 
                    name="folder" 
                    placeholder="número da pasta"
                    value={updateClientInfo.folderNumber} onChange={handleInputChange} />
                </div>

                <div class="form">
                    <label class="cpf" for="name">CPF</label>
                    <input 
                    type="text" 
                    name="cpf" 
                    maxLength="11"
                    placeholder="cpf"
                    value={updateClientInfo.cpf} onChange={handleInputChange} />
                </div>

                <div class="form">
                    <label for="name">Ação</label>
                    <input
                    type="text" 
                    name="action" 
                    placeholder="ação"
                    value={updateClientInfo.action} onChange={handleInputChange} />
                </div>

                <div class="form">
                    <label class="wid" for="name">Situação</label>
                    <input
                    type="text" 
                    name="situation" 
                    placeholder="situação"
                    value={updateClientInfo.situation} onChange={handleInputChange} />
                </div>

                <div class="form">
                    <label class="wid" for="name">Indicação</label>
                    <input
                    type="text" 
                    name="indication" 
                    placeholder="indicação"
                    value={updateClientInfo.indication} onChange={handleInputChange} />
                </div>

                <footer>
                    <button onClick={handleUpdateClient}>Salvar</button>
                    <button onClick={() => openModal(false)}>Cancelar</button>
                </footer>
            </form>
        </>
    )
}

export default Form