import { CardForma } from "./style"

function Card ({card}){
    return (
        <CardForma>
            <img src={card.img} alt="" />
            <h1> {card.tittle} </h1>
            <p> {card.description} </p>
        </CardForma>
    )
}

export default Card;

//ESTRUTURA DO CARD