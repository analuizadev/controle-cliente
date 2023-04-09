import { Link } from "react-router-dom"

function Nav(){
    return(
        <>
            <header class="nav">
               <Link to="/"> <img src="https://media.discordapp.net/attachments/1085259720920666275/1094736927871205386/cc-logo.png" 
                alt="Controle de cliente"/> </Link>
            </header>
        </>
    )
}

export default Nav