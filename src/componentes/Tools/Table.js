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
    }, [client])

    const [order, setOrder] = useState(1)
    const [columnOrder, setColumnOrder] = useState('name')

    const handleOrder = (fieldName) => {
        setOrder(-order)
        setColumnOrder(fieldName)
    }

    client = client.sort((a, b) => {
        return a[columnOrder].toLowerCase() < b[columnOrder].toLowerCase() ? -order : order;
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

    const [query, setQuery] = useState('')
    const [limit, setLimit] = useState(0)
    const [results, setResults] = useState([])

    const handleQueryChange = (event) => {
        setQuery(event.target.value)
    }

    const handleLimitChange = (event) => {
        setLimit(parseInt(event.target.value))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch('https://simple-spreadsheet.onrender.com/rows/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query,
                limit
            })
        }).then((resp) => resp.json())
            .then((data) => { setResults(data) })
            .catch((err) => { console.error('Erro ao pesquisar registros:', err) })
    }

    const resultSearch = results.map((result) => {
        return (
            <>
                <tr key={result.id}>
                    <td>{result.folderNumber}</td>
                    <td class="click"
                        onClick={() => details(result.id)}>{result.name}</td>
                    <td>{result.cpf}</td>
                    <td>{result.action}</td>
                    <td>{result.situation}</td>
                    <td>{result.indication}</td>
                    {result.isActive === true ? (
                        <td class="on"></td>
                    ) : (
                        <td class="off"></td>
                    )}
                    <td class="delete"
                        onClick={() => deleteClient(result.id)}><MdDelete /></td>
                </tr>
            </>
        )
    })

    return (
        <>
            <div class="body">
                <header class="table-header">
                    <button onClick={modal} class="new-register">Novo Registro</button>
                    <div class="search">
                        <input type="text" onChange={handleQueryChange}
                            placeholder="Pesquise um registro..." />
                        <input class="limit" type="number" value={limit} onChange={handleLimitChange} />
                        <button class="btn-search" onClick={handleSubmit}>Buscar</button>
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
                            {!results.length ? (
                                <>
                                    {client.map(clients => {

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
                                </>
                            ) : (
                                <>{resultSearch}</>
                            )}
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