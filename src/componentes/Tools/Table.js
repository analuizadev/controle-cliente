import styles from '../css/Table.css';

import { useEffect, useState } from 'react';

function Table(){

    const [client, setClient] = useState([])

    function clientList(){
        fetch('https://simple-spreadsheet.onrender.com/rows',{
            method: 'GET'
        }).then((resp) => resp.json())
        .then((data) =>{
            setClient(data)
        })
        .catch((err) => console.log(err))
    }

    useEffect(() =>{
        clientList()
    })

    function details(id){
        window.location.href=`rows/details/${id}`
    }

    return(
        <>
        <div class="scroll">
            
            <table class="body-table">

                <thead>
                    <tr>
                        <th>N. Pasta</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Ação</th>
                        <th>Situação</th>
                        <th>Indicação</th>
                        <th>Ativo</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        client.map(clients =>{

                            return(
                                <>
                                    <tr key={clients.id} onClick={() => details(clients.id)}>
                                        <td>{clients.folderNumber}</td>
                                        <td>{clients.name}</td>
                                        <td>{clients.cpf}</td>
                                        <td>{clients.action}</td>
                                        <td>{clients.situation}</td>
                                        <td>{clients.indication}</td>
                                        {clients.isActive === true ? (
                                            <td class="on"></td>
                                        ):(
                                            <td class="off"></td>
                                        )}
                                    </tr>
                                </>
                            )

                        })
                    }
                    
                </tbody>

            </table>

        </div>
        </>
    )
}

export default Table