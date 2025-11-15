import "./makup.scss"

function Makeup() {
    return (
        <section>
            <div className="section-title">
                <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
            </div>
            <div className="cards">
                <article className="card-labios"></article>
                <article className="card-olhos"></article>
                <article className="card-rosto"></article>
                <article className="card-tendencia"></article>
            </div>
        </section>
    )
}

export default Makeup