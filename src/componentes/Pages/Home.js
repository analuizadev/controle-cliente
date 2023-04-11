import Table from "../Tools/Table";
import Nav from "../Tools/Nav";
import ModalNew from "../Tools/ModalNew";

import styles from "../css/Home.css";
import { useState } from "react";

function Home(){

    const [openModal, setOpenModal] = useState(false)

    function modal(){
        setOpenModal(true)
    }

    return(
        <>
            <Nav />
            
            <section class="main">
                <header class="table-header">
                    <button onClick={modal} class="new-register">Novo Registro</button>
                    <div class="search">
                        <input type="search" placeholder="Pesquise um registro..." />
                        <button class="btn-search">Buscar</button>
                    </div>
                </header>

                <Table />
            </section>

            {openModal && <ModalNew modalOpen = {setOpenModal} />}
        </>
    )
}

export default Home