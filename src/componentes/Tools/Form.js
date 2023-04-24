import { useState } from "react";

function Form({ clientDet, openModal }){
 
    const [updateClientInfo, setUpdateClientInfo] = useState({
        tableRowId: clientDet.id|| "",
        folderNumber: clientDet.folderNumber || "",
        name: clientDet.name || "",
        cpf: clientDet.cpf || "",
        action: clientDet.action || "",
        situation: clientDet.situation || "",
        indication: clientDet.indication || "",
        isActive: clientDet.indication || ""
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

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setUpdateClientInfo({ ...updateClientInfo, [name]: value === 'true' });
    }

    const submit = (e) => {
        handleUpdateClient()
    }

    return(
        <>
            <form onSubmit={submit}>
                <div class="form">
                    <label for="name">Nome</label>
                    <input type="name" name="name" 
                    value={updateClientInfo.name} onChange={handleInputChange} />
                </div>

                <div class="form">
                    <label for="folder">Pasta</label>
                    <input class="input-num"
                    type="number" name="folderNumber"
                    placeholder="número da pasta"
                    value={updateClientInfo.folderNumber} onChange={handleInputChange} />
                </div>

                <div class="form">
                    <label class="cpf" for="cpf">CPF</label>
                    <input class="input-num"
                    type="number" name="cpf" 
                    onInput={(e) => e.target.value = e.target.value.slice(0, 11)}
                    placeholder="cpf"
                    value={updateClientInfo.cpf} onChange={handleInputChange} />
                </div>

                <div class="form">
                    <label for="action">Ação</label>
                    <input
                    type="text" name="action" 
                    placeholder="ação"
                    value={updateClientInfo.action} onChange={handleInputChange} />
                </div>

                <div class="form">
                    <label class="wid" for="situation">Situação</label>
                    <input
                    type="text" name="situation" 
                    placeholder="situação"
                    value={updateClientInfo.situation} onChange={handleInputChange} />
                </div>

                <div class="form">
                    <label class="wid" for="indication">Indicação</label>
                    <input
                    type="text" name="indication" 
                    placeholder="indicação"
                    value={updateClientInfo.indication} onChange={handleInputChange} />
                </div>

                <div class="active">
                    <div>
                        <input type="radio" name="isActive"
                        value="true" onChange={handleRadioChange}
                        checked={updateClientInfo.isActive === true}/>
                        <label>Ativo</label>
                    </div>

                    <div>
                        <input type="radio" name="isActive"
                        value="false" onChange={handleRadioChange}
                        checked={updateClientInfo.isActive === false}/>
                        <label>Inativo</label>
                    </div>
                </div>

                <footer class="footer-modal">
                    <button>Salvar</button>
                    <button onClick={() => openModal(false)}>Cancelar</button>
                </footer>
            </form>
        </>
    )
}

export default Form