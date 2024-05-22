import './Home.css';
import Imagem1 from '../assets/brownie.jpg';
import Imagem2 from '../assets/cafe.jpg';
import Imagem3 from '../assets/cappuccino.jpg';
import Imagem4 from '../assets/tortaDeLimao.jpg';
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    }
    return (
        <div id='container'>
            <h1>Bichinhos Cafeteria</h1>
            <div id='produtos'>
                <div className="produto">
                    <img src={Imagem1} alt="Brownie" />                   
                    <a href="/descricao/brownie">Brownie</a>
                    <p>R$0,00</p>
                </div>
                <div className="produto">
                    <img src={Imagem2} alt="Café" />
                    <a href="/descricao/cafe">Café</a>
                    <p>R$0,00</p>
                </div>
                <div className="produto">
                    <img src={Imagem3} alt="Cappuccino" />
                    <a href="/descricao/cappuccino">Cappuccino</a>
                    <p>R$0,00</p>
                </div>
                <div className="produto">
                    <img src={Imagem4} alt="Torta de Limão" />
                    <a href="/descricao/torta-de-limao">Torta de Limão</a>
                    <p>R$0,00</p>
                </div>
            </div>
        </div>
    );
}

export default Home;