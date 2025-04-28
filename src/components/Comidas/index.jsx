import Card from "../CardEstructure/index.jsx"
import {ComidasCard} from "./style"

import img1 from "../../assets/file.jpg"
import img2 from "../../assets/file.jpg"
import img3 from "../../assets/lasanha.jpg"
import img4 from "../../assets/carnedepanela.png"
import img5 from "../../assets/risoto.jpg"
import img6 from "../../assets/carbonara.png"

const ComidasList = [
    {
        img: img1,
        tittle: 'Filé ao Molho Madeira',
        description: 'Medalhões de filé mignon servidos com um molho madeira encorpado e saboroso, perfeito para ocasiões especiais.',
    },
    {
        img: img3,
        tittle: 'Lasanha',
        description: 'Camadas generosas de massa, molho bolonhesa e queijo derretido, formando um prato cheio de sabor.'
    },
    {
        img:  img5 ,
        tittle: 'Risoto de Camarão',
        description: 'Arroz arbório cozido lentamente com camarões suculentos e um toque de vinho branco, finalizado com manteiga e queijo.'
    },
    {
        img: img4,
        tittle: 'Carne de Panela',
        description: 'Carne cozida lentamente até desmanchar, servida com um molho encorpado e cheio de sabor caseiro.'
    },
    {
        img: img6 ,
        tittle: 'Macarrão à Carbonara',
        description: 'Massa envolvida em um molho cremoso de ovos, queijo e bacon crocante, pronta em poucos minutos.'
    },
    {
        img: img2 ,
        tittle: 'Hambúrguer Artesanal',
        description: 'Pão macio, hambúrguer suculento e ingredientes frescos, montados para criar o hambúrguer perfeito.'
    }
]

const Comidas = () => {
    return(

        <ComidasCard>
           {ComidasList.map((item, index) => (
            <Card key={index} card={item} />
        ))}  
        </ComidasCard>
       
        

    
    )
};

export default Comidas;