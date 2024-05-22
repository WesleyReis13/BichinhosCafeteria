import imagem1 from '../assets/brownie.jpg'
function BrowniePage() {
    return (<div>
    <h1>Brownie</h1>
   <div className='descProd'>
       <img src={imagem1} alt="" />
       <p className='descricao'>O brownie é uma sobremesa irresistível que encanta paladares ao redor do mundo com sua textura densa, sabor rico e indulgente e aroma reconfortante de chocolate. Originário dos Estados Unidos, o brownie é uma verdadeira delícia que conquistou seu lugar como uma das sobremesas mais amadas e reconhecíveis.</p>
   </div>
   <div className='precoProd'>
       <h2>R$ 0,00</h2>
       <label for="quantity">Quantidade:</label>
       <input type="number" id="quantity" name="quantity" min="1" value="1"></input>
       <button>Adicionar ao Carrinho</button>
       <button>Comprar Agora</button>
   </div>
</div>
    )
}

export default BrowniePage;
