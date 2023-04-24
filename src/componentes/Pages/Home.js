import Table from "../Tools/Table";
import Nav from "../Tools/Nav";
import Footer from "../Tools/Footer";

import styles from "../css/Home.css";
import { BsFillMoonStarsFill } from 'react-icons/bs';

function Home() {

    function toggleDark() {
        document.body.classList.toggle('dark')
    }

    function loadTheme() {
        const darkMode = localStorage.getItem("dark")

        if (darkMode) {
            toggleDark()
        }
    }

    loadTheme()

    function toggleTheme() {
        toggleDark()

        localStorage.removeItem('dark')

        if (document.body.classList.contains('dark')) {
            localStorage.setItem('dark', 1)
        }
    }

    return (
        <>
            <Nav changeTheme={<BsFillMoonStarsFill onClick={toggleTheme} />} />

            <section class="main">
                <Table />
            </section>

            <Footer />
        </>
    )
}

export default Home