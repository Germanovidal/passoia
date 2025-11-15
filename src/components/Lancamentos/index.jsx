// hooks são funções especiais
// useState contrtola os estados de algo na interface
import { useState } from "react";
// import das imagens:
import azul from "../../assets/azul.png"
import vermelho from "../../assets/vermelho.png"
import base from "../../assets/base.png"
import marrom from "../../assets/marrom.png"
import baton1 from "../../assets/lancamento-produto1.jpg"
import baton2 from "../../assets/lancamento-produto2.jpg"
import baton3 from "../../assets/lancamento-produto3.jpg"
import stars from "../../assets/stars-lancamento.png"

import "./lancamentos.scss"

function Lancamentos() {

    // cor a variavel inicial, setCor a função atualizadora
    const [cor, setCor] = useState(azul)

    return (
        <section>
            <div className="section-title">
                <h2>APROVEITE OS LANÇAMENTOS</h2>
            </div>
            <div className="lancamentos">
                <div className="grid-lancamentos-img">
                    <div className="baton-liquido-aberto">
                        <img src={baton1} alt="imagem do recipiente baton liquido aberto" />
                    </div>
                    <div className="baton-liquido-fechado">
                        <img src={baton2} alt="imagem do recipiente baton liquido fechado" />
                    </div>
                    <div className="baton-normal">
                        <img src={baton3} alt="imagem do recipiente baton comum" />
                    </div>
                    <div className="mostruario-img">
                        <img src={cor} alt="imagem do baton azul" />
                    </div>
                </div>
                
                <div className="grid-seletor-lancamentos">
                    <div className="stars">
                        <img src={stars} alt="imagem de 5 estrelas de avaliação" />
                    </div>
                    <div className="lancamento-nome">
                        <h3>Matte Premium</h3>
                        <p>Cores disponíveis</p>
                    </div>
                    <div className="botao-seletor">
                        <button className="botao-azul" onClick={() => setCor(azul)}></button>
                        <button className="botao-vermelho" onClick={() => setCor(vermelho)}></button>
                        <button className="botao-marrom" onClick={() => setCor(marrom)}></button>
                        <button className="botao-base" onClick={() => setCor(base)}></button>
                    </div>
                    <div className="lancamento-descricao">
                        <h4>Descrição</h4>
                        <p>O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lancamentos