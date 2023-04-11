import styles from '../css/NewRegister.css';

function ModalNew({ modalOpen }){
    return(
        <>
            <div class="modal-body">
                <header>
                    <h2>Novo Registro</h2>
                    <button class="close" onClick={() => modalOpen(false)}>x</button>
                </header>

                <section>
                    <input type="text"></input>
                </section>
            </div>
            
        </>
    )
}

export default ModalNew