import { useState } from "react";
import Input from "./Input";
import Submit from "./Submit";

function Form({ clientDet, handleSubmit, btnText, openModal }){

    const [info, setInfo] = useState(clientDet || {})

    function handleChange(e) {
        setInfo({ ...info, [e.target.name]: e.target.value})
    }

    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(info)
    }

    return(
        <>
            <form onSubmit={submit}>
                <div class="form">
                    <label for="name">Nome</label>
                    <Input 
                    type="text" 
                    name="name" 
                    placeholder="nome"
                    handleOnChange={handleChange}
                    value={info.name} />
                </div>

                <div class="form">
                    <label for="name">Pasta</label>
                    <Input 
                    type="text" 
                    name="folder" 
                    placeholder="número da pasta"
                    handleOnChange={handleChange}
                    value={info.folderNumber} />
                </div>

                <div class="form">
                    <label class="cpf" for="name">CPF</label>
                    <Input 
                    type="text" 
                    name="cpf" 
                    maxLength="11"
                    placeholder="cpf"
                    handleOnChange={handleChange}
                    value={info.cpf} />
                </div>

                <div class="form">
                    <label for="name">Ação</label>
                    <Input 
                    type="text" 
                    name="action" 
                    placeholder="ação"
                    handleOnChange={handleChange}
                    value={info.action} />
                </div>

                <div class="form">
                    <label class="wid" for="name">Situação</label>
                    <Input 
                    type="text" 
                    name="situation" 
                    placeholder="situação"
                    handleOnChange={handleChange}
                    value={info.situation} />
                </div>

                <div class="form">
                    <label class="wid" for="name">Indicação</label>
                    <Input 
                    type="text" 
                    name="indication" 
                    placeholder="indicação"
                    handleOnChange={handleChange}
                    value={info.indication} />
                </div>

                <footer>
                    <Submit text={btnText}/>
                    <button onClick={() => openModal(false)}>Cancelar</button>
                </footer>
            </form>
        </>
    )
}

export default Form