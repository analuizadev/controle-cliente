import styles from '../css/Footer.css';
import { AiOutlineCopyrightCircle, AiFillHeart, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function Footer() {

    return (
        <>
            <footer class='footer'>
                <p><span>Client Control</span><AiOutlineCopyrightCircle /> 2023 Copyright </p>
                <p class="credits">Este site foi desenvolvido com <a class="heart"><AiFillHeart /></a> por
                    <span>Ana Luiza de Castro</span>
                    <a target='_blank' href="https://github.com/analuizadev"><AiFillGithub /></a> 
                    <a target='_blank' href='https://www.linkedin.com/in/ana-luiza-de-castro-6580081b7/'><AiFillLinkedin /></a>
                </p>
            </footer>
        </>
    )
}

export default Footer