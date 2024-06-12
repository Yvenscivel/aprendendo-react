import './Card.css'
import poster from '../assets/boys.jpg';

function Card(){
    return(
        <div>
            <div className="container">
                <div className="img">
                    <img src={poster} alt="The boys poster" title='The boys poster' width={300}/>
                </div>
                <div className="conteudo">
                    <h1>Pôster: The Boys (2019)</h1>
                    <p>The Boys se passa em um universo onde indivíduos superpoderosos são reconhecidos como heróis pelo público em geral e pertencem à poderosa corporação Vought International, que os comercializa e monetiza. Fora de suas personas heroicas, a maioria é arrogante e corrupta. A série se concentra principalmente em dois grupos: os Sete, o principal time de super-heróis da Vought International, e os Rapazes / The Boys, vigilantes, que procuram manter os heróis corrompidos sob controle.</p>
                    <button>Assistir agora</button>
                </div>
            </div>
            
        </div>
    )
}

export default Card;