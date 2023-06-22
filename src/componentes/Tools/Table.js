import styles from '../css/Table.css';
import ModalNew from './ModalNew';
import ModalDel from './ModalDel';
import ModalEdit from './ModalEdit';
import ModalDetails from './ModalDetails';

import { useEffect, useState } from 'react';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import { FaRegSadCry } from 'react-icons/fa';

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
    }, [client])

    const [order, setOrder] = useState(1)
    const [columnOrder, setColumnOrder] = useState('name')

    const handleOrder = (fieldName) => {
        setOrder(-order)
        setColumnOrder(fieldName)
    }

    client = client.sort((a, b) => {
        return a[columnOrder] < b[columnOrder] ? -order : order;
    })

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

    const [openEdit, setOpenEdit] = useState(false)

    function editClient(id) {
        setOpenEdit(true)
        setIdClient(id)
    }

    const [openDet, setOpenDet] = useState(false)

    function detClient(id) {
        setOpenDet(true)
        setIdClient(id)
    }

    const [search, setSearch] = useState('')

    const searchLowerCase = search.toLowerCase();

    const clientFilter = client.filter((cliente) => cliente.name.toLowerCase().includes(searchLowerCase));

    return (
        <>
            <div class="body">
                <header class="table-header">
                    <button onClick={modal} class="new-register">Novo Registro</button>
                    <div class="search">
                        <input type="text" onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            placeholder="Pesquise um registro..." />
                    </div>
                </header>

                {!client.length ? (
                    <div class="no-register">
                        <div>
                            <h2>Não há registros...</h2>
                            <span><FaRegSadCry /></span>
                        </div>
                        <div class="add-click">
                            <p><a onClick={modal}>clique aqui</a> para adicionar um registro!</p>
                        </div>
                    </div>
                ) : (
                    <div class="scroll">

                        <table class="body-table">

                            <thead>
                                <tr>
                                    <th class="filter" onClick={() => handleOrder('folderNumber')}>N. Pasta</th>
                                    <th class="filter" onClick={() => handleOrder('name')}>Nome</th>
                                    <th class="filter min" onClick={() => handleOrder('cpf')}>CPF</th>
                                    <th class="filter min" onClick={() => handleOrder('phone')}>Celular</th>
                                    <th class="filter" onClick={() => handleOrder('action')}>Ação</th>
                                    <th class="filter" onClick={() => handleOrder('situation')}>Situação</th>
                                    <th class="filter" onClick={() => handleOrder('indication')}>Indicação</th>
                                    <th>Ativo</th>
                                    <th class="action">Ações</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {clientFilter.map(clients => {

                                    return (
                                        <>
                                            <tr key={clients.id}>
                                                <td>{clients.folderNumber}</td>
                                                <td class="click"
                                                    onClick={() => detClient(clients.id)}>{clients.name}</td>
                                                <td>{clients.cpf}</td>
                                                <td>{clients.phone}</td>
                                                <td>{clients.action}</td>
                                                <td>{clients.situation}</td>
                                                <td>{clients.indication}</td>
                                                {clients.isActive === true ? (
                                                    <td class="on"></td>
                                                ) : (
                                                    <td class="off"></td>
                                                )}
                                                <td class="edit" onClick={() => editClient(clients.id)}><MdModeEditOutline /></td>
                                                <td class="delete" onClick={() => deleteClient(clients.id)}><MdDelete /></td>
                                            </tr>
                                        </>
                                    )

                                })
                                }
                            </tbody>

                        </table>

                    </div>
                )}
            </div>

            {openModal && <ModalNew
                modalOpen={setOpenModal} />}

            {openDel && <ModalDel
                modalOpen={setOpenDel}
                idClient={idClient} />}

            {openEdit && <ModalEdit
                modalOpen={setOpenEdit}
                idClient={idClient} />}

            {openDet && <ModalDetails
                modalOpen={setOpenDet}
                idClient={idClient} />}
        </>
    )
}

export default Table