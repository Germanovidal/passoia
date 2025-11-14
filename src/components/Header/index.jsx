import "./header.scss"
import logo from "../../assets/logo-passoia.png"

function Header() {
    return(
        <header>
            <img src={logo} alt="logo marca da página" />
            <ul>
                <li>LOOKS</li>
                <li>LANÇAMENTOS</li>
                <li>NOVIDADE</li>
            </ul>
        </header>
    )
}

export default Header