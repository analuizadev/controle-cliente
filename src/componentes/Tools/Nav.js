function Nav({ changeTheme }){
    return(
        <>
            <header class="nav">
                <div class='icon'>{changeTheme}</div>
               <img src="https://media.discordapp.net/attachments/1085259720920666275/1094736927871205386/cc-logo.png" 
                alt="Controle de cliente"/>
            </header>
        </>
    )
}

export default Nav