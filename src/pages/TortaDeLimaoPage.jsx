import imagem1 from '../assets/tortaDeLimao.jpg'
import '../pages/TortaDeLimao.css';
function TortaDeLimaoPage() {
    return (
        <div>
             <h1>Torta de Limão</h1>
            <div className='descProd'>
                <img src={imagem1} alt="" />
                <p className='descricao'>A torta de limão é uma sobremesa deliciosa e refrescante, muito apreciada por seu equilíbrio entre o sabor doce e o ácido. A base dessa torta geralmente é feita com uma crosta crocante de biscoito, que pode ser de bolacha maria ou bolacha de maisena, triturada e misturada com manteiga derretida. Algumas variações usam massa de torta tradicional, semelhante à massa podre ou à massa sablée, que também proporciona uma base firme e saborosa.</p>
            </div>
            <div className='precoProd'>
                <h2>R$ 0,00</h2>
                <label for="quantity">Quantidade:</label>
                <input type="number" id="quantity" name="quantity" min="1" value="1"></input>
                <button>Adicionar ao Carrinho</button>
                <button>Comprar Agora</button>
            </div>
        </div>
    );
}

export default TortaDeLimaoPage;