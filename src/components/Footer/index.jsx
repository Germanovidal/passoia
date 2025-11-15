import "./footer.scss"
import mastercard from "../../assets/mastercard.png"
import visa from "../../assets/visa.png"
import pix from "../../assets/pix.png"
import boleto from "../../assets/boleto.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import youtube from "../../assets/youtube.png"
import twitter from "../../assets/twitter.png"

function Footer() {
    return(
        <footer>
            <div className="atendimento">
                <h4>ATENDIMENTO</h4>
                <ul>
                    <li><a href="#">Fale Conosco</a></li>
                    <li><a href="#">Perguntas Frequentes</a></li>
                    <li><a href="#">Meus Pedidos</a></li>
                    <li><a href="#">Nossas Lojas</a></li>
                </ul>
            </div>
            <div className="pagamentos">
                <h4>FORMAS DE PAGAMENTO</h4>
                <div className="formas-pagamento">
                    <img className="sistema master" src={mastercard} alt="imagem da logo dos cartões mastercard" />
                    <img className="sistema visa" src={visa} alt="imagem da logo dos cartões visa" />
                    <img className="sistema pix" src={pix} alt="imagem da logo do pix" />
                    <img className="sistema boleto" src={boleto} alt="imagem da logo de pagamento via boleto" />
                </div>
            </div>
            <div className="redes-sociais">
                <h4>SIGA-NOS NAS REDES SOCIAIS</h4>
                <div className="icon">
                    <a href="#">
                    <img src={instagram} alt="logo do instagram" />
                </a>
                <a href="#">
                    <img src={facebook} alt="logo do facebook" />
                </a>
                <a href="#">
                    <img src={youtube} alt="logo do youtube" />
                </a>
                <a href="#">
                    <img src={twitter} alt="logo do twitter" />
                </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer