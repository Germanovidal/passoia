import "./novidades.scss"
import banner from "../../assets/bottom-banner.jpg"

function Novidades() {
    return(
        <section>
            <div className="section-title">
                <h2>NOVIDADADES PARA VOCÊ</h2>
            </div>
            <div className="novidades-produto-1">
                <img src={banner} alt="imagem de maquiagens da Passoia" />
            </div>
        </section>
    )
}

export default Novidades