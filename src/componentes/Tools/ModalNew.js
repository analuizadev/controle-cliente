import styles from '../css/Modal.css';
import { useState } from 'react';

function ModalNew({ modalOpen }) {

    const [newClient, setNewClient] = useState({
        folderNumber: 0,
        name: '',
        cpf: '',
        action: '',
        situation: '',
        indication: ''
    });

    const addClient = () => {
        fetch('https://simple-spreadsheet.onrender.com/rows/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newClient)
        }).then((resp) => resp.json())
            .catch((err) => console.log(err))

        modalOpen(false)
    }

    const submit = (e) =>{
        e.preventDefault()
        addClient()
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewClient({ ...newClient, [name]: value });
    }

    return (
        <>
            <div class="new-body">
                <header>
                    <h2>Novo Registro</h2>
                    <button class="close" onClick={() => modalOpen(false)}>x</button>
                </header>

                <form onSubmit={submit}>
                    <div class="form">
                        <label for="name">Nome</label>
                        <input type="name" name="name"
                            value={newClient.name}
                            onChange={handleChange}
                            placeholder="nome" />
                    </div>

                    <div class="form">
                        <label for="name">Pasta</label>
                        <input class="input-num"
                            type="number" name="folderNumber"
                            value={newClient.folderNumber}
                            onChange={handleChange}
                            placeholder="número da pasta" />
                    </div>

                    <div class="form">
                        <label class="cpf" for="name">CPF</label>
                        <input class="input-num"
                            type="number" name="cpf"
                            onInput={(e) => e.target.value = e.target.value.slice(0, 11)}
                            value={newClient.cpf}
                            onChange={handleChange}
                            placeholder="cpf" />
                    </div>

                    <div class="form">
                        <label for="name">Ação</label>
                        <input
                            type="text" name="action"
                            value={newClient.action}
                            onChange={handleChange}
                            placeholder="ação" />
                    </div>

                    <div class="form">
                        <label class="wid" for="name">Situação</label>
                        <input
                            type="text" name="situation"
                            value={newClient.situation}
                            onChange={handleChange}
                            placeholder="situação" />
                    </div>

                    <div class="form">
                        <label class="wid" for="name">Indicação</label>
                        <input
                            type="text" name="indication"
                            value={newClient.indication}
                            onChange={handleChange}
                            placeholder="indicação" />
                    </div>

                    <footer class="footer">
                        <button onClick={addClient}>Salvar</button>
                        <button onClick={() => modalOpen(false)}>Cancelar</button>
                    </footer>
                </form>
            </div>

        </>
    )
}

export default ModalNew