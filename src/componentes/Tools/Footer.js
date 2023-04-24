import styles from '../css/Footer.css';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

function Footer(){

    return(
        <>
            <footer class='footer'>
                <p><span>Client Control</span> <AiOutlineCopyrightCircle />2023
                    made by <a target='_blank' href="https://www.linkedin.com/in/ana-luiza-de-castro-6580081b7/">Ana Luiza de Castro</a>
                </p>
            </footer>
        </>
    )
}

export default Footer