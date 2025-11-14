// hooks são funções especiais
// useState contrtola os estados de algo na interface
import { useState } from "react";
// import das imagens:
import azul from "../../assets/azul.png"
import vermelho from "../../assets/vermelho.png"
import base from "../../assets/base.png"
import marrom from "../../assets/marrom.png"

function Lancamentos() {

    // cor a variavel inicial, setCor a função atualizadora
    const [cor, setCor] = useState(azul)

    return (
        <section>
            <h2>APROVEITE OS LANÇAMENTOS</h2>
            <img src={cor} alt="imagem do baton azul" />

            <button onClick={() => setCor(azul)}>Azul</button>
            <button onClick={() => setCor(vermelho)}>Vermelho</button>
            <button onClick={() => setCor(base)}>Base</button>
            <button onClick={() => setCor(marrom)}>Marrom</button>
        </section>
    )
}

export default Lancamentos