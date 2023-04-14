import styles from '../css/NewRegister.css';

function ModalNew({ modalOpen }){
    return(
        <>
            <div class="modal-body">
                <header>
                    <h2>Novo Registro</h2>
                    <button class="close" onClick={() => modalOpen(false)}>x</button>
                </header>

                <form>
                    <div class="form">
                        <label for="name">Nome</label>
                        <input type="name" name="name"
                        placeholder="nome" />
                    </div>

                    <div class="form">
                        <label for="name">Pasta</label>
                        <input 
                        type="text" 
                        name="folder" 
                        placeholder="número da pasta" />
                    </div>

                    <div class="form">
                        <label class="cpf" for="name">CPF</label>
                        <input 
                        type="text" 
                        name="cpf" 
                        maxLength="11"
                        placeholder="cpf" />
                    </div>

                    <div class="form">
                        <label for="name">Ação</label>
                        <input
                        type="text" 
                        name="action" 
                        placeholder="ação" />
                    </div>

                    <div class="form">
                        <label class="wid" for="name">Situação</label>
                        <input
                        type="text" 
                        name="situation" 
                        placeholder="situação" />
                    </div>

                    <div class="form">
                        <label class="wid" for="name">Indicação</label>
                        <input
                        type="text" 
                        name="indication" 
                        placeholder="indicação" />
                    </div>

                    <footer class="footer">
                        <button>Salvar</button>
                        <button onClick={() => modalOpen(false)}>Cancelar</button>
                    </footer>
                </form>
            </div>
            
        </>
    )
}

export default ModalNew