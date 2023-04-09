import Table from "../Tools/Table";
import Nav from "../Tools/Nav";
import styles from "../css/Home.css";

function Home(){
    return(
        <>
            <Nav />
            
            <section class="main">
                <header class="table-header">
                    <button class="new-register">Novo Registro</button>
                    <div class="search">
                        <input type="search" placeholder="Pesquise um registro..." />
                        <button class="btn-search">Buscar</button>
                    </div>
                </header>

                <Table />
            </section>
        </>
    )
}

export default Home