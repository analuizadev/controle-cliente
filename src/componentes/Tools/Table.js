import styles from '../css/Table.css';
import ModalNew from './ModalNew';
import ModalDel from './ModalDel';

import { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';

function Table() {

    var [client, setClient] = useState([])

    function clientList() {
        fetch('https://simple-spreadsheet.onrender.com/rows', {
            method: 'GET',
        }).then((resp) => resp.json())
            .then((data) => {
                setClient(data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        clientList()
    }, [])

    const [order, setOrder] = useState(1)
    const [columnOrder, setColumnOrder] = useState('name')

    const handleOrder = (fieldName) =>{
        setOrder(-order)
        setColumnOrder(fieldName)
    }

    client = client.sort( (a , b) => {
        return a[columnOrder] < b[columnOrder] ? -order : order;
    })

    function details(id) {
        window.location.href = `rows/details/${id}`
    }

    const [openModal, setOpenModal] = useState(false)

    function modal() {
        setOpenModal(true)
    }

    const [idClient, setIdClient] = useState('')
    const [openDel, setOpenDel] = useState(false)

    function deleteClient(id) {
        setOpenDel(true)
        setIdClient(id)
    }

    return (
        <>
            <div class="body">
                <header class="table-header">
                    <button onClick={modal} class="new-register">Novo Registro</button>
                    <div class="search">
                        <input type="search" placeholder="Pesquise um registro..." />
                        <button class="btn-search">Buscar</button>
                    </div>
                </header>
                <div class="scroll">

                    <table class="body-table">

                        <thead>
                            <tr>
                                <th onClick={() => handleOrder('folderNumber')}>N. Pasta</th>
                                <th onClick={() => handleOrder('name')}>Nome</th>
                                <th onClick={() => handleOrder('cpf')}>CPF</th>
                                <th onClick={() => handleOrder('action')}>Ação</th>
                                <th onClick={() => handleOrder('situation')}>Situação</th>
                                <th onClick={() => handleOrder('indication')}>Indicação</th>
                                <th>Ativo</th>
                                <th class="delete">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                client.map(clients => {

                                    return (
                                        <>
                                            <tr key={clients.id}>
                                                <td>{clients.folderNumber}</td>
                                                <td class="click"
                                                    onClick={() => details(clients.id)}>{clients.name}</td>
                                                <td>{clients.cpf}</td>
                                                <td>{clients.action}</td>
                                                <td>{clients.situation}</td>
                                                <td>{clients.indication}</td>
                                                {clients.isActive === true ? (
                                                    <td class="on"></td>
                                                ) : (
                                                    <td class="off"></td>
                                                )}
                                                <td class="delete"
                                                    onClick={() => deleteClient(clients.id)}><MdDelete /></td>
                                            </tr>
                                        </>
                                    )

                                })
                            }

                        </tbody>

                    </table>

                </div>
            </div>

            {openModal && <ModalNew
                modalOpen={setOpenModal} />}

            {openDel && <ModalDel
                modalOpen={setOpenDel}
                idClient={idClient} />}
        </>
    )
}

export default Table